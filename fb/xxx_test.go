package fb

import "testing"

func ff(a int) int {
	if a < 0 {
		return -1
	} else if a == 0 {
		return 0
	} else {
		return 1
	}
}

func TestA(t *testing.T) {
	ff(-1)
}
