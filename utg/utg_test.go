package utg

import (
	"crypto/md5"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"testing"
)

var memenetKey = "bJCy9d6bYNouUEEtrsF33nTl5MqnmxTb"

func memenetSign(imageName string) string {
	data := []byte(imageName + memenetKey)
	a := sha256.Sum256(data)
	b := sha256.Sum256(a[:])
	c := md5.Sum(b[:])
	return hex.EncodeToString(c[:])
}

func TestUtgSign(t *testing.T) {
	sign := memenetSign("utgfs")
	fmt.Println(sign)
}
