package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func readALL() {
	sr := strings.NewReader("xxxxxxxxxxxxxx")
	data, err := ioutil.ReadAll(sr)
	fmt.Println(string(data))
	fmt.Println(err)
}

func readDir() {
	fs, _ := ioutil.ReadDir("/tmp")
	for i := range fs {
		fmt.Println(fs[i].Name())
	}
}

func readFile() {
	data, err := ioutil.ReadFile("file")
	fmt.Println(string(data))
	fmt.Println(err)
}

func tmpDir() {
	name, err := ioutil.TempDir("/tmp", "hello")
	fmt.Println(name, err)
}

func tmpFile() {
	f, err := ioutil.TempFile("/tmp", "hello")
	fmt.Println(f.Name(), err)
}

func writeFile() {
	err := ioutil.WriteFile("/tmp/file", []byte("11111111"), os.ModePerm)
	fmt.Println(err)
}

func main() {
	writeFile()
}
