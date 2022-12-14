package router

import (
	"strings"
)

type HanderFunc func()

type router struct {
	roots    map[string]*node
	handlers map[string]HanderFunc
}

//eg: roots["GET"] roots["POST]
//eg: handlers["GET-/index"] handlers["POST-/index"]

func newRouter() *router {
	return &router{
		roots:    make(map[string]*node),
		handlers: make(map[string]HanderFunc),
	}
}

func parsePattern(pattern string) []string {
	parts := make([]string, 0)
	vs := strings.Split(pattern, "/")

	for _, item := range vs {
		if item != "" {
			parts = append(parts, item)
			if item[0] == '*' {
				break
			}
		}
	}

	return parts
}

func (r *router) addRoute(method string, pattern string, handlerFunc HanderFunc) {
	parts := parsePattern(pattern)
	key := method + "-" + pattern

	_, ok := r.roots[method]
	if !ok {
		r.roots[method] = &node{}
	}
	r.roots[method].insert(pattern, parts, 0)
	r.handlers[key] = handlerFunc
}

func (r *router) getRoute(method string, path string) (*node, map[string]string) {
	root, ok := r.roots[method]
	if !ok {
		return nil, nil
	}

	searchParts := parsePattern(path)
	params := make(map[string]string)

	n := root.search(searchParts, 0)

	if n != nil {
		parts := parsePattern(n.pattern)
		for index, part := range parts {
			if part[0] == ':' && len(part) > 1 {
				params[part[1:]] = searchParts[index]
			}
			if part[0] == '*' && len(part) > 1 {
				params[part[1:]] = strings.Join(searchParts[index:], "/")
				break
			}
		}
		return n, params
	}

	return nil, nil
}

func (r *router) handle(method string, path string) HanderFunc {
	n, _ := r.getRoute(method, path)
	if n != nil {
		keys := method + "-" + path
		return r.handlers[keys]
	}
	return nil
}
