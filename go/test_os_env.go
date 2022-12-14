package main

import (
	"fmt"
	"os"
)

func main() {
	s := os.Environ()
	fmt.Println(s)

	fmt.Println("GOPATH:", os.Getenv("GOPATH"))

	os.Setenv("XXX", "xxx")
	fmt.Println("XXX:", os.Getenv("XXX"))

	//查找环境变量
	fmt.Println(os.LookupEnv("XXX"))

	//环境变量组装
	fmt.Println(os.ExpandEnv("$XXX = $PATH"))

	//删除环境变量
	os.Unsetenv("XXX")
	fmt.Println(os.LookupEnv("XXX"))

	//清除所有环境变量
	os.Clearenv()
}
