package main

import (
	"fmt"
	"reflect"
)

func main() {
	var x float64 = 3.4
	p := reflect.ValueOf(&x) // Note: take the address of x.
	v := p.Elem()            //必须调用Elem()函数
	fmt.Println("原始值：", x)
	v.SetFloat(7.1)
	fmt.Println(v.Interface())
	fmt.Println("修改后的值：", x)
}
