package router

import (
	"fmt"
	"reflect"
	"testing"
)

func newTestRouter() *router {
	r := newRouter()
	r.addRoute("GET", "/", nil)
	r.addRoute("GET", "/hello/:name", nil)
	r.addRoute("GET", "/hello/b/c", nil)
	r.addRoute("GET", "/hi/:name", nil)
	r.addRoute("GET", "/assets/*filepath", nil)
	return r
}

func TestParsePattern(t *testing.T) {
	ok := reflect.DeepEqual(parsePattern("/p/:name"), []string{"p", ":name"})
	ok = ok && reflect.DeepEqual(parsePattern("/p/*"), []string{"p", "*"})
	ok = ok && reflect.DeepEqual(parsePattern("/p/*name/*"), []string{"p", "*name"})
	if !ok {
		t.Fatal("test parsePattern failed")
	}
}

func TestGetRoute1(t *testing.T) {
	r := newTestRouter()
	n, ps := r.getRoute("GET", "/hello/girl")

	if n == nil {
		t.Fatal("nil shouldn't be returned")
	}

	if n.pattern != "/hello/:name" {
		t.Fatal("should match /hello/:name")
	}

	if ps["name"] != "girl" {
		t.Fatal("name should be equal to 'girl'")
	}

	fmt.Printf("matched path: %s, params['name']: %s\n", n.pattern, ps["name"])
}

func TestGetRoute2(t *testing.T) {
	r := newTestRouter()
	n, ps := r.getRoute("GET", "/assets/a/b/c")

	if n == nil {
		t.Fatal("nil shouldn't be returned")
	}

	if n.pattern != "/assets/*filepath" {
		t.Fatal("should match /assets/*filepath")
	}

	if ps["filepath"] != "a/b/c" {
		t.Fatal("name should be equal to 'a/b/c'")
	}

	fmt.Printf("matched path: %s, params['name']: %s\n", n.pattern, ps["filepath"])
}

func TestGetHandle(t *testing.T) {
	r := newRouter()
	r.addRoute("GET", "/", func() { fmt.Println(111) })
	r.addRoute("GET", "/hello/:name", nil)

	h := r.handle("GET", "/")
	fmt.Println(h)
}
