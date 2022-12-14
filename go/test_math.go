package main

import (
	"fmt"
	"math"
	"math/rand"
	"strconv"
	"time"
)

func test01() {
	fmt.Printf("float32最大值:%.f\n", math.MaxFloat32)
	fmt.Printf("float32最小值:%.f\n", math.SmallestNonzeroFloat32)
	fmt.Printf("float64最大值:%.f\n", math.MaxFloat64)
	fmt.Printf("float64最小值:%.f\n", math.SmallestNonzeroFloat64)

	fmt.Println("int8最大值:", math.MaxInt8)
	fmt.Println("int8最小值:", math.MinInt8)
	fmt.Println("int最大值(与OS有关):", math.MaxInt)
	fmt.Println("int最小值(与OS有关):", math.MinInt)
	fmt.Println("uint32最大值:", math.MaxUint32)
	fmt.Println("int64最大值:", math.MaxInt64)
	fmt.Println("int64最小值:", math.MinInt64)
	fmt.Printf("uint64最大值: %s \n", strconv.FormatUint(math.MaxUint64, 10))

	fmt.Printf("圆周率:%.200f\n", math.Pi)
}

func test02() {
	fmt.Printf("[-3.14]的绝对值为:[%.2f]\n", math.Abs(-3.14))
	fmt.Printf("2的20次方:%f\n", math.Pow(2, 20))
	fmt.Printf("10的3次方:%f\n", math.Pow10(3))
	fmt.Printf("64的平方根:%f\n", math.Sqrt(64))
	fmt.Printf("27的立方根:%f\n", math.Cbrt(27))
	fmt.Printf("3.14向上取整:%f\n", math.Ceil(3.14))
	fmt.Printf("-3.14向下取整:%f\n", math.Floor(-3.14))
	fmt.Printf("[10/3]的余数为:%f\n", math.Mod(10, 3))
	INT, DECI := math.Modf(3.1415926)
	fmt.Printf("整数部分:%f,小数部分:%f\n", INT, DECI)
}

func testRand() {
	rand.Seed(int64(time.Now().Nanosecond()))
	for i := 0; i < 10; i++ {
		fmt.Println(rand.Int())
	}
	fmt.Println("---------------")
	for i := 0; i < 10; i++ {
		fmt.Println(rand.Intn(100))
	}
	fmt.Println("--------------")
	for i := 0; i < 10; i++ {
		fmt.Println(rand.Float64())
	}
}

func main() {
	testRand()
}
