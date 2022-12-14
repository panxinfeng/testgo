package main

import (
	"fmt"
	"time"
)

func onetimer() {
	//开启定时器，到时间就触发通道 timer.C
	timer := time.NewTimer(time.Second)

	<-timer.C
	fmt.Println("1秒钟到了")
}

func stopTimer() {
	timer := time.NewTimer(time.Second)

	go func() {
		<-timer.C
		fmt.Println("在协程中等到了定时器")
	}()

	//停止定时器，协程将永远等不到触发，即永远阻塞
	timer.Stop()
}

func resetTimer() {
	timer := time.NewTimer(time.Second * 5)
	fmt.Println(time.Now().String())

	go func() {
		<-timer.C
		fmt.Println("在协程中等到了定时器")
		fmt.Println(time.Now().String())
	}()

	//先睡一秒，然后重置timer为一秒，则协程会立刻等到定时器
	time.Sleep(time.Second)
	timer.Reset(time.Second)
}

func main() {

}
