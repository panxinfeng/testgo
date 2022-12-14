package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	_ "test/cmd/docs"

	"github.com/gorilla/mux"
	hs "github.com/swaggo/http-swagger"
)

type Resp struct {
	Result bool
	Data   []byte
}

type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

// index index接口
// @Summary index 接口，测试
// @Description  获取用户信息
// @Tags 测试相关接口
// @Accept json
// @Produce json
// @Param Authorization header string true "Bearer 用户令牌"
// @Param id query int true "主键ID"
// @Security ApiKeyAuth
// @Success 200 {object} User
// @Router /index [get]
func index(w http.ResponseWriter, r *http.Request) {
	user := User{Name: "张三", Age: 20}
	data, _ := json.Marshal(&user)

	w.Header().Add("Content-Type", "application/json")
	w.Write(data)
}

// @title 测试swagger
// @version 1.0
// @description 测试swagger
// @host 192.168.4.41:8080
// @BasePath /
func main() {
	router := mux.NewRouter()
	router.PathPrefix("/swagger").Handler(hs.WrapHandler)
	router.HandleFunc("/index", index)

	err := http.ListenAndServe(":1234", router)
	fmt.Println(err)
}
