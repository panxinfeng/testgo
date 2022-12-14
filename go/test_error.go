package main

import (
	"fmt"
	"time"
)

type MyError struct {
	When time.Time
	What string
}

func (me MyError) Error() string {
	return fmt.Sprintf("%s: %s", me.When.Format(time.RFC822), me.What)
}

func op() error {
	return MyError{When: time.Now(), What: "nothing"}
}

func main() {
	fmt.Println(op())

}
