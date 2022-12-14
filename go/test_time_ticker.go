package main

import "time"

func main() {
	ticker := time.NewTicker(time.Second)
	//释放ticker的资源
	defer ticker.Stop()

	intChan := make(chan int)

	go func() {
		for {
			<-ticker.C
			select {
			//随机写入一个通道
			case intChan <- 1:
			case intChan <- 2:
			case intChan <- 3:
			}
		}
	}()

	var sum int
	//循环等待通道数据到达，当和大于10时，退出。
	for {
		n := <-intChan
		sum += n

		if sum >= 10 {
			break
		}
	}
}
