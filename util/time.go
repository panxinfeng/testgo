package util

import (
	"fmt"
	"os"
	"syscall"
	"time"
)

func xx() {
	info, _ := os.Stat("dir")
	stat := info.Sys().(*syscall.Stat_t)
	aTim := time.Unix(stat.Atim.Sec, stat.Atim.Nsec)
	mTim := time.Unix(stat.Mtim.Sec, stat.Mtim.Nsec)
	cTim := time.Unix(stat.Ctim.Sec, stat.Ctim.Nsec)
	fmt.Println("access:", aTim.String())
	fmt.Println("modify:", mTim.String())
	fmt.Println("create:", cTim.String())
}
