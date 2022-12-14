package main

import "fmt"

//append 增加切片长度

//len 对数组、切片、map、channer求长度

//cap 用于数组、切片、channel

//print、println打印到控制台

//panic 抛出异常

//recover 接收异常，需要在defer 中执行

//make与new区别

//make只能用于slice map channel数据类型、new 可以作用于所有类型
//new 返回的是指针、make反对的是值，也为引用
//new 分配的空间会被清零、make会初始化

func main() {
	p1 := new([]int)
	fmt.Println(*p1 == nil) // true

	p2 := new(map[string]interface{})
	fmt.Println(*p2 == nil) // true

	p3 := new(chan struct{})
	fmt.Println(*p3 == nil) // true

	arr := [3]int{1, 2, 3}
	fmt.Println(cap(arr))
}
