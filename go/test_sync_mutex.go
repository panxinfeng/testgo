package main

import (
	"fmt"
	"sync"
	"time"
)

var n = 100
var mutex sync.Mutex

func add() {
	//加锁实现对n的保护
	mutex.Lock()
	defer mutex.Unlock()
	n++
}

func sub() {
	//加锁实现对n的保护
	mutex.Lock()
	defer mutex.Unlock()
	n--
}

func main() {
	for i := 0; i < 100; i++ {
		go add()
		go sub()
	}
	time.Sleep(time.Second)
	fmt.Println(n)
}
