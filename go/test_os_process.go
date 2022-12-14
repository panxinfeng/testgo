package main

import (
	"fmt"
	"os"
)

func main() {
	//获取进程ID
	fmt.Println("pid:", os.Getpid())
	//获取父进程ID
	fmt.Println("ppid:", os.Getppid())

	attr := &os.ProcAttr{
		Files: []*os.File{os.Stdin, os.Stdout, os.Stderr},
		Env:   os.Environ(),
	}

	p1, err := os.StartProcess("/usr/bin/du", []string{"/usr/bin/du", "-sh", "/"}, attr)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(p1.Pid)

	p2, _ := os.FindProcess(p1.Pid)
	fmt.Println("find pid:", p2.Pid)

	p2.Signal(os.Kill)
	//回收子进程资源
	ps, _ := p1.Wait()
	fmt.Println(ps.String())
}
