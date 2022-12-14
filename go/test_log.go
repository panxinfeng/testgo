package main

import (
	"log"
	"os"
)

func main() {
	logFile, _ := os.Create("log.file")
	defer os.RemoveAll("log.file")

	logger := log.New(logFile, "", log.Ldate|log.Ltime|log.Lshortfile)

	logger.Println("debug:", "xxxxx")
	logger.Println("debug:", "yyyyy")
}
