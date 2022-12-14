#!/usr/bin/env bash

all_proto=(
            proto/*.proto
)


for ((i = 0; i < ${#all_proto[*]}; i++)); do
  proto=${all_proto[$i]}
  protoc --go_out=plugins=grpc:. $proto
  s=`echo $proto | sed 's/ //g'`
  v=${s//proto/pb.go}
  protoc-go-inject-tag -input=./$v
  echo "protoc --go_out=plugins=grpc:." $proto
done
echo "proto file generate success..."
