package main

import (
	"encoding/xml"
	"fmt"
)

type Person struct {
	XMLName xml.Name `xml:"person"`
	Name    string   `xml:"name"`
	Age     int      `xml:"age"`
	Email   string   `xml:"email"`
}

func main() {
	var p = Person{
		Name:  "xxxx",
		Age:   11,
		Email: "10@xx.com",
	}

	d, _ := xml.MarshalIndent(p, " ", " ")
	fmt.Println(string(d))
}
