// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.4
// source: proto/group.proto

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

type AddGroupRQ struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplyUUID string `protobuf:"bytes,1,opt,name=ApplyUUID,proto3" json:"ApplyUUID,omitempty"`
	GroupUUID string `protobuf:"bytes,2,opt,name=GroupUUID,proto3" json:"GroupUUID,omitempty"`
	OwnerUUID string `protobuf:"bytes,3,opt,name=OwnerUUID,proto3" json:"OwnerUUID,omitempty"`
}

func (x *AddGroupRQ) Reset() {
	*x = AddGroupRQ{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddGroupRQ) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddGroupRQ) ProtoMessage() {}

func (x *AddGroupRQ) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddGroupRQ.ProtoReflect.Descriptor instead.
func (*AddGroupRQ) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{0}
}

func (x *AddGroupRQ) GetApplyUUID() string {
	if x != nil {
		return x.ApplyUUID
	}
	return ""
}

func (x *AddGroupRQ) GetGroupUUID() string {
	if x != nil {
		return x.GroupUUID
	}
	return ""
}

func (x *AddGroupRQ) GetOwnerUUID() string {
	if x != nil {
		return x.OwnerUUID
	}
	return ""
}

type AddGroupACK struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplyUUID   string `protobuf:"bytes,1,opt,name=ApplyUUID,proto3" json:"ApplyUUID,omitempty"`
	ConfirmUUID string `protobuf:"bytes,2,opt,name=ConfirmUUID,proto3" json:"ConfirmUUID,omitempty"`
	Accept      bool   `protobuf:"varint,5,opt,name=Accept,proto3" json:"Accept,omitempty"`
	Reason      string `protobuf:"bytes,6,opt,name=Reason,proto3" json:"Reason,omitempty"`
}

func (x *AddGroupACK) Reset() {
	*x = AddGroupACK{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddGroupACK) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddGroupACK) ProtoMessage() {}

func (x *AddGroupACK) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddGroupACK.ProtoReflect.Descriptor instead.
func (*AddGroupACK) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{1}
}

func (x *AddGroupACK) GetApplyUUID() string {
	if x != nil {
		return x.ApplyUUID
	}
	return ""
}

func (x *AddGroupACK) GetConfirmUUID() string {
	if x != nil {
		return x.ConfirmUUID
	}
	return ""
}

func (x *AddGroupACK) GetAccept() bool {
	if x != nil {
		return x.Accept
	}
	return false
}

func (x *AddGroupACK) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

type LeaveGroupRQ struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MemberUUID string `protobuf:"bytes,1,opt,name=MemberUUID,proto3" json:"MemberUUID,omitempty"`
	GroupUUID  string `protobuf:"bytes,2,opt,name=GroupUUID,proto3" json:"GroupUUID,omitempty"`
}

func (x *LeaveGroupRQ) Reset() {
	*x = LeaveGroupRQ{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LeaveGroupRQ) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LeaveGroupRQ) ProtoMessage() {}

func (x *LeaveGroupRQ) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LeaveGroupRQ.ProtoReflect.Descriptor instead.
func (*LeaveGroupRQ) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{2}
}

func (x *LeaveGroupRQ) GetMemberUUID() string {
	if x != nil {
		return x.MemberUUID
	}
	return ""
}

func (x *LeaveGroupRQ) GetGroupUUID() string {
	if x != nil {
		return x.GroupUUID
	}
	return ""
}

type GroupInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UUID        string `protobuf:"bytes,1,opt,name=UUID,proto3" json:"UUID,omitempty"`
	Name        string `protobuf:"bytes,2,opt,name=Name,proto3" json:"Name,omitempty"`
	CreateUUID  string `protobuf:"bytes,3,opt,name=CreateUUID,proto3" json:"CreateUUID,omitempty"`
	Description string `protobuf:"bytes,4,opt,name=Description,proto3" json:"Description,omitempty"`
	PrivateKey  string `protobuf:"bytes,5,opt,name=PrivateKey,proto3" json:"PrivateKey,omitempty"`
	PublicKey   string `protobuf:"bytes,6,opt,name=PublicKey,proto3" json:"PublicKey,omitempty"`
	Icon        string `protobuf:"bytes,7,opt,name=Icon,proto3" json:"Icon,omitempty"`
	CreateAt    int64  `protobuf:"varint,8,opt,name=CreateAt,proto3" json:"CreateAt,omitempty"`
}

func (x *GroupInfo) Reset() {
	*x = GroupInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupInfo) ProtoMessage() {}

func (x *GroupInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupInfo.ProtoReflect.Descriptor instead.
func (*GroupInfo) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{3}
}

func (x *GroupInfo) GetUUID() string {
	if x != nil {
		return x.UUID
	}
	return ""
}

func (x *GroupInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GroupInfo) GetCreateUUID() string {
	if x != nil {
		return x.CreateUUID
	}
	return ""
}

func (x *GroupInfo) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *GroupInfo) GetPrivateKey() string {
	if x != nil {
		return x.PrivateKey
	}
	return ""
}

func (x *GroupInfo) GetPublicKey() string {
	if x != nil {
		return x.PublicKey
	}
	return ""
}

func (x *GroupInfo) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

func (x *GroupInfo) GetCreateAt() int64 {
	if x != nil {
		return x.CreateAt
	}
	return 0
}

type GroupListRP struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupList []*GroupInfo `protobuf:"bytes,1,rep,name=GroupList,proto3" json:"GroupList,omitempty"`
}

func (x *GroupListRP) Reset() {
	*x = GroupListRP{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupListRP) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupListRP) ProtoMessage() {}

func (x *GroupListRP) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupListRP.ProtoReflect.Descriptor instead.
func (*GroupListRP) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{4}
}

func (x *GroupListRP) GetGroupList() []*GroupInfo {
	if x != nil {
		return x.GroupList
	}
	return nil
}

type GetGroupMemberRQ struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupUUID string `protobuf:"bytes,1,opt,name=GroupUUID,proto3" json:"GroupUUID,omitempty"`
}

func (x *GetGroupMemberRQ) Reset() {
	*x = GetGroupMemberRQ{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetGroupMemberRQ) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetGroupMemberRQ) ProtoMessage() {}

func (x *GetGroupMemberRQ) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetGroupMemberRQ.ProtoReflect.Descriptor instead.
func (*GetGroupMemberRQ) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{5}
}

func (x *GetGroupMemberRQ) GetGroupUUID() string {
	if x != nil {
		return x.GroupUUID
	}
	return ""
}

type GroupMember struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupUUID string `protobuf:"bytes,2,opt,name=GroupUUID,proto3" json:"GroupUUID,omitempty"`
	UUID      string `protobuf:"bytes,3,opt,name=UUID,proto3" json:"UUID,omitempty"`
	Icon      string `protobuf:"bytes,4,opt,name=Icon,proto3" json:"Icon,omitempty"`
	Name      string `protobuf:"bytes,5,opt,name=Name,proto3" json:"Name,omitempty"`
	Role      uint32 `protobuf:"varint,7,opt,name=Role,proto3" json:"Role,omitempty"` //0群组创建者，1群组管理者，2普通成员
	Remark    string `protobuf:"bytes,8,opt,name=Remark,proto3" json:"Remark,omitempty"`
}

func (x *GroupMember) Reset() {
	*x = GroupMember{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupMember) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupMember) ProtoMessage() {}

func (x *GroupMember) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupMember.ProtoReflect.Descriptor instead.
func (*GroupMember) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{6}
}

func (x *GroupMember) GetGroupUUID() string {
	if x != nil {
		return x.GroupUUID
	}
	return ""
}

func (x *GroupMember) GetUUID() string {
	if x != nil {
		return x.UUID
	}
	return ""
}

func (x *GroupMember) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

func (x *GroupMember) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GroupMember) GetRole() uint32 {
	if x != nil {
		return x.Role
	}
	return 0
}

func (x *GroupMember) GetRemark() string {
	if x != nil {
		return x.Remark
	}
	return ""
}

type GetGroupMemberRP struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupMembers []*GroupMember `protobuf:"bytes,1,rep,name=GroupMembers,proto3" json:"GroupMembers,omitempty"`
}

func (x *GetGroupMemberRP) Reset() {
	*x = GetGroupMemberRP{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetGroupMemberRP) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetGroupMemberRP) ProtoMessage() {}

func (x *GetGroupMemberRP) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetGroupMemberRP.ProtoReflect.Descriptor instead.
func (*GetGroupMemberRP) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{7}
}

func (x *GetGroupMemberRP) GetGroupMembers() []*GroupMember {
	if x != nil {
		return x.GroupMembers
	}
	return nil
}

type CreateGroup struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string `protobuf:"bytes,1,opt,name=Name,proto3" json:"Name,omitempty"`
	Description string `protobuf:"bytes,2,opt,name=Description,proto3" json:"Description,omitempty"`
}

func (x *CreateGroup) Reset() {
	*x = CreateGroup{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_group_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateGroup) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateGroup) ProtoMessage() {}

func (x *CreateGroup) ProtoReflect() protoreflect.Message {
	mi := &file_proto_group_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateGroup.ProtoReflect.Descriptor instead.
func (*CreateGroup) Descriptor() ([]byte, []int) {
	return file_proto_group_proto_rawDescGZIP(), []int{8}
}

func (x *CreateGroup) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateGroup) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

var File_proto_group_proto protoreflect.FileDescriptor

var file_proto_group_proto_rawDesc = []byte{
	0x0a, 0x11, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x06, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x66, 0x0a, 0x0a, 0x41,
	0x64, 0x64, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x52, 0x51, 0x12, 0x1c, 0x0a, 0x09, 0x41, 0x70, 0x70,
	0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x41, 0x70,
	0x70, 0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x12, 0x1c, 0x0a, 0x09, 0x47, 0x72, 0x6f, 0x75, 0x70,
	0x55, 0x55, 0x49, 0x44, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x47, 0x72, 0x6f, 0x75,
	0x70, 0x55, 0x55, 0x49, 0x44, 0x12, 0x1c, 0x0a, 0x09, 0x4f, 0x77, 0x6e, 0x65, 0x72, 0x55, 0x55,
	0x49, 0x44, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x4f, 0x77, 0x6e, 0x65, 0x72, 0x55,
	0x55, 0x49, 0x44, 0x22, 0x7d, 0x0a, 0x0b, 0x41, 0x64, 0x64, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x41,
	0x43, 0x4b, 0x12, 0x1c, 0x0a, 0x09, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x55, 0x55, 0x49, 0x44, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x55, 0x55, 0x49, 0x44,
	0x12, 0x20, 0x0a, 0x0b, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x55, 0x55, 0x49, 0x44, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x55, 0x55,
	0x49, 0x44, 0x12, 0x16, 0x0a, 0x06, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x06, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x52, 0x65,
	0x61, 0x73, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x52, 0x65, 0x61, 0x73,
	0x6f, 0x6e, 0x22, 0x4c, 0x0a, 0x0c, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x47, 0x72, 0x6f, 0x75, 0x70,
	0x52, 0x51, 0x12, 0x1e, 0x0a, 0x0a, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x55, 0x55, 0x49, 0x44,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x55, 0x55,
	0x49, 0x44, 0x12, 0x1c, 0x0a, 0x09, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x55, 0x55, 0x49, 0x44, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x55, 0x55, 0x49, 0x44,
	0x22, 0xe3, 0x01, 0x0a, 0x09, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x12,
	0x0a, 0x04, 0x55, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x55, 0x55,
	0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x55, 0x55, 0x49, 0x44, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x55, 0x55, 0x49, 0x44, 0x12, 0x20, 0x0a, 0x0b, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x44, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1e, 0x0a, 0x0a, 0x50, 0x72, 0x69, 0x76,
	0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x50, 0x72,
	0x69, 0x76, 0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x12, 0x1c, 0x0a, 0x09, 0x50, 0x75, 0x62, 0x6c,
	0x69, 0x63, 0x4b, 0x65, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x50, 0x75, 0x62,
	0x6c, 0x69, 0x63, 0x4b, 0x65, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x49, 0x63, 0x6f, 0x6e, 0x18, 0x07,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x49, 0x63, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x41, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x41, 0x74, 0x22, 0x3e, 0x0a, 0x0b, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x50, 0x12, 0x2f, 0x0a, 0x09, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4c, 0x69,
	0x73, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x70, 0x61, 0x63, 0x6b, 0x65,
	0x74, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x09, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x30, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x51, 0x12, 0x1c, 0x0a, 0x09, 0x47, 0x72,
	0x6f, 0x75, 0x70, 0x55, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x47,
	0x72, 0x6f, 0x75, 0x70, 0x55, 0x55, 0x49, 0x44, 0x22, 0x93, 0x01, 0x0a, 0x0b, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1c, 0x0a, 0x09, 0x47, 0x72, 0x6f, 0x75,
	0x70, 0x55, 0x55, 0x49, 0x44, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x55, 0x55, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x55, 0x55, 0x49, 0x44, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x55, 0x55, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x49, 0x63,
	0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x49, 0x63, 0x6f, 0x6e, 0x12, 0x12,
	0x0a, 0x04, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x52, 0x6f, 0x6c, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x04, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x52, 0x65, 0x6d, 0x61, 0x72, 0x6b,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x52, 0x65, 0x6d, 0x61, 0x72, 0x6b, 0x22, 0x4b,
	0x0a, 0x10, 0x47, 0x65, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72,
	0x52, 0x50, 0x12, 0x37, 0x0a, 0x0c, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4d, 0x65, 0x6d, 0x62, 0x65,
	0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x61, 0x63, 0x6b, 0x65,
	0x74, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x0c, 0x47,
	0x72, 0x6f, 0x75, 0x70, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x22, 0x43, 0x0a, 0x0b, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x12, 0x0a, 0x04, 0x4e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x20,
	0x0a, 0x0b, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x42, 0x0f, 0x5a, 0x0d, 0x2e, 0x2f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x3b, 0x70, 0x61, 0x63,
	0x6b, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_group_proto_rawDescOnce sync.Once
	file_proto_group_proto_rawDescData = file_proto_group_proto_rawDesc
)

func file_proto_group_proto_rawDescGZIP() []byte {
	file_proto_group_proto_rawDescOnce.Do(func() {
		file_proto_group_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_group_proto_rawDescData)
	})
	return file_proto_group_proto_rawDescData
}

var file_proto_group_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_proto_group_proto_goTypes = []interface{}{
	(*AddGroupRQ)(nil),       // 0: packet.AddGroupRQ
	(*AddGroupACK)(nil),      // 1: packet.AddGroupACK
	(*LeaveGroupRQ)(nil),     // 2: packet.LeaveGroupRQ
	(*GroupInfo)(nil),        // 3: packet.GroupInfo
	(*GroupListRP)(nil),      // 4: packet.GroupListRP
	(*GetGroupMemberRQ)(nil), // 5: packet.GetGroupMemberRQ
	(*GroupMember)(nil),      // 6: packet.GroupMember
	(*GetGroupMemberRP)(nil), // 7: packet.GetGroupMemberRP
	(*CreateGroup)(nil),      // 8: packet.CreateGroup
}
var file_proto_group_proto_depIdxs = []int32{
	3, // 0: packet.GroupListRP.GroupList:type_name -> packet.GroupInfo
	6, // 1: packet.GetGroupMemberRP.GroupMembers:type_name -> packet.GroupMember
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_proto_group_proto_init() }
func file_proto_group_proto_init() {
	if File_proto_group_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_group_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddGroupRQ); i {
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
		file_proto_group_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddGroupACK); i {
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
		file_proto_group_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LeaveGroupRQ); i {
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
		file_proto_group_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GroupInfo); i {
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
		file_proto_group_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GroupListRP); i {
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
		file_proto_group_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetGroupMemberRQ); i {
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
		file_proto_group_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GroupMember); i {
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
		file_proto_group_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetGroupMemberRP); i {
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
		file_proto_group_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateGroup); i {
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
			RawDescriptor: file_proto_group_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_group_proto_goTypes,
		DependencyIndexes: file_proto_group_proto_depIdxs,
		MessageInfos:      file_proto_group_proto_msgTypes,
	}.Build()
	File_proto_group_proto = out.File
	file_proto_group_proto_rawDesc = nil
	file_proto_group_proto_goTypes = nil
	file_proto_group_proto_depIdxs = nil
}