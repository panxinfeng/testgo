package main

import (
	"fmt"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type Person struct {
	ID   int `gorm:"primaryKey;AUTO_INCREMENT"`
	Name string
	Age  int
}

var DSN = "root:123@tcp(192.168.4.41:3306)/test?charset=utf8mb4"
var DB *gorm.DB

func init() {
	var err error
	DB, err = gorm.Open(mysql.Open(DSN), &gorm.Config{
		SkipDefaultTransaction: true,
		AllowGlobalUpdate:      true,
		PrepareStmt:            true,
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})
	if err != nil {
		log.Fatalln(err)
	}

	DB.AutoMigrate(Person{})
}

func Insert() {
	DB.Debug().Create(&Person{Name: "zhang3", Age: 10})
	DB.Debug().Create(&Person{Name: "li4", Age: 11})
	DB.Debug().Create(&Person{Name: "wang5", Age: 12})
}

func Select() {
	var ps []Person
	DB.Debug().Find(&ps, "age >?", 10)
	fmt.Println("查询结果:", ps)
}

func Update() {
	rf := DB.Debug().Model(Person{}).Where("name = ?", "zhang3").Update("name", "zhangsan").RowsAffected
	fmt.Println("更新记录条数:", rf)
}

func Delete() {
	rf := DB.Debug().Delete(Person{}).RowsAffected
	fmt.Println("删除记录条数:", rf)
}

func main() {
	Insert()
	Select()
	Update()
	Delete()
}
