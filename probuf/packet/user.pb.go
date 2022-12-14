// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.4
// source: proto/user.proto

package pack

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type AddFriendRQ struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplyUUID   string `protobuf:"bytes,1,opt,name=ApplyUUID,proto3" json:"ApplyUUID,omitempty"`
	ConfirmUUID string `protobuf:"bytes,2,opt,name=ConfirmUUID,proto3" json:"ConfirmUUID,omitempty"`
}

func (x *AddFriendRQ) Reset() {
	*x = AddFriendRQ{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddFriendRQ) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddFriendRQ) ProtoMessage() {}

func (x *AddFriendRQ) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddFriendRQ.ProtoReflect.Descriptor instead.
func (*AddFriendRQ) Descriptor() ([]byte, []int) {
	return file_proto_user_proto_rawDescGZIP(), []int{0}
}

func (x *AddFriendRQ) GetApplyUUID() string {
	if x != nil {
		return x.ApplyUUID
	}
	return ""
}

func (x *AddFriendRQ) GetConfirmUUID() string {
	if x != nil {
		return x.ConfirmUUID
	}
	return ""
}

type AddFriendACK struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplyUUID   string `protobuf:"bytes,1,opt,name=ApplyUUID,proto3" json:"ApplyUUID,omitempty"`
	ConfirmUUID string `protobuf:"bytes,2,opt,name=ConfirmUUID,proto3" json:"ConfirmUUID,omitempty"`
	Accept      bool   `protobuf:"varint,5,opt,name=Accept,proto3" json:"Accept,omitempty"`
	Reason      string `protobuf:"bytes,6,opt,name=Reason,proto3" json:"Reason,omitempty"`
}

func (x *AddFriendACK) Reset() {
	*x = AddFriendACK{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddFriendACK) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddFriendACK) ProtoMessage() {}

func (x *AddFriendACK) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddFriendACK.ProtoReflect.Descriptor instead.
func (*AddFriendACK) Descriptor() ([]byte, []int) {
	return file_proto_user_proto_rawDescGZIP(), []int{1}
}

func (x *AddFriendACK) GetApplyUUID() string {
	if x != nil {
		return x.ApplyUUID
	}
	return ""
}

func (x *AddFriendACK) GetConfirmUUID() string {
	if x != nil {
		return x.ConfirmUUID
	}
	return ""
}

func (x *AddFriendACK) GetAccept() bool {
	if x != nil {
		return x.Accept
	}
	return false
}

func (x *AddFriendACK) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

type RemoveFriendRQ struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FromUUID string `protobuf:"bytes,1,opt,name=FromUUID,proto3" json:"FromUUID,omitempty"`
	ToUUID   string `protobuf:"bytes,2,opt,name=ToUUID,proto3" json:"ToUUID,omitempty"`
}

func (x *RemoveFriendRQ) Reset() {
	*x = RemoveFriendRQ{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RemoveFriendRQ) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RemoveFriendRQ) ProtoMessage() {}

func (x *RemoveFriendRQ) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RemoveFriendRQ.ProtoReflect.Descriptor instead.
func (*RemoveFriendRQ) Descriptor() ([]byte, []int) {
	return file_proto_user_proto_rawDescGZIP(), []int{2}
}

func (x *RemoveFriendRQ) GetFromUUID() string {
	if x != nil {
		return x.FromUUID
	}
	return ""
}

func (x *RemoveFriendRQ) GetToUUID() string {
	if x != nil {
		return x.ToUUID
	}
	return ""
}

type User struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UUID     string `protobuf:"bytes,1,opt,name=UUID,proto3" json:"UUID,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=Name,proto3" json:"Name,omitempty"`
	NickName string `protobuf:"bytes,3,opt,name=NickName,proto3" json:"NickName,omitempty"`
	Icon     string `protobuf:"bytes,5,opt,name=Icon,proto3" json:"Icon,omitempty"`
	Gender   uint32 `protobuf:"varint,6,opt,name=Gender,proto3" json:"Gender,omitempty"`
	Phone    string `protobuf:"bytes,7,opt,name=Phone,proto3" json:"Phone,omitempty"`
	Birth    string `protobuf:"bytes,8,opt,name=Birth,proto3" json:"Birth,omitempty"`
	Email    string `protobuf:"bytes,9,opt,name=Email,proto3" json:"Email,omitempty"`
}

func (x *User) Reset() {
	*x = User{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *User) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*User) ProtoMessage() {}

func (x *User) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use User.ProtoReflect.Descriptor instead.
func (*User) Descriptor() ([]byte, []int) {
	return file_proto_user_proto_rawDescGZIP(), []int{3}
}

func (x *User) GetUUID() string {
	if x != nil {
		return x.UUID
	}
	return ""
}

func (x *User) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *User) GetNickName() string {
	if x != nil {
		return x.NickName
	}
	return ""
}

func (x *User) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

func (x *User) GetGender() uint32 {
	if x != nil {
		return x.Gender
	}
	return 0
}

func (x *User) GetPhone() string {
	if x != nil {
		return x.Phone
	}
	return ""
}

func (x *User) GetBirth() string {
	if x != nil {
		return x.Birth
	}
	return ""
}

func (x *User) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

type FriendListRP struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Users []*User `protobuf:"bytes,1,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *FriendListRP) Reset() {
	*x = FriendListRP{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FriendListRP) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FriendListRP) ProtoMessage() {}

func (x *FriendListRP) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FriendListRP.ProtoReflect.Descriptor instead.
func (*FriendListRP) Descriptor() ([]byte, []int) {
	return file_proto_user_proto_rawDescGZIP(), []int{4}
}

func (x *FriendListRP) GetUsers() []*User {
	if x != nil {
		return x.Users
	}
	return nil
}

var File_proto_user_proto protoreflect.FileDescriptor

var file_proto_user_proto_rawDesc = []byte{
	0x0a, 0x10, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x06, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x4d, 0x0a, 0x0b, 0x41, 0x64,
	0x64, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x52, 0x51, 0x12, 0x1c, 0x0a, 0x09, 0x41, 0x70, 0x70,
	0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x41, 0x70,
	0x70, 0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x12, 0x20, 0x0a, 0x0b, 0x43, 0x6f, 0x6e, 0x66, 0x69,
	0x72, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x43, 0x6f,
	0x6e, 0x66, 0x69, 0x72, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x22, 0x7e, 0x0a, 0x0c, 0x41, 0x64, 0x64,
	0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x41, 0x43, 0x4b, 0x12, 0x1c, 0x0a, 0x09, 0x41, 0x70, 0x70,
	0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x41, 0x70,
	0x70, 0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x12, 0x20, 0x0a, 0x0b, 0x43, 0x6f, 0x6e, 0x66, 0x69,
	0x72, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x43, 0x6f,
	0x6e, 0x66, 0x69, 0x72, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x12, 0x16, 0x0a, 0x06, 0x41, 0x63, 0x63,
	0x65, 0x70, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x41, 0x63, 0x63, 0x65, 0x70,
	0x74, 0x12, 0x16, 0x0a, 0x06, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x22, 0x44, 0x0a, 0x0e, 0x52, 0x65, 0x6d,
	0x6f, 0x76, 0x65, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x52, 0x51, 0x12, 0x1a, 0x0a, 0x08, 0x46,
	0x72, 0x6f, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x46,
	0x72, 0x6f, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x12, 0x16, 0x0a, 0x06, 0x54, 0x6f, 0x55, 0x55, 0x49,
	0x44, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x54, 0x6f, 0x55, 0x55, 0x49, 0x44, 0x22,
	0xb8, 0x01, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x55, 0x55, 0x49, 0x44,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x55, 0x55, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04,
	0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x1a, 0x0a, 0x08, 0x4e, 0x69, 0x63, 0x6b, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x4e, 0x69, 0x63, 0x6b, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x49, 0x63, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x49, 0x63, 0x6f, 0x6e,
	0x12, 0x16, 0x0a, 0x06, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x06, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x50, 0x68, 0x6f, 0x6e,
	0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x50, 0x68, 0x6f, 0x6e, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x42, 0x69, 0x72, 0x74, 0x68, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x42,
	0x69, 0x72, 0x74, 0x68, 0x12, 0x14, 0x0a, 0x05, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x22, 0x32, 0x0a, 0x0c, 0x46, 0x72,
	0x69, 0x65, 0x6e, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x50, 0x12, 0x22, 0x0a, 0x05, 0x75, 0x73,
	0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x70, 0x61, 0x63, 0x6b,
	0x65, 0x74, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x42, 0x0f,
	0x5a, 0x0d, 0x2e, 0x2f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x3b, 0x70, 0x61, 0x63, 0x6b, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_user_proto_rawDescOnce sync.Once
	file_proto_user_proto_rawDescData = file_proto_user_proto_rawDesc
)

func file_proto_user_proto_rawDescGZIP() []byte {
	file_proto_user_proto_rawDescOnce.Do(func() {
		file_proto_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_user_proto_rawDescData)
	})
	return file_proto_user_proto_rawDescData
}

var file_proto_user_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_proto_user_proto_goTypes = []interface{}{
	(*AddFriendRQ)(nil),    // 0: packet.AddFriendRQ
	(*AddFriendACK)(nil),   // 1: packet.AddFriendACK
	(*RemoveFriendRQ)(nil), // 2: packet.RemoveFriendRQ
	(*User)(nil),           // 3: packet.User
	(*FriendListRP)(nil),   // 4: packet.FriendListRP
}
var file_proto_user_proto_depIdxs = []int32{
	3, // 0: packet.FriendListRP.users:type_name -> packet.User
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_proto_user_proto_init() }
func file_proto_user_proto_init() {
	if File_proto_user_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_user_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddFriendRQ); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddFriendACK); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RemoveFriendRQ); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*User); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FriendListRP); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_user_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_user_proto_goTypes,
		DependencyIndexes: file_proto_user_proto_depIdxs,
		MessageInfos:      file_proto_user_proto_msgTypes,
	}.Build()
	File_proto_user_proto = out.File
	file_proto_user_proto_rawDesc = nil
	file_proto_user_proto_goTypes = nil
	file_proto_user_proto_depIdxs = nil
}
