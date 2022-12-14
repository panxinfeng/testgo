package main

import (
	"fmt"
	"regexp"
	"strings"
)

//匹配 []byte
func testMatch() {
	matched, err := regexp.Match("H*", []byte("Hello world"))
	fmt.Println(matched, err)
}

//匹配reader
func testMatchReader() {
	reader := strings.NewReader("Hello world")
	matched, err := regexp.MatchReader("H*", reader)
	fmt.Println(matched, err)
}

//匹配字符串
func testMatchString() {
	matched, err := regexp.MatchString("H*", "Hello world")
	fmt.Println(matched, err)
}

//得到转义后的正则表达式转
func testQuoteMeta() {
	fmt.Println(regexp.QuoteMeta("(?P:Hello) [a-z]"))
}

//编译后的正则表达式，多线程安全，最左最短方式匹配。当正则表达式不合法，返回error
func testCompile() {
	reg, err := regexp.Compile(`\w+`)
	fmt.Printf("%q,%v\n", reg.FindString("Hello World!"), err)
}

//编译后的正则表达式，多线程安全，最左最短方式匹配。当正则表达式不合法，返回error
func testCompileFind() {
	reg, err := regexp.Compile(`\w+`)
	fmt.Printf("%q,%v\n", reg.Find([]byte("Hello World!")), err)
}

// posix 采用最左最长匹配，不支持perl语法格式。\d、\D、\s、\S、\w、\W
func testCompilePosix() {
	reg, err := regexp.CompilePOSIX(`[[:word:]]+`)
	fmt.Printf("%q,%v\n", reg.FindString("Hello World!"), err)
}

//mustCompile 编译不通过将panic
func testMustCompile() {
	reg := regexp.MustCompile(`\w+`)
	fmt.Println(reg.FindString("Hello World!"))
}

//mustCompilePosix 编译不通过将panic
func testMustCompilePosix() {
	reg := regexp.MustCompilePOSIX(`[[:word:]].+ `)
	fmt.Printf("%q\n", reg.FindString("Hello World!"))
}

//只查找前 n 个匹配项，如果 n < 0，则查找所有匹配项
func testFindAll() {
	reg := regexp.MustCompile(`\w+`)
	fmt.Printf("%q\n", reg.FindAll([]byte("Hello World!"), -1))
}

//只查找前 n 个匹配项，如果 n < 0，则查找所有匹配项
func testFindAllString() {
	reg := regexp.MustCompile(`\w+`)
	fmt.Printf("%q\n", reg.FindAllString("Hello World!", -1))
}

//findindex 第一个匹配的索引，开始 结束
func testFindIndex() {
	reg := regexp.MustCompile(`\w+`)
	fmt.Println(reg.FindIndex([]byte("Hello World!")))
	//reg.FindStringIndex("Hello World!)

	//reader := strings.NewReader("Hello World!")
	//reg.FindReaderIndex(reader)

	//返回二维数组
	//reg.FindAllIndex()
}

//并返回所有匹配的内容， 同时返回子表达式匹配的内容
// {
//     {完整匹配项, 子匹配项, 子匹配项, ...},
//     {完整匹配项, 子匹配项, 子匹配项, ...},
//     ...
// }
func testFindAllStringSubmatch() {
	reg := regexp.MustCompile(`(\w)(\w)+`)
	fmt.Printf("%q\n", reg.FindAllStringSubmatch("Hello World!", -1))
	// [["Hello" "H" "o"] ["World" "W" "d"]]
}

// 在 b 中查找 re 中编译好的正则表达式，并返回第一个匹配的位置
// 同时返回子表达式匹配的位置
// {完整项起始, 完整项结束, 子项起始, 子项结束, 子项起始, 子项结束, ...}
func testSubmatchIndex() {
	reg := regexp.MustCompile(`(\w)(\w)+`)
	fmt.Println(reg.FindSubmatchIndex([]byte("Hello World!")))
	// [0 5 0 1 4 5]
	// fmt.Println(reg.FindStringSubmatchIndex("Hello World!"))
	// fmt.Println(reg.FindReaderSubmatchIndex(r))
}

func main() {
	testMatch()
	testMatchReader()
	testMatchString()
	testQuoteMeta()
	testCompile()
	testCompileFind()
	testCompilePosix()
	testMustCompile()
	testMustCompilePosix()
	testFindAll()
	testFindAllString()
	testFindIndex()
	testFindAllStringSubmatch()
	testSubmatchIndex()
}
