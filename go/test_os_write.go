package main

import "os"

func write() {
	{
		//从文件开始位置写
		f, _ := os.OpenFile("file", os.O_WRONLY, 0755)
		f.Write([]byte("hello world"))
		f.Close()
	}
	{
		//从文件末尾追加写
		f, _ := os.OpenFile("file", os.O_WRONLY|os.O_APPEND, 0755)
		f.Write([]byte("hello world"))
		f.Close()
	}
}

func writeString() {
	f, _ := os.OpenFile("file", os.O_WRONLY, 0755)
	f.WriteString("hello world")
	f.Close()
}

func writeAt() {
	f, _ := os.OpenFile("file", os.O_WRONLY, 0755)
	f.WriteAt([]byte("123"), 3)
	f.Close()
}

func main() {

}
