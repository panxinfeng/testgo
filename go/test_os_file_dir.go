package main

import (
	"fmt"
	"os"
)

//创建文件
func createFile() {
	file, err := os.Create("file.txt")
	if err != nil {
		fmt.Printf("err:%v\n", err)
	} else {
		file.Close()
	}
}

//创建目录
func createDir() {
	err := os.MkdirAll("/tmp/a/b/c", os.ModePerm)
	if err != nil {
		fmt.Printf("err:%v\n", err)
	}
}

//删除目录
func removeDir() {
	err := os.RemoveAll("/tmp/a/b/c")
	if err != nil {
		fmt.Printf("err:%v\n", err)
	}
}

//获取工作目录
func getWD() {
	dir, err := os.Getwd()
	if err != nil {
		fmt.Printf("err:%v\n", err)
	} else {
		fmt.Printf("dir:%v\n", dir)
	}
}

//修改工作目录
func chWd() {
	err := os.Chdir("/tmp/dir")
	if err != nil {
		fmt.Printf("err:%v\n", err)
	} else {
		fmt.Println(os.Getwd())
	}
}

//获取操作系统的临时目录，linux为/tmp
func getTmp() {
	tmpDir := os.TempDir()
	fmt.Printf("tmp:%v\n", tmpDir)
}

//重命名文件
func renameFile() {
	err := os.Rename("test1.txt", "test2.txt")
	if err != nil {
		fmt.Printf("err:%v\n", err)
	}
}

//读全部文件
func readFile() {
	data, err := os.ReadFile("file")
	if err != nil {
		fmt.Printf("err:%v\n", err)
	} else {
		fmt.Println(string(data))
	}
}

//写入新文件
func writeFile() {
	err := os.WriteFile("file", []byte("123456"), os.ModePerm)
	if err != nil {
		fmt.Printf("err:%v\n", err)
	}
}

func main() {
	getTmp()
}
