package main

import (
	"fmt"
	"sync"
)

var n = 100
var mutex sync.Mutex
var wg sync.WaitGroup

func add() {
	//加锁实现对n的保护
	mutex.Lock()
	defer mutex.Unlock()
	n++
	wg.Done()
}

func sub() {
	mutex.Lock()
	defer mutex.Unlock()
	n--
	wg.Done()
}

func main() {
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go add()
		wg.Add(1)
		go sub()
	}
	//等待所有协程退出。即:协程任务编排技术。
	wg.Wait()
	fmt.Println(n)
}
