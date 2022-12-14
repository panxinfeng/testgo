package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

// 解析嵌套类型
func test3() {
	b := []byte(`{"Name":"tom","Age":20,"Email":"tom@gmail.com", "Parents":["tom", "kite"]}`)
	var f interface{}
	json.Unmarshal(b, &f)
	fmt.Printf("f: %v\n", f)
}

func test4() {
	type Person struct {
		Name   string
		Age    int
		Email  string
		Parent []string
	}

	p := Person{
		Name:   "tom",
		Age:    20,
		Email:  "tom@gmail.com",
		Parent: []string{"big tom", "big kite"},
	}

	b, _ := json.Marshal(p)
	fmt.Printf("b: %v\n", string(b))
}

func test5() {
	r := strings.NewReader(`{"Name":"tom","Age":20,"Email":"tom@gmail.com","Parent":["big tom","big kite"]}`)
	de := json.NewDecoder(r)
	var v map[string]interface{}
	de.Decode(&v)

	fmt.Println(v)
}

func test6() {
	type Person struct {
		Name   string
		Age    int
		Email  string
		Parent []string
	}

	p := Person{
		Name:   "tom",
		Age:    20,
		Email:  "tom@gmail.com",
		Parent: []string{"big tom", "big kite"},
	}

	//直接写入文件
	f, _ := os.Create("file")
	defer os.RemoveAll("file")
	en := json.NewEncoder(f)
	en.Encode(p)
}

func main() {
	test3()
	test4()
	test5()
	test6()
}
