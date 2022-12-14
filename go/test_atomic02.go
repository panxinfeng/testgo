package main

import (
	"fmt"
	"sync/atomic"
)

var n int32 = 100

func atomicRead() {
	atomic.LoadInt32(&n)
}

func atomicWrite() {
	atomic.StoreInt32(&n, 101)
}

func cas() {
	//如果旧值是100，则交换。交换成功则输出true
	ret := atomic.CompareAndSwapInt32(&n, 100, 101)
	fmt.Println(ret)
}

func swapOnly() {
	old := atomic.SwapInt32(&n, 101)
	fmt.Println("old is:", old)
}
