package main

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

type Person struct {
	ID       int
	UserName string
	Password string
}

func Insert() {
	stmt, err := db.Prepare("insert into person values(?,?,?)")
	if err != nil {
		fmt.Println("prepare error:", err)
		return
	}
	ret, err := stmt.Exec(1, "zhangsan", "123")
	if err != nil {
		fmt.Println("insert error:", err)
		return
	}
	rf, err := ret.RowsAffected()
	if err != nil {
		fmt.Println("insert error:", err)
		return
	}
	id, _ := ret.LastInsertId()
	fmt.Println("成功插入的行数:", rf, "id:", id)
}

func QueryRow() {
	var p Person
	err := db.QueryRow("select * from person where id = ?", 1).Scan(&p.ID, &p.UserName, &p.Password)
	if err != nil {
		fmt.Printf("QueryRow error:%v\n", err)
	} else {
		fmt.Printf("queryRow person: id:%d,username:%s,password:%s\n", p.ID, p.UserName, p.Password)
	}
}

func QueryRows() {
	rows, err := db.Query("select * from person")
	if err != nil {
		fmt.Printf("QueryRows error:%v\n", err)
		return
	}
	for rows.Next() {
		var p Person
		err := rows.Scan(&p.ID, &p.UserName, &p.Password)
		if err != nil {
			fmt.Printf("scan error:%v\n", err)
			return
		}
		fmt.Println("queryRows person:", p)
	}
}

func delete() {
	sql := "delete from person where id = ?"
	ret, err := db.Exec(sql, "1")
	if err != nil {
		fmt.Printf("删除失败, err:%v\n", err)
		return
	}
	rows, err := ret.RowsAffected()
	if err != nil {
		fmt.Printf("删除行失败, err:%v\n", err)
		return
	}
	fmt.Printf("删除成功, 删除的行数： %d.\n", rows)
}

func update() {
	sql := "update person set username=?, password=? where id=?"
	ret, err := db.Exec(sql, "lisi", "456", "1")
	if err != nil {
		fmt.Printf("更新失败, err:%v\n", err)
		return
	}
	rows, err := ret.RowsAffected()
	if err != nil {
		fmt.Printf("更新行失败, err:%v\n", err)
		return
	}
	fmt.Printf("更新成功, 更新的行数： %d.\n", rows)
}

func main() {
	dsn := "root:123@tcp(127.0.0.1:3306)/test"
	var err error
	//open函数只是检查参数正确性，并不真正连接数据库，检查连接正确性需要ping
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	db.SetConnMaxLifetime(time.Second * 10)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(5)

	db.Exec("DROP TABLE IF EXISTS person")
	db.Exec("CREATE TABLE IF NOT EXISTS person(id INTEGER AUTO_INCREMENT,username varchar(20),password varchar(20),PRIMARY KEY(id))")
	defer db.Exec("DROP TABLE IF EXISTS person")

	Insert()
	QueryRow()
	QueryRows()
	update()
	QueryRow()
	delete()
}
