module test

go 1.15

require (
	github.com/BurntSushi/toml v1.1.0
	github.com/corona10/goimagehash v1.1.0
	github.com/gin-contrib/sessions v0.0.5
	github.com/gin-gonic/gin v1.8.1
	github.com/go-openapi/spec v0.20.6 // indirect
	github.com/go-openapi/swag v0.21.1 // indirect
	github.com/go-redis/redis/v7 v7.4.1
	github.com/go-sql-driver/mysql v1.6.0
	github.com/google/go-cmp v0.5.6 // indirect
	github.com/gorilla/mux v1.8.0
	github.com/gorilla/securecookie v1.1.1
	github.com/gorilla/sessions v1.2.1
	github.com/gorilla/websocket v1.4.2
	github.com/mailru/easyjson v0.7.7 // indirect
	github.com/mattn/go-sqlite3 v2.0.3+incompatible
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/onsi/gomega v1.18.1 // indirect
	github.com/pion/webrtc/v3 v3.1.41
	github.com/pmylund/go-cache v2.1.0+incompatible
	github.com/swaggo/http-swagger v1.3.0
	github.com/swaggo/swag v1.8.2
	go.mongodb.org/mongo-driver v1.10.1
	golang.org/x/net v0.0.0-20220607020251-c690dde0001d // indirect
	golang.org/x/sys v0.0.0-20220610221304-9f5ed59c137d // indirect
	golang.org/x/text v0.3.7
	golang.org/x/time v0.1.0
	golang.org/x/tools v0.1.11 // indirect
	google.golang.org/genproto v0.0.0-20211208223120-3a66f561d7aa // indirect
	google.golang.org/grpc v1.45.0
	google.golang.org/protobuf v1.28.0
	gorm.io/driver/mysql v1.4.1
	gorm.io/driver/sqlite v1.3.6
	gorm.io/gorm v1.23.8
)

replace github.com/docker/docker v20.10.7+incompatible => github.com/docker/docker v17.12.0-ce-rc1.0.20190923224325-53b9d440b8ce+incompatible

replace gorm.io/gorm v1.23.4 => gorm.io/gorm v1.23.2

replace gorm.io/driver/sqlite v1.3.6 => gorm.io/driver/sqlite v1.3.1

replace github.com/mattn/go-sqlite3 v2.0.3+incompatible => github.com/mattn/go-sqlite3 v1.14.1
