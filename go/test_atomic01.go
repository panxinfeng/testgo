package main

import (
	"fmt"
	"sync/atomic"
	"time"
)

var n int32 = 100

func add() {
	atomic.AddInt32(&n, 1)
}

func sub() {
	atomic.AddInt32(&n, -1)
}

func main() {
	for i := 0; i < 100; i++ {
		go add()
		go sub()
	}

	time.Sleep(time.Second)
	fmt.Println(n)
}
