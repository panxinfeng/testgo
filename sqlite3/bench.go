package main

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {
	db, err := sql.Open("sqlite3", "./db")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer db.Close()
	_, err = db.Exec("PRAGMA synchronous=OFF")
	checkErr(err)
	_, err = db.Exec("DROP TABLE IF EXISTS 'people'")
	checkErr(err)
	_, err = db.Exec("CREATE TABLE people(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)")
	checkErr(err)
	stmt, err := db.Prepare("INSERT INTO people(name,age) values(?,?)")
	checkErr(err)

	start := time.Now()

	_, err = db.Exec("BEGIN")
	checkErr(err)
	for i := 0; i < 1000000; i++ {
		stmt.Exec("zhangsan", 20)
	}
	_, err = db.Exec("COMMIT")
	checkErr(err)
	stmt.Close()

	end := time.Now()
	fmt.Println(end.Sub(start))
}
