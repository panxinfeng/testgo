package cache

import (
	"fmt"
	"os"
	"strconv"
	"test/util"
	"time"

	gocache "github.com/pmylund/go-cache"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Person struct {
	ID   int `gorm:"PrimaryKey"`
	Name string
	Age  int
}

type Cache struct {
	db    *gorm.DB
	cache *gocache.Cache
}

func NewCache(expire time.Duration) *Cache {
	os.RemoveAll("./db")
	db, err := gorm.Open(sqlite.Open(fmt.Sprintf("file:%s?cache=private&_journal_mode=WAL", "./db")), &gorm.Config{
		PrepareStmt: true,
	})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&Person{})

	//insert data
	for i := 0; i <= 10; i++ {
		db.Save(&Person{ID: i, Name: util.RandomStr(6), Age: util.RandIntn(40)})
	}

	cache := new(Cache)
	cache.db = db
	cache.cache = gocache.New(expire, time.Second*10)
	return cache
}

func (c *Cache) Get(id int) *Person {
	x := strconv.Itoa(id)
	if v, ok := c.cache.Get(x); ok {
		fmt.Println("get hit")
		return v.(*Person)
	}
	fmt.Println("get not hit")
	p := &Person{ID: id}
	if c.db.First(p).Error == nil {
		c.cache.Set(x, p, gocache.DefaultExpiration)
		return p
	}
	return nil
}

func (c *Cache) Set(id int, p *Person) {
	x := strconv.Itoa(id)
	if _, ok := c.cache.Get(x); ok {
		fmt.Println("set hit")
		c.cache.Set(x, p, gocache.DefaultExpiration)
	}
	c.db.Updates(p)
}

func main() {
	cache := NewCache(time.Second * 60)
	cache.Get(1)
	cache.Get(1)
	cache.Set(2, &Person{ID: 1, Name: "xxx", Age: 11})
	cache.Get(2)
	cache.Set(2, &Person{ID: 1, Name: "xxxx", Age: 11})
}
