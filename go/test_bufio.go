package main

import (
	"bufio"
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"time"
)

func bufioWrite() {
	start := time.Now()
	f, _ := os.Create("file")
	defer os.RemoveAll("file")
	defer f.Close()

	w := bufio.NewWriterSize(f, 1024*32)
	for i := 0; i < 110000; i++ {
		w.WriteString("1234567890")
	}
	w.Flush()

	fmt.Println(time.Now().Sub(start))
}

func bufioReadFrom() {
	b := bytes.NewBuffer(make([]byte, 0))
	s := strings.NewReader("Hello 世界！")
	bw := bufio.NewWriter(b)
	bw.ReadFrom(s)
	//bw.Flush()     //ReadFrom无需使用Flush，其自己已经写入．
	fmt.Println(b) // Hello 世界！
}

func bufioReadWriter() {
	b := bytes.NewBuffer(make([]byte, 0))
	bw := bufio.NewWriter(b)
	s := strings.NewReader("123")
	br := bufio.NewReader(s)
	rw := bufio.NewReadWriter(br, bw)
	p, _ := rw.ReadString('\n')
	fmt.Println(string(p)) //123
	rw.WriteString("asdf")
	rw.Flush()
	fmt.Println(b) //asdf
}

func bufioScan() {
	ioutil.WriteFile("file", []byte("123456789\n123456789\n123456789"), 0755)
	defer os.RemoveAll("file")

	f, _ := os.Open("file")
	r := bufio.NewScanner(f)
	r.Split(bufio.ScanLines)
	for r.Scan() {
		fmt.Println(r.Text())
	}
}

func main() {
	bufioScan()
}
