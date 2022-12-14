package main

import (
	"fmt"
	"log"
	"reflect"
)

type Eater interface {
	Eat()
}

type PeopleEat struct {
}

func (p PeopleEat) Eat() {
	fmt.Println(11111)
}

type Person struct {
	Name string `json:"name" validate:"required"`
	Eat  PeopleEat
}

func (p *Person) Show() {
	fmt.Println(p.Name)
}

type Shower interface {
	Show()
}

func test01() {
	var n int = 2
	t := reflect.TypeOf(&n)
	v := reflect.ValueOf(&n)

	//原数据的类型
	fmt.Println(t.Kind() == reflect.Int)
	log.Println("can set:", v.CanSet())

	p := v.Elem()
	log.Println("can set:", p.CanSet())

	i := p.Interface()
	fmt.Println(reflect.TypeOf(i))

	//能被赋值
	if p.CanSet() {
		p.SetInt(100)
		fmt.Println(n)
	} else {
		log.Println("cann't set")
	}
}

func test02() {
	var p = Person{Name: "zhangsan"}
	fv := reflect.ValueOf(&p).Elem()
	ft := fv.Type()

	for i := 0; i < fv.NumField(); i++ {
		f := fv.Field(i)
		//
		fmt.Printf("%d %s %s = %v\n", i, ft.Field(i).Name, f.Type(), f.Interface())
		//查看tagn内容
		fmt.Printf("%d %s %s\n", i, ft.Field(i).Tag.Get("json"), ft.Field(i).Tag.Get("validate"))

		//拿到相应字段的interface{},找到其方法。
		vv := fv.Field(i).Interface()
		if eater, ok := vv.(Eater); ok {
			eater.Eat()
		}
	}
}

func test03() {
	var funcMap = make(map[string]interface{})
	funcMap["say"] = func(text string) { fmt.Println(text) }
	Call(funcMap, "say", "hello")
}

func Call(m map[string]interface{}, name string, params ...interface{}) (result []reflect.Value) {
	//拿到其函数。但不能直接调用，需要转换成 reflect.Value。
	f := reflect.ValueOf(m[name])
	in := make([]reflect.Value, len(params))
	for k, param := range params {
		in[k] = reflect.ValueOf(param)
	}
	result = f.Call(in)
	return
}

func main() {
	test02()
}
