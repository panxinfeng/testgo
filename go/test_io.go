package main

import (
	"bufio"
	"bytes"
	"fmt"
	"io"
	"os"
	"strings"
)

func stringReader() {
	reader := strings.NewReader("111111111")
	buf := make([]byte, 12)
	n, err := reader.Read(buf)
	fmt.Println(n, err, string(buf))
}

func copy() {
	sr := strings.NewReader("111111111")
	n, err := io.Copy(os.Stdout, sr)
	fmt.Println()
	fmt.Println(n, err)
}

//按给定大小的缓冲区拷贝
func copyBuffer() {
	sr := strings.NewReader("111111111")
	buf := make([]byte, 32)
	n, err := io.CopyBuffer(os.Stdout, sr, buf)
	fmt.Println()
	fmt.Println(n, err)
}

//限定读取数量
func limitReader() {
	sr := strings.NewReader("111111111111")
	r := io.LimitReader(sr, 5)
	n, err := io.Copy(os.Stdout, r)
	fmt.Println()
	fmt.Println(n, err)
}

func buffReader() {
	br := bytes.NewReader([]byte("11111111111"))
	n, err := io.Copy(os.Stdout, br)
	fmt.Println()
	fmt.Println(n, err)
}

func main() {
	bufio.NewReader()
	buffReader()
}
