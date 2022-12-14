package main

import (
	"fmt"
	"time"
)

func test01() {
	now := time.Now()
	//年 月 日 时 分 秒
	fmt.Println("year:", now.Year())
	fmt.Println("month:", now.Month())
	fmt.Println("day:", now.Day())
	fmt.Println("hour:", now.Hour())
	fmt.Println("minute:", now.Minute())
	fmt.Println("second:", now.Second())
}

func test02() {
	fmt.Println("Unix timestamp:", time.Now().Unix())
	fmt.Println("UnixMilli timestamp:", time.Now().UnixMilli())
	fmt.Println("UnixMicro timestamp:", time.Now().UnixMicro())
	fmt.Println("UnixNano timestamp:", time.Now().UnixNano())
}

func stampToTime(s int64) {
	t := time.Unix(s, 0)
	fmt.Println(t.Format("2006-01-02 15:04:05"))
}

func testAdd(h, m, s, ms, mis, ns time.Duration) {
	old := time.Now()
	fmt.Println(old.String())
	new := old.Add(h + m + s + ms + mis + ns)
	fmt.Println(new.String())
}

func testTicker() {
	ticker := time.NewTicker(time.Second)
	for i := range ticker.C {
		fmt.Println("run:", i.String())
	}
}

func testParseTime() {
	now := time.Now()
	fmt.Println(now.String())
	loc, err := time.LoadLocation("Asia/Chongqing")
	if err != nil {
		fmt.Println(err)
		return
	}

	//ParseInLocation uses the given location.
	t, err := time.ParseInLocation("2006/01/02 15:04:05", "2019/08/04 14:15:20", loc)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(t.Format("2006/01/02 15:04:05"))
}

func main() {
	test01()
	test02()
	stampToTime(1234567890)
	testAdd(1, 2, 3, 4, 5, 6)
	testParseTime()
}
