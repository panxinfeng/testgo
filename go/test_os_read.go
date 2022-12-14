package main

import (
	"fmt"
	"io"
	"os"
)

func openFile() {
	//只读模式
	f1, _ := os.Open("file")
	fmt.Println(f1.Name())

	//读写模式打开
	f2, _ := os.OpenFile("file", os.O_WRONLY|os.O_CREATE, 0666)
	fmt.Println(f2.Name())
}

func createFile() {
	//等价于 os.OpenFile("file.txt",os.O_WRONLY|os.O_CREATE|os.O_TRUNC,0666)
	f, _ := os.Create("file.txt")
	fmt.Println(f.Name())

	//在临时目录中创建文件
	f2, _ := os.CreateTemp("", "temp")
	fmt.Println(f2.Name())
}

func readOper() {
	f, _ := os.Open("file")
	defer f.Close()

	//for read
	{
		for {
			var buf = make([]byte, 5)
			n, err := f.Read(buf)
			fmt.Println(string(buf[:n]), n)
			if err == io.EOF {
				break
			}
		}
	}

	//read at
	{
		var buf = make([]byte, 5)
		n, err := f.ReadAt(buf, 5)
		fmt.Println(n, err)
	}

	//seek read
	{
		var buf = make([]byte, 5)
		f.Seek(3, os.SEEK_SET)
		n, err := f.Read(buf)
		fmt.Println(n, err)
	}

}

func openDir() {
	f, _ := os.Open("dir")
	de, _ := f.ReadDir(-1)
	for i := range de {
		fmt.Println(de[i].Name(), de[i].IsDir())
	}
}

func main() {
	createFile()
}
