/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    var chat = {};

    chat.Chat = (function() {

        /**
         * Properties of a Chat.
         * @memberof chat
         * @interface IChat
         * @property {number|null} [Typ] Chat Typ
         * @property {string|null} [Content] Chat Content
         */

        /**
         * Constructs a new Chat.
         * @memberof chat
         * @classdesc Represents a Chat.
         * @implements IChat
         * @constructor
         * @param {chat.IChat=} [properties] Properties to set
         */
        function Chat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chat Typ.
         * @member {number} Typ
         * @memberof chat.Chat
         * @instance
         */
        Chat.prototype.Typ = 0;

        /**
         * Chat Content.
         * @member {string} Content
         * @memberof chat.Chat
         * @instance
         */
        Chat.prototype.Content = "";

        /**
         * Creates a new Chat instance using the specified properties.
         * @function create
         * @memberof chat.Chat
         * @static
         * @param {chat.IChat=} [properties] Properties to set
         * @returns {chat.Chat} Chat instance
         */
        Chat.create = function create(properties) {
            return new Chat(properties);
        };

        /**
         * Encodes the specified Chat message. Does not implicitly {@link chat.Chat.verify|verify} messages.
         * @function encode
         * @memberof chat.Chat
         * @static
         * @param {chat.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Typ != null && Object.hasOwnProperty.call(message, "Typ"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Typ);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link chat.Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.Chat
         * @static
         * @param {chat.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @function decode
         * @memberof chat.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Chat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Typ = reader.uint32();
                    break;
                case 2:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chat message.
         * @function verify
         * @memberof chat.Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Typ != null && message.hasOwnProperty("Typ"))
                if (!$util.isInteger(message.Typ))
                    return "Typ: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.Chat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.Chat} Chat
         */
        Chat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.Chat)
                return object;
            var message = new $root.chat.Chat();
            if (object.Typ != null)
                message.Typ = object.Typ >>> 0;
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.Chat
         * @static
         * @param {chat.Chat} message Chat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Typ = 0;
                object.Content = "";
            }
            if (message.Typ != null && message.hasOwnProperty("Typ"))
                object.Typ = message.Typ;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this Chat to JSON.
         * @function toJSON
         * @memberof chat.Chat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chat;
    })();

    return chat;
})();

$root.packet = (function() {

    /**
     * Namespace packet.
     * @exports packet
     * @namespace
     */
    var packet = {};

    packet.JoinGroupRQ = (function() {

        /**
         * Properties of a JoinGroupRQ.
         * @memberof packet
         * @interface IJoinGroupRQ
         * @property {number|null} [GroupID] JoinGroupRQ GroupID
         * @property {string|null} [OwnerID] JoinGroupRQ OwnerID
         * @property {string|null} [OwnerDomain] JoinGroupRQ OwnerDomain
         */

        /**
         * Constructs a new JoinGroupRQ.
         * @memberof packet
         * @classdesc Represents a JoinGroupRQ.
         * @implements IJoinGroupRQ
         * @constructor
         * @param {packet.IJoinGroupRQ=} [properties] Properties to set
         */
        function JoinGroupRQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinGroupRQ GroupID.
         * @member {number} GroupID
         * @memberof packet.JoinGroupRQ
         * @instance
         */
        JoinGroupRQ.prototype.GroupID = 0;

        /**
         * JoinGroupRQ OwnerID.
         * @member {string} OwnerID
         * @memberof packet.JoinGroupRQ
         * @instance
         */
        JoinGroupRQ.prototype.OwnerID = "";

        /**
         * JoinGroupRQ OwnerDomain.
         * @member {string} OwnerDomain
         * @memberof packet.JoinGroupRQ
         * @instance
         */
        JoinGroupRQ.prototype.OwnerDomain = "";

        /**
         * Creates a new JoinGroupRQ instance using the specified properties.
         * @function create
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {packet.IJoinGroupRQ=} [properties] Properties to set
         * @returns {packet.JoinGroupRQ} JoinGroupRQ instance
         */
        JoinGroupRQ.create = function create(properties) {
            return new JoinGroupRQ(properties);
        };

        /**
         * Encodes the specified JoinGroupRQ message. Does not implicitly {@link packet.JoinGroupRQ.verify|verify} messages.
         * @function encode
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {packet.IJoinGroupRQ} message JoinGroupRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupRQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupID != null && Object.hasOwnProperty.call(message, "GroupID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.GroupID);
            if (message.OwnerID != null && Object.hasOwnProperty.call(message, "OwnerID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.OwnerID);
            if (message.OwnerDomain != null && Object.hasOwnProperty.call(message, "OwnerDomain"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.OwnerDomain);
            return writer;
        };

        /**
         * Encodes the specified JoinGroupRQ message, length delimited. Does not implicitly {@link packet.JoinGroupRQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {packet.IJoinGroupRQ} message JoinGroupRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupRQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGroupRQ message from the specified reader or buffer.
         * @function decode
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.JoinGroupRQ} JoinGroupRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupRQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.JoinGroupRQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupID = reader.uint32();
                    break;
                case 2:
                    message.OwnerID = reader.string();
                    break;
                case 3:
                    message.OwnerDomain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinGroupRQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.JoinGroupRQ} JoinGroupRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupRQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinGroupRQ message.
         * @function verify
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinGroupRQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (!$util.isInteger(message.GroupID))
                    return "GroupID: integer expected";
            if (message.OwnerID != null && message.hasOwnProperty("OwnerID"))
                if (!$util.isString(message.OwnerID))
                    return "OwnerID: string expected";
            if (message.OwnerDomain != null && message.hasOwnProperty("OwnerDomain"))
                if (!$util.isString(message.OwnerDomain))
                    return "OwnerDomain: string expected";
            return null;
        };

        /**
         * Creates a JoinGroupRQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.JoinGroupRQ} JoinGroupRQ
         */
        JoinGroupRQ.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.JoinGroupRQ)
                return object;
            var message = new $root.packet.JoinGroupRQ();
            if (object.GroupID != null)
                message.GroupID = object.GroupID >>> 0;
            if (object.OwnerID != null)
                message.OwnerID = String(object.OwnerID);
            if (object.OwnerDomain != null)
                message.OwnerDomain = String(object.OwnerDomain);
            return message;
        };

        /**
         * Creates a plain object from a JoinGroupRQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.JoinGroupRQ
         * @static
         * @param {packet.JoinGroupRQ} message JoinGroupRQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinGroupRQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GroupID = 0;
                object.OwnerID = "";
                object.OwnerDomain = "";
            }
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            if (message.OwnerID != null && message.hasOwnProperty("OwnerID"))
                object.OwnerID = message.OwnerID;
            if (message.OwnerDomain != null && message.hasOwnProperty("OwnerDomain"))
                object.OwnerDomain = message.OwnerDomain;
            return object;
        };

        /**
         * Converts this JoinGroupRQ to JSON.
         * @function toJSON
         * @memberof packet.JoinGroupRQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGroupRQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinGroupRQ;
    })();

    packet.LeaveGroupRQ = (function() {

        /**
         * Properties of a LeaveGroupRQ.
         * @memberof packet
         * @interface ILeaveGroupRQ
         * @property {number|null} [GroupID] LeaveGroupRQ GroupID
         */

        /**
         * Constructs a new LeaveGroupRQ.
         * @memberof packet
         * @classdesc Represents a LeaveGroupRQ.
         * @implements ILeaveGroupRQ
         * @constructor
         * @param {packet.ILeaveGroupRQ=} [properties] Properties to set
         */
        function LeaveGroupRQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveGroupRQ GroupID.
         * @member {number} GroupID
         * @memberof packet.LeaveGroupRQ
         * @instance
         */
        LeaveGroupRQ.prototype.GroupID = 0;

        /**
         * Creates a new LeaveGroupRQ instance using the specified properties.
         * @function create
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {packet.ILeaveGroupRQ=} [properties] Properties to set
         * @returns {packet.LeaveGroupRQ} LeaveGroupRQ instance
         */
        LeaveGroupRQ.create = function create(properties) {
            return new LeaveGroupRQ(properties);
        };

        /**
         * Encodes the specified LeaveGroupRQ message. Does not implicitly {@link packet.LeaveGroupRQ.verify|verify} messages.
         * @function encode
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {packet.ILeaveGroupRQ} message LeaveGroupRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupRQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupID != null && Object.hasOwnProperty.call(message, "GroupID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.GroupID);
            return writer;
        };

        /**
         * Encodes the specified LeaveGroupRQ message, length delimited. Does not implicitly {@link packet.LeaveGroupRQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {packet.ILeaveGroupRQ} message LeaveGroupRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupRQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveGroupRQ message from the specified reader or buffer.
         * @function decode
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.LeaveGroupRQ} LeaveGroupRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupRQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.LeaveGroupRQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveGroupRQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.LeaveGroupRQ} LeaveGroupRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupRQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveGroupRQ message.
         * @function verify
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveGroupRQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (!$util.isInteger(message.GroupID))
                    return "GroupID: integer expected";
            return null;
        };

        /**
         * Creates a LeaveGroupRQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.LeaveGroupRQ} LeaveGroupRQ
         */
        LeaveGroupRQ.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.LeaveGroupRQ)
                return object;
            var message = new $root.packet.LeaveGroupRQ();
            if (object.GroupID != null)
                message.GroupID = object.GroupID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LeaveGroupRQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.LeaveGroupRQ
         * @static
         * @param {packet.LeaveGroupRQ} message LeaveGroupRQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveGroupRQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GroupID = 0;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            return object;
        };

        /**
         * Converts this LeaveGroupRQ to JSON.
         * @function toJSON
         * @memberof packet.LeaveGroupRQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveGroupRQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaveGroupRQ;
    })();

    packet.GroupInfo = (function() {

        /**
         * Properties of a GroupInfo.
         * @memberof packet
         * @interface IGroupInfo
         * @property {number|null} [ID] GroupInfo ID
         * @property {string|null} [Name] GroupInfo Name
         * @property {string|null} [CreateID] GroupInfo CreateID
         * @property {string|null} [Description] GroupInfo Description
         * @property {string|null} [PrivateKey] GroupInfo PrivateKey
         * @property {string|null} [PublicKey] GroupInfo PublicKey
         * @property {number|null} [Member_Count] GroupInfo Member_Count
         */

        /**
         * Constructs a new GroupInfo.
         * @memberof packet
         * @classdesc Represents a GroupInfo.
         * @implements IGroupInfo
         * @constructor
         * @param {packet.IGroupInfo=} [properties] Properties to set
         */
        function GroupInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInfo ID.
         * @member {number} ID
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.ID = 0;

        /**
         * GroupInfo Name.
         * @member {string} Name
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.Name = "";

        /**
         * GroupInfo CreateID.
         * @member {string} CreateID
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.CreateID = "";

        /**
         * GroupInfo Description.
         * @member {string} Description
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.Description = "";

        /**
         * GroupInfo PrivateKey.
         * @member {string} PrivateKey
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.PrivateKey = "";

        /**
         * GroupInfo PublicKey.
         * @member {string} PublicKey
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.PublicKey = "";

        /**
         * GroupInfo Member_Count.
         * @member {number} Member_Count
         * @memberof packet.GroupInfo
         * @instance
         */
        GroupInfo.prototype.Member_Count = 0;

        /**
         * Creates a new GroupInfo instance using the specified properties.
         * @function create
         * @memberof packet.GroupInfo
         * @static
         * @param {packet.IGroupInfo=} [properties] Properties to set
         * @returns {packet.GroupInfo} GroupInfo instance
         */
        GroupInfo.create = function create(properties) {
            return new GroupInfo(properties);
        };

        /**
         * Encodes the specified GroupInfo message. Does not implicitly {@link packet.GroupInfo.verify|verify} messages.
         * @function encode
         * @memberof packet.GroupInfo
         * @static
         * @param {packet.IGroupInfo} message GroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.CreateID != null && Object.hasOwnProperty.call(message, "CreateID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.CreateID);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Description);
            if (message.PrivateKey != null && Object.hasOwnProperty.call(message, "PrivateKey"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.PrivateKey);
            if (message.PublicKey != null && Object.hasOwnProperty.call(message, "PublicKey"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.PublicKey);
            if (message.Member_Count != null && Object.hasOwnProperty.call(message, "Member_Count"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.Member_Count);
            return writer;
        };

        /**
         * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link packet.GroupInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.GroupInfo
         * @static
         * @param {packet.IGroupInfo} message GroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInfo message from the specified reader or buffer.
         * @function decode
         * @memberof packet.GroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.GroupInfo} GroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.GroupInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.CreateID = reader.string();
                    break;
                case 4:
                    message.Description = reader.string();
                    break;
                case 5:
                    message.PrivateKey = reader.string();
                    break;
                case 6:
                    message.PublicKey = reader.string();
                    break;
                case 7:
                    message.Member_Count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.GroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.GroupInfo} GroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInfo message.
         * @function verify
         * @memberof packet.GroupInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.CreateID != null && message.hasOwnProperty("CreateID"))
                if (!$util.isString(message.CreateID))
                    return "CreateID: string expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            if (message.PrivateKey != null && message.hasOwnProperty("PrivateKey"))
                if (!$util.isString(message.PrivateKey))
                    return "PrivateKey: string expected";
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                if (!$util.isString(message.PublicKey))
                    return "PublicKey: string expected";
            if (message.Member_Count != null && message.hasOwnProperty("Member_Count"))
                if (!$util.isInteger(message.Member_Count))
                    return "Member_Count: integer expected";
            return null;
        };

        /**
         * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.GroupInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.GroupInfo} GroupInfo
         */
        GroupInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.GroupInfo)
                return object;
            var message = new $root.packet.GroupInfo();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.CreateID != null)
                message.CreateID = String(object.CreateID);
            if (object.Description != null)
                message.Description = String(object.Description);
            if (object.PrivateKey != null)
                message.PrivateKey = String(object.PrivateKey);
            if (object.PublicKey != null)
                message.PublicKey = String(object.PublicKey);
            if (object.Member_Count != null)
                message.Member_Count = object.Member_Count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.GroupInfo
         * @static
         * @param {packet.GroupInfo} message GroupInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.Name = "";
                object.CreateID = "";
                object.Description = "";
                object.PrivateKey = "";
                object.PublicKey = "";
                object.Member_Count = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.CreateID != null && message.hasOwnProperty("CreateID"))
                object.CreateID = message.CreateID;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            if (message.PrivateKey != null && message.hasOwnProperty("PrivateKey"))
                object.PrivateKey = message.PrivateKey;
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                object.PublicKey = message.PublicKey;
            if (message.Member_Count != null && message.hasOwnProperty("Member_Count"))
                object.Member_Count = message.Member_Count;
            return object;
        };

        /**
         * Converts this GroupInfo to JSON.
         * @function toJSON
         * @memberof packet.GroupInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupInfo;
    })();

    packet.GroupListRP = (function() {

        /**
         * Properties of a GroupListRP.
         * @memberof packet
         * @interface IGroupListRP
         * @property {Array.<packet.IGroupInfo>|null} [GroupList] GroupListRP GroupList
         */

        /**
         * Constructs a new GroupListRP.
         * @memberof packet
         * @classdesc Represents a GroupListRP.
         * @implements IGroupListRP
         * @constructor
         * @param {packet.IGroupListRP=} [properties] Properties to set
         */
        function GroupListRP(properties) {
            this.GroupList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupListRP GroupList.
         * @member {Array.<packet.IGroupInfo>} GroupList
         * @memberof packet.GroupListRP
         * @instance
         */
        GroupListRP.prototype.GroupList = $util.emptyArray;

        /**
         * Creates a new GroupListRP instance using the specified properties.
         * @function create
         * @memberof packet.GroupListRP
         * @static
         * @param {packet.IGroupListRP=} [properties] Properties to set
         * @returns {packet.GroupListRP} GroupListRP instance
         */
        GroupListRP.create = function create(properties) {
            return new GroupListRP(properties);
        };

        /**
         * Encodes the specified GroupListRP message. Does not implicitly {@link packet.GroupListRP.verify|verify} messages.
         * @function encode
         * @memberof packet.GroupListRP
         * @static
         * @param {packet.IGroupListRP} message GroupListRP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListRP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupList != null && message.GroupList.length)
                for (var i = 0; i < message.GroupList.length; ++i)
                    $root.packet.GroupInfo.encode(message.GroupList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupListRP message, length delimited. Does not implicitly {@link packet.GroupListRP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.GroupListRP
         * @static
         * @param {packet.IGroupListRP} message GroupListRP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListRP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupListRP message from the specified reader or buffer.
         * @function decode
         * @memberof packet.GroupListRP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.GroupListRP} GroupListRP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListRP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.GroupListRP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GroupList && message.GroupList.length))
                        message.GroupList = [];
                    message.GroupList.push($root.packet.GroupInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupListRP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.GroupListRP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.GroupListRP} GroupListRP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListRP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupListRP message.
         * @function verify
         * @memberof packet.GroupListRP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupListRP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupList != null && message.hasOwnProperty("GroupList")) {
                if (!Array.isArray(message.GroupList))
                    return "GroupList: array expected";
                for (var i = 0; i < message.GroupList.length; ++i) {
                    var error = $root.packet.GroupInfo.verify(message.GroupList[i]);
                    if (error)
                        return "GroupList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupListRP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.GroupListRP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.GroupListRP} GroupListRP
         */
        GroupListRP.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.GroupListRP)
                return object;
            var message = new $root.packet.GroupListRP();
            if (object.GroupList) {
                if (!Array.isArray(object.GroupList))
                    throw TypeError(".packet.GroupListRP.GroupList: array expected");
                message.GroupList = [];
                for (var i = 0; i < object.GroupList.length; ++i) {
                    if (typeof object.GroupList[i] !== "object")
                        throw TypeError(".packet.GroupListRP.GroupList: object expected");
                    message.GroupList[i] = $root.packet.GroupInfo.fromObject(object.GroupList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupListRP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.GroupListRP
         * @static
         * @param {packet.GroupListRP} message GroupListRP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupListRP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GroupList = [];
            if (message.GroupList && message.GroupList.length) {
                object.GroupList = [];
                for (var j = 0; j < message.GroupList.length; ++j)
                    object.GroupList[j] = $root.packet.GroupInfo.toObject(message.GroupList[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupListRP to JSON.
         * @function toJSON
         * @memberof packet.GroupListRP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupListRP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupListRP;
    })();

    packet.GetGroupMemberRQ = (function() {

        /**
         * Properties of a GetGroupMemberRQ.
         * @memberof packet
         * @interface IGetGroupMemberRQ
         * @property {number|null} [GroupID] GetGroupMemberRQ GroupID
         */

        /**
         * Constructs a new GetGroupMemberRQ.
         * @memberof packet
         * @classdesc Represents a GetGroupMemberRQ.
         * @implements IGetGroupMemberRQ
         * @constructor
         * @param {packet.IGetGroupMemberRQ=} [properties] Properties to set
         */
        function GetGroupMemberRQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupMemberRQ GroupID.
         * @member {number} GroupID
         * @memberof packet.GetGroupMemberRQ
         * @instance
         */
        GetGroupMemberRQ.prototype.GroupID = 0;

        /**
         * Creates a new GetGroupMemberRQ instance using the specified properties.
         * @function create
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {packet.IGetGroupMemberRQ=} [properties] Properties to set
         * @returns {packet.GetGroupMemberRQ} GetGroupMemberRQ instance
         */
        GetGroupMemberRQ.create = function create(properties) {
            return new GetGroupMemberRQ(properties);
        };

        /**
         * Encodes the specified GetGroupMemberRQ message. Does not implicitly {@link packet.GetGroupMemberRQ.verify|verify} messages.
         * @function encode
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {packet.IGetGroupMemberRQ} message GetGroupMemberRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMemberRQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupID != null && Object.hasOwnProperty.call(message, "GroupID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.GroupID);
            return writer;
        };

        /**
         * Encodes the specified GetGroupMemberRQ message, length delimited. Does not implicitly {@link packet.GetGroupMemberRQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {packet.IGetGroupMemberRQ} message GetGroupMemberRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMemberRQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupMemberRQ message from the specified reader or buffer.
         * @function decode
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.GetGroupMemberRQ} GetGroupMemberRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMemberRQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.GetGroupMemberRQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupMemberRQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.GetGroupMemberRQ} GetGroupMemberRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMemberRQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupMemberRQ message.
         * @function verify
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupMemberRQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (!$util.isInteger(message.GroupID))
                    return "GroupID: integer expected";
            return null;
        };

        /**
         * Creates a GetGroupMemberRQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.GetGroupMemberRQ} GetGroupMemberRQ
         */
        GetGroupMemberRQ.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.GetGroupMemberRQ)
                return object;
            var message = new $root.packet.GetGroupMemberRQ();
            if (object.GroupID != null)
                message.GroupID = object.GroupID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GetGroupMemberRQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.GetGroupMemberRQ
         * @static
         * @param {packet.GetGroupMemberRQ} message GetGroupMemberRQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupMemberRQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GroupID = 0;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            return object;
        };

        /**
         * Converts this GetGroupMemberRQ to JSON.
         * @function toJSON
         * @memberof packet.GetGroupMemberRQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupMemberRQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGroupMemberRQ;
    })();

    packet.GroupMember = (function() {

        /**
         * Properties of a GroupMember.
         * @memberof packet
         * @interface IGroupMember
         * @property {number|null} [ID] GroupMember ID
         * @property {number|null} [GroupId] GroupMember GroupId
         * @property {string|null} [UID] GroupMember UID
         * @property {string|null} [Icon] GroupMember Icon
         * @property {string|null} [Name] GroupMember Name
         * @property {string|null} [Domain] GroupMember Domain
         * @property {number|null} [Role] GroupMember Role
         */

        /**
         * Constructs a new GroupMember.
         * @memberof packet
         * @classdesc Represents a GroupMember.
         * @implements IGroupMember
         * @constructor
         * @param {packet.IGroupMember=} [properties] Properties to set
         */
        function GroupMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMember ID.
         * @member {number} ID
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.ID = 0;

        /**
         * GroupMember GroupId.
         * @member {number} GroupId
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.GroupId = 0;

        /**
         * GroupMember UID.
         * @member {string} UID
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.UID = "";

        /**
         * GroupMember Icon.
         * @member {string} Icon
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.Icon = "";

        /**
         * GroupMember Name.
         * @member {string} Name
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.Name = "";

        /**
         * GroupMember Domain.
         * @member {string} Domain
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.Domain = "";

        /**
         * GroupMember Role.
         * @member {number} Role
         * @memberof packet.GroupMember
         * @instance
         */
        GroupMember.prototype.Role = 0;

        /**
         * Creates a new GroupMember instance using the specified properties.
         * @function create
         * @memberof packet.GroupMember
         * @static
         * @param {packet.IGroupMember=} [properties] Properties to set
         * @returns {packet.GroupMember} GroupMember instance
         */
        GroupMember.create = function create(properties) {
            return new GroupMember(properties);
        };

        /**
         * Encodes the specified GroupMember message. Does not implicitly {@link packet.GroupMember.verify|verify} messages.
         * @function encode
         * @memberof packet.GroupMember
         * @static
         * @param {packet.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.GroupId != null && Object.hasOwnProperty.call(message, "GroupId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.GroupId);
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.UID);
            if (message.Icon != null && Object.hasOwnProperty.call(message, "Icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Icon);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Name);
            if (message.Domain != null && Object.hasOwnProperty.call(message, "Domain"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Domain);
            if (message.Role != null && Object.hasOwnProperty.call(message, "Role"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.Role);
            return writer;
        };

        /**
         * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link packet.GroupMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.GroupMember
         * @static
         * @param {packet.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer.
         * @function decode
         * @memberof packet.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.GroupMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.GroupId = reader.uint32();
                    break;
                case 3:
                    message.UID = reader.string();
                    break;
                case 4:
                    message.Icon = reader.string();
                    break;
                case 5:
                    message.Name = reader.string();
                    break;
                case 6:
                    message.Domain = reader.string();
                    break;
                case 7:
                    message.Role = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMember message.
         * @function verify
         * @memberof packet.GroupMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId))
                    return "GroupId: integer expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isString(message.UID))
                    return "UID: string expected";
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                if (!$util.isString(message.Icon))
                    return "Icon: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Domain != null && message.hasOwnProperty("Domain"))
                if (!$util.isString(message.Domain))
                    return "Domain: string expected";
            if (message.Role != null && message.hasOwnProperty("Role"))
                if (!$util.isInteger(message.Role))
                    return "Role: integer expected";
            return null;
        };

        /**
         * Creates a GroupMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.GroupMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.GroupMember} GroupMember
         */
        GroupMember.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.GroupMember)
                return object;
            var message = new $root.packet.GroupMember();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.GroupId != null)
                message.GroupId = object.GroupId >>> 0;
            if (object.UID != null)
                message.UID = String(object.UID);
            if (object.Icon != null)
                message.Icon = String(object.Icon);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Domain != null)
                message.Domain = String(object.Domain);
            if (object.Role != null)
                message.Role = object.Role >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GroupMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.GroupMember
         * @static
         * @param {packet.GroupMember} message GroupMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.GroupId = 0;
                object.UID = "";
                object.Icon = "";
                object.Name = "";
                object.Domain = "";
                object.Role = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                object.GroupId = message.GroupId;
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                object.Icon = message.Icon;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Domain != null && message.hasOwnProperty("Domain"))
                object.Domain = message.Domain;
            if (message.Role != null && message.hasOwnProperty("Role"))
                object.Role = message.Role;
            return object;
        };

        /**
         * Converts this GroupMember to JSON.
         * @function toJSON
         * @memberof packet.GroupMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupMember;
    })();

    packet.GetGroupMemberRP = (function() {

        /**
         * Properties of a GetGroupMemberRP.
         * @memberof packet
         * @interface IGetGroupMemberRP
         * @property {Array.<packet.IGroupMember>|null} [GroupMembers] GetGroupMemberRP GroupMembers
         */

        /**
         * Constructs a new GetGroupMemberRP.
         * @memberof packet
         * @classdesc Represents a GetGroupMemberRP.
         * @implements IGetGroupMemberRP
         * @constructor
         * @param {packet.IGetGroupMemberRP=} [properties] Properties to set
         */
        function GetGroupMemberRP(properties) {
            this.GroupMembers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupMemberRP GroupMembers.
         * @member {Array.<packet.IGroupMember>} GroupMembers
         * @memberof packet.GetGroupMemberRP
         * @instance
         */
        GetGroupMemberRP.prototype.GroupMembers = $util.emptyArray;

        /**
         * Creates a new GetGroupMemberRP instance using the specified properties.
         * @function create
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {packet.IGetGroupMemberRP=} [properties] Properties to set
         * @returns {packet.GetGroupMemberRP} GetGroupMemberRP instance
         */
        GetGroupMemberRP.create = function create(properties) {
            return new GetGroupMemberRP(properties);
        };

        /**
         * Encodes the specified GetGroupMemberRP message. Does not implicitly {@link packet.GetGroupMemberRP.verify|verify} messages.
         * @function encode
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {packet.IGetGroupMemberRP} message GetGroupMemberRP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMemberRP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupMembers != null && message.GroupMembers.length)
                for (var i = 0; i < message.GroupMembers.length; ++i)
                    $root.packet.GroupMember.encode(message.GroupMembers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGroupMemberRP message, length delimited. Does not implicitly {@link packet.GetGroupMemberRP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {packet.IGetGroupMemberRP} message GetGroupMemberRP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMemberRP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupMemberRP message from the specified reader or buffer.
         * @function decode
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.GetGroupMemberRP} GetGroupMemberRP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMemberRP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.GetGroupMemberRP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GroupMembers && message.GroupMembers.length))
                        message.GroupMembers = [];
                    message.GroupMembers.push($root.packet.GroupMember.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupMemberRP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.GetGroupMemberRP} GetGroupMemberRP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMemberRP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupMemberRP message.
         * @function verify
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupMemberRP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupMembers != null && message.hasOwnProperty("GroupMembers")) {
                if (!Array.isArray(message.GroupMembers))
                    return "GroupMembers: array expected";
                for (var i = 0; i < message.GroupMembers.length; ++i) {
                    var error = $root.packet.GroupMember.verify(message.GroupMembers[i]);
                    if (error)
                        return "GroupMembers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGroupMemberRP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.GetGroupMemberRP} GetGroupMemberRP
         */
        GetGroupMemberRP.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.GetGroupMemberRP)
                return object;
            var message = new $root.packet.GetGroupMemberRP();
            if (object.GroupMembers) {
                if (!Array.isArray(object.GroupMembers))
                    throw TypeError(".packet.GetGroupMemberRP.GroupMembers: array expected");
                message.GroupMembers = [];
                for (var i = 0; i < object.GroupMembers.length; ++i) {
                    if (typeof object.GroupMembers[i] !== "object")
                        throw TypeError(".packet.GetGroupMemberRP.GroupMembers: object expected");
                    message.GroupMembers[i] = $root.packet.GroupMember.fromObject(object.GroupMembers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGroupMemberRP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.GetGroupMemberRP
         * @static
         * @param {packet.GetGroupMemberRP} message GetGroupMemberRP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupMemberRP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GroupMembers = [];
            if (message.GroupMembers && message.GroupMembers.length) {
                object.GroupMembers = [];
                for (var j = 0; j < message.GroupMembers.length; ++j)
                    object.GroupMembers[j] = $root.packet.GroupMember.toObject(message.GroupMembers[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGroupMemberRP to JSON.
         * @function toJSON
         * @memberof packet.GetGroupMemberRP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupMemberRP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGroupMemberRP;
    })();

    packet.CreateGroup = (function() {

        /**
         * Properties of a CreateGroup.
         * @memberof packet
         * @interface ICreateGroup
         * @property {string|null} [Name] CreateGroup Name
         * @property {string|null} [Description] CreateGroup Description
         */

        /**
         * Constructs a new CreateGroup.
         * @memberof packet
         * @classdesc Represents a CreateGroup.
         * @implements ICreateGroup
         * @constructor
         * @param {packet.ICreateGroup=} [properties] Properties to set
         */
        function CreateGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroup Name.
         * @member {string} Name
         * @memberof packet.CreateGroup
         * @instance
         */
        CreateGroup.prototype.Name = "";

        /**
         * CreateGroup Description.
         * @member {string} Description
         * @memberof packet.CreateGroup
         * @instance
         */
        CreateGroup.prototype.Description = "";

        /**
         * Creates a new CreateGroup instance using the specified properties.
         * @function create
         * @memberof packet.CreateGroup
         * @static
         * @param {packet.ICreateGroup=} [properties] Properties to set
         * @returns {packet.CreateGroup} CreateGroup instance
         */
        CreateGroup.create = function create(properties) {
            return new CreateGroup(properties);
        };

        /**
         * Encodes the specified CreateGroup message. Does not implicitly {@link packet.CreateGroup.verify|verify} messages.
         * @function encode
         * @memberof packet.CreateGroup
         * @static
         * @param {packet.ICreateGroup} message CreateGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Description);
            return writer;
        };

        /**
         * Encodes the specified CreateGroup message, length delimited. Does not implicitly {@link packet.CreateGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.CreateGroup
         * @static
         * @param {packet.ICreateGroup} message CreateGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroup message from the specified reader or buffer.
         * @function decode
         * @memberof packet.CreateGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.CreateGroup} CreateGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.CreateGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.CreateGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.CreateGroup} CreateGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroup message.
         * @function verify
         * @memberof packet.CreateGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            return null;
        };

        /**
         * Creates a CreateGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.CreateGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.CreateGroup} CreateGroup
         */
        CreateGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.CreateGroup)
                return object;
            var message = new $root.packet.CreateGroup();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Description != null)
                message.Description = String(object.Description);
            return message;
        };

        /**
         * Creates a plain object from a CreateGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.CreateGroup
         * @static
         * @param {packet.CreateGroup} message CreateGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Description = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            return object;
        };

        /**
         * Converts this CreateGroup to JSON.
         * @function toJSON
         * @memberof packet.CreateGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateGroup;
    })();

    packet.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof packet
         * @interface IMessage
         * @property {string|null} [Content] Message Content
         */

        /**
         * Constructs a new Message.
         * @memberof packet
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {packet.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message Content.
         * @member {string} Content
         * @memberof packet.Message
         * @instance
         */
        Message.prototype.Content = "";

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof packet.Message
         * @static
         * @param {packet.IMessage=} [properties] Properties to set
         * @returns {packet.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link packet.Message.verify|verify} messages.
         * @function encode
         * @memberof packet.Message
         * @static
         * @param {packet.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link packet.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.Message
         * @static
         * @param {packet.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof packet.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof packet.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.Message)
                return object;
            var message = new $root.packet.Message();
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.Message
         * @static
         * @param {packet.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Content = "";
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof packet.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    packet.GetMessageHistory = (function() {

        /**
         * Properties of a GetMessageHistory.
         * @memberof packet
         * @interface IGetMessageHistory
         * @property {string|null} [MsgId] GetMessageHistory MsgId
         */

        /**
         * Constructs a new GetMessageHistory.
         * @memberof packet
         * @classdesc Represents a GetMessageHistory.
         * @implements IGetMessageHistory
         * @constructor
         * @param {packet.IGetMessageHistory=} [properties] Properties to set
         */
        function GetMessageHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMessageHistory MsgId.
         * @member {string} MsgId
         * @memberof packet.GetMessageHistory
         * @instance
         */
        GetMessageHistory.prototype.MsgId = "";

        /**
         * Creates a new GetMessageHistory instance using the specified properties.
         * @function create
         * @memberof packet.GetMessageHistory
         * @static
         * @param {packet.IGetMessageHistory=} [properties] Properties to set
         * @returns {packet.GetMessageHistory} GetMessageHistory instance
         */
        GetMessageHistory.create = function create(properties) {
            return new GetMessageHistory(properties);
        };

        /**
         * Encodes the specified GetMessageHistory message. Does not implicitly {@link packet.GetMessageHistory.verify|verify} messages.
         * @function encode
         * @memberof packet.GetMessageHistory
         * @static
         * @param {packet.IGetMessageHistory} message GetMessageHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMessageHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.MsgId);
            return writer;
        };

        /**
         * Encodes the specified GetMessageHistory message, length delimited. Does not implicitly {@link packet.GetMessageHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.GetMessageHistory
         * @static
         * @param {packet.IGetMessageHistory} message GetMessageHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMessageHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMessageHistory message from the specified reader or buffer.
         * @function decode
         * @memberof packet.GetMessageHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.GetMessageHistory} GetMessageHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMessageHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.GetMessageHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMessageHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.GetMessageHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.GetMessageHistory} GetMessageHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMessageHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMessageHistory message.
         * @function verify
         * @memberof packet.GetMessageHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMessageHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isString(message.MsgId))
                    return "MsgId: string expected";
            return null;
        };

        /**
         * Creates a GetMessageHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.GetMessageHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.GetMessageHistory} GetMessageHistory
         */
        GetMessageHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.GetMessageHistory)
                return object;
            var message = new $root.packet.GetMessageHistory();
            if (object.MsgId != null)
                message.MsgId = String(object.MsgId);
            return message;
        };

        /**
         * Creates a plain object from a GetMessageHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.GetMessageHistory
         * @static
         * @param {packet.GetMessageHistory} message GetMessageHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMessageHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.MsgId = "";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                object.MsgId = message.MsgId;
            return object;
        };

        /**
         * Converts this GetMessageHistory to JSON.
         * @function toJSON
         * @memberof packet.GetMessageHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMessageHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetMessageHistory;
    })();

    packet.Pack = (function() {

        /**
         * Properties of a Pack.
         * @memberof packet
         * @interface IPack
         * @property {string|null} [MsgId] Pack MsgId
         * @property {number|null} [Kind] Pack Kind
         * @property {number|null} [MsgType] Pack MsgType
         * @property {number|null} [MsgCode] Pack MsgCode
         * @property {string|null} [From] Pack From
         * @property {string|null} [To] Pack To
         * @property {Uint8Array|null} [Payload] Pack Payload
         */

        /**
         * Constructs a new Pack.
         * @memberof packet
         * @classdesc Represents a Pack.
         * @implements IPack
         * @constructor
         * @param {packet.IPack=} [properties] Properties to set
         */
        function Pack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pack MsgId.
         * @member {string} MsgId
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.MsgId = "";

        /**
         * Pack Kind.
         * @member {number} Kind
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.Kind = 0;

        /**
         * Pack MsgType.
         * @member {number} MsgType
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.MsgType = 0;

        /**
         * Pack MsgCode.
         * @member {number} MsgCode
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.MsgCode = 0;

        /**
         * Pack From.
         * @member {string} From
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.From = "";

        /**
         * Pack To.
         * @member {string} To
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.To = "";

        /**
         * Pack Payload.
         * @member {Uint8Array} Payload
         * @memberof packet.Pack
         * @instance
         */
        Pack.prototype.Payload = $util.newBuffer([]);

        /**
         * Creates a new Pack instance using the specified properties.
         * @function create
         * @memberof packet.Pack
         * @static
         * @param {packet.IPack=} [properties] Properties to set
         * @returns {packet.Pack} Pack instance
         */
        Pack.create = function create(properties) {
            return new Pack(properties);
        };

        /**
         * Encodes the specified Pack message. Does not implicitly {@link packet.Pack.verify|verify} messages.
         * @function encode
         * @memberof packet.Pack
         * @static
         * @param {packet.IPack} message Pack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.MsgId);
            if (message.Kind != null && Object.hasOwnProperty.call(message, "Kind"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Kind);
            if (message.MsgType != null && Object.hasOwnProperty.call(message, "MsgType"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.MsgType);
            if (message.MsgCode != null && Object.hasOwnProperty.call(message, "MsgCode"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.MsgCode);
            if (message.From != null && Object.hasOwnProperty.call(message, "From"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.From);
            if (message.To != null && Object.hasOwnProperty.call(message, "To"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.To);
            if (message.Payload != null && Object.hasOwnProperty.call(message, "Payload"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.Payload);
            return writer;
        };

        /**
         * Encodes the specified Pack message, length delimited. Does not implicitly {@link packet.Pack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.Pack
         * @static
         * @param {packet.IPack} message Pack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pack message from the specified reader or buffer.
         * @function decode
         * @memberof packet.Pack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.Pack} Pack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.Pack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgId = reader.string();
                    break;
                case 2:
                    message.Kind = reader.uint32();
                    break;
                case 3:
                    message.MsgType = reader.uint32();
                    break;
                case 4:
                    message.MsgCode = reader.uint32();
                    break;
                case 5:
                    message.From = reader.string();
                    break;
                case 6:
                    message.To = reader.string();
                    break;
                case 7:
                    message.Payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.Pack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.Pack} Pack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pack message.
         * @function verify
         * @memberof packet.Pack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isString(message.MsgId))
                    return "MsgId: string expected";
            if (message.Kind != null && message.hasOwnProperty("Kind"))
                if (!$util.isInteger(message.Kind))
                    return "Kind: integer expected";
            if (message.MsgType != null && message.hasOwnProperty("MsgType"))
                if (!$util.isInteger(message.MsgType))
                    return "MsgType: integer expected";
            if (message.MsgCode != null && message.hasOwnProperty("MsgCode"))
                if (!$util.isInteger(message.MsgCode))
                    return "MsgCode: integer expected";
            if (message.From != null && message.hasOwnProperty("From"))
                if (!$util.isString(message.From))
                    return "From: string expected";
            if (message.To != null && message.hasOwnProperty("To"))
                if (!$util.isString(message.To))
                    return "To: string expected";
            if (message.Payload != null && message.hasOwnProperty("Payload"))
                if (!(message.Payload && typeof message.Payload.length === "number" || $util.isString(message.Payload)))
                    return "Payload: buffer expected";
            return null;
        };

        /**
         * Creates a Pack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.Pack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.Pack} Pack
         */
        Pack.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.Pack)
                return object;
            var message = new $root.packet.Pack();
            if (object.MsgId != null)
                message.MsgId = String(object.MsgId);
            if (object.Kind != null)
                message.Kind = object.Kind >>> 0;
            if (object.MsgType != null)
                message.MsgType = object.MsgType >>> 0;
            if (object.MsgCode != null)
                message.MsgCode = object.MsgCode >>> 0;
            if (object.From != null)
                message.From = String(object.From);
            if (object.To != null)
                message.To = String(object.To);
            if (object.Payload != null)
                if (typeof object.Payload === "string")
                    $util.base64.decode(object.Payload, message.Payload = $util.newBuffer($util.base64.length(object.Payload)), 0);
                else if (object.Payload.length)
                    message.Payload = object.Payload;
            return message;
        };

        /**
         * Creates a plain object from a Pack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.Pack
         * @static
         * @param {packet.Pack} message Pack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgId = "";
                object.Kind = 0;
                object.MsgType = 0;
                object.MsgCode = 0;
                object.From = "";
                object.To = "";
                if (options.bytes === String)
                    object.Payload = "";
                else {
                    object.Payload = [];
                    if (options.bytes !== Array)
                        object.Payload = $util.newBuffer(object.Payload);
                }
            }
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                object.MsgId = message.MsgId;
            if (message.Kind != null && message.hasOwnProperty("Kind"))
                object.Kind = message.Kind;
            if (message.MsgType != null && message.hasOwnProperty("MsgType"))
                object.MsgType = message.MsgType;
            if (message.MsgCode != null && message.hasOwnProperty("MsgCode"))
                object.MsgCode = message.MsgCode;
            if (message.From != null && message.hasOwnProperty("From"))
                object.From = message.From;
            if (message.To != null && message.hasOwnProperty("To"))
                object.To = message.To;
            if (message.Payload != null && message.hasOwnProperty("Payload"))
                object.Payload = options.bytes === String ? $util.base64.encode(message.Payload, 0, message.Payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.Payload) : message.Payload;
            return object;
        };

        /**
         * Converts this Pack to JSON.
         * @function toJSON
         * @memberof packet.Pack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pack;
    })();

    packet.AddFriendRQ = (function() {

        /**
         * Properties of an AddFriendRQ.
         * @memberof packet
         * @interface IAddFriendRQ
         * @property {string|null} [UID] AddFriendRQ UID
         * @property {string|null} [Domain] AddFriendRQ Domain
         */

        /**
         * Constructs a new AddFriendRQ.
         * @memberof packet
         * @classdesc Represents an AddFriendRQ.
         * @implements IAddFriendRQ
         * @constructor
         * @param {packet.IAddFriendRQ=} [properties] Properties to set
         */
        function AddFriendRQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddFriendRQ UID.
         * @member {string} UID
         * @memberof packet.AddFriendRQ
         * @instance
         */
        AddFriendRQ.prototype.UID = "";

        /**
         * AddFriendRQ Domain.
         * @member {string} Domain
         * @memberof packet.AddFriendRQ
         * @instance
         */
        AddFriendRQ.prototype.Domain = "";

        /**
         * Creates a new AddFriendRQ instance using the specified properties.
         * @function create
         * @memberof packet.AddFriendRQ
         * @static
         * @param {packet.IAddFriendRQ=} [properties] Properties to set
         * @returns {packet.AddFriendRQ} AddFriendRQ instance
         */
        AddFriendRQ.create = function create(properties) {
            return new AddFriendRQ(properties);
        };

        /**
         * Encodes the specified AddFriendRQ message. Does not implicitly {@link packet.AddFriendRQ.verify|verify} messages.
         * @function encode
         * @memberof packet.AddFriendRQ
         * @static
         * @param {packet.IAddFriendRQ} message AddFriendRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendRQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
            if (message.Domain != null && Object.hasOwnProperty.call(message, "Domain"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Domain);
            return writer;
        };

        /**
         * Encodes the specified AddFriendRQ message, length delimited. Does not implicitly {@link packet.AddFriendRQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.AddFriendRQ
         * @static
         * @param {packet.IAddFriendRQ} message AddFriendRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendRQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddFriendRQ message from the specified reader or buffer.
         * @function decode
         * @memberof packet.AddFriendRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.AddFriendRQ} AddFriendRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendRQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.AddFriendRQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.string();
                    break;
                case 2:
                    message.Domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddFriendRQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.AddFriendRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.AddFriendRQ} AddFriendRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendRQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddFriendRQ message.
         * @function verify
         * @memberof packet.AddFriendRQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddFriendRQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isString(message.UID))
                    return "UID: string expected";
            if (message.Domain != null && message.hasOwnProperty("Domain"))
                if (!$util.isString(message.Domain))
                    return "Domain: string expected";
            return null;
        };

        /**
         * Creates an AddFriendRQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.AddFriendRQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.AddFriendRQ} AddFriendRQ
         */
        AddFriendRQ.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.AddFriendRQ)
                return object;
            var message = new $root.packet.AddFriendRQ();
            if (object.UID != null)
                message.UID = String(object.UID);
            if (object.Domain != null)
                message.Domain = String(object.Domain);
            return message;
        };

        /**
         * Creates a plain object from an AddFriendRQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.AddFriendRQ
         * @static
         * @param {packet.AddFriendRQ} message AddFriendRQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddFriendRQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UID = "";
                object.Domain = "";
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.Domain != null && message.hasOwnProperty("Domain"))
                object.Domain = message.Domain;
            return object;
        };

        /**
         * Converts this AddFriendRQ to JSON.
         * @function toJSON
         * @memberof packet.AddFriendRQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddFriendRQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddFriendRQ;
    })();

    packet.RemoveFriendRQ = (function() {

        /**
         * Properties of a RemoveFriendRQ.
         * @memberof packet
         * @interface IRemoveFriendRQ
         * @property {string|null} [UID] RemoveFriendRQ UID
         */

        /**
         * Constructs a new RemoveFriendRQ.
         * @memberof packet
         * @classdesc Represents a RemoveFriendRQ.
         * @implements IRemoveFriendRQ
         * @constructor
         * @param {packet.IRemoveFriendRQ=} [properties] Properties to set
         */
        function RemoveFriendRQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveFriendRQ UID.
         * @member {string} UID
         * @memberof packet.RemoveFriendRQ
         * @instance
         */
        RemoveFriendRQ.prototype.UID = "";

        /**
         * Creates a new RemoveFriendRQ instance using the specified properties.
         * @function create
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {packet.IRemoveFriendRQ=} [properties] Properties to set
         * @returns {packet.RemoveFriendRQ} RemoveFriendRQ instance
         */
        RemoveFriendRQ.create = function create(properties) {
            return new RemoveFriendRQ(properties);
        };

        /**
         * Encodes the specified RemoveFriendRQ message. Does not implicitly {@link packet.RemoveFriendRQ.verify|verify} messages.
         * @function encode
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {packet.IRemoveFriendRQ} message RemoveFriendRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveFriendRQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
            return writer;
        };

        /**
         * Encodes the specified RemoveFriendRQ message, length delimited. Does not implicitly {@link packet.RemoveFriendRQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {packet.IRemoveFriendRQ} message RemoveFriendRQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveFriendRQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveFriendRQ message from the specified reader or buffer.
         * @function decode
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.RemoveFriendRQ} RemoveFriendRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveFriendRQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.RemoveFriendRQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveFriendRQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.RemoveFriendRQ} RemoveFriendRQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveFriendRQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveFriendRQ message.
         * @function verify
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveFriendRQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isString(message.UID))
                    return "UID: string expected";
            return null;
        };

        /**
         * Creates a RemoveFriendRQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.RemoveFriendRQ} RemoveFriendRQ
         */
        RemoveFriendRQ.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.RemoveFriendRQ)
                return object;
            var message = new $root.packet.RemoveFriendRQ();
            if (object.UID != null)
                message.UID = String(object.UID);
            return message;
        };

        /**
         * Creates a plain object from a RemoveFriendRQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.RemoveFriendRQ
         * @static
         * @param {packet.RemoveFriendRQ} message RemoveFriendRQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveFriendRQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.UID = "";
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            return object;
        };

        /**
         * Converts this RemoveFriendRQ to JSON.
         * @function toJSON
         * @memberof packet.RemoveFriendRQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveFriendRQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveFriendRQ;
    })();

    packet.User = (function() {

        /**
         * Properties of a User.
         * @memberof packet
         * @interface IUser
         * @property {string|null} [UID] User UID
         * @property {string|null} [Name] User Name
         * @property {string|null} [NickName] User NickName
         * @property {string|null} [Domain] User Domain
         * @property {string|null} [Icon] User Icon
         * @property {number|null} [Gender] User Gender
         * @property {string|null} [Phone] User Phone
         * @property {string|null} [Birth] User Birth
         * @property {string|null} [Email] User Email
         * @property {boolean|null} [Is_Self] User Is_Self
         */

        /**
         * Constructs a new User.
         * @memberof packet
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {packet.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User UID.
         * @member {string} UID
         * @memberof packet.User
         * @instance
         */
        User.prototype.UID = "";

        /**
         * User Name.
         * @member {string} Name
         * @memberof packet.User
         * @instance
         */
        User.prototype.Name = "";

        /**
         * User NickName.
         * @member {string} NickName
         * @memberof packet.User
         * @instance
         */
        User.prototype.NickName = "";

        /**
         * User Domain.
         * @member {string} Domain
         * @memberof packet.User
         * @instance
         */
        User.prototype.Domain = "";

        /**
         * User Icon.
         * @member {string} Icon
         * @memberof packet.User
         * @instance
         */
        User.prototype.Icon = "";

        /**
         * User Gender.
         * @member {number} Gender
         * @memberof packet.User
         * @instance
         */
        User.prototype.Gender = 0;

        /**
         * User Phone.
         * @member {string} Phone
         * @memberof packet.User
         * @instance
         */
        User.prototype.Phone = "";

        /**
         * User Birth.
         * @member {string} Birth
         * @memberof packet.User
         * @instance
         */
        User.prototype.Birth = "";

        /**
         * User Email.
         * @member {string} Email
         * @memberof packet.User
         * @instance
         */
        User.prototype.Email = "";

        /**
         * User Is_Self.
         * @member {boolean} Is_Self
         * @memberof packet.User
         * @instance
         */
        User.prototype.Is_Self = false;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof packet.User
         * @static
         * @param {packet.IUser=} [properties] Properties to set
         * @returns {packet.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link packet.User.verify|verify} messages.
         * @function encode
         * @memberof packet.User
         * @static
         * @param {packet.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            if (message.Domain != null && Object.hasOwnProperty.call(message, "Domain"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Domain);
            if (message.Icon != null && Object.hasOwnProperty.call(message, "Icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Icon);
            if (message.Gender != null && Object.hasOwnProperty.call(message, "Gender"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.Gender);
            if (message.Phone != null && Object.hasOwnProperty.call(message, "Phone"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Phone);
            if (message.Birth != null && Object.hasOwnProperty.call(message, "Birth"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.Birth);
            if (message.Email != null && Object.hasOwnProperty.call(message, "Email"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.Email);
            if (message.Is_Self != null && Object.hasOwnProperty.call(message, "Is_Self"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.Is_Self);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link packet.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packet.User
         * @static
         * @param {packet.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof packet.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packet.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.packet.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.NickName = reader.string();
                    break;
                case 4:
                    message.Domain = reader.string();
                    break;
                case 5:
                    message.Icon = reader.string();
                    break;
                case 6:
                    message.Gender = reader.uint32();
                    break;
                case 7:
                    message.Phone = reader.string();
                    break;
                case 8:
                    message.Birth = reader.string();
                    break;
                case 9:
                    message.Email = reader.string();
                    break;
                case 10:
                    message.Is_Self = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packet.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packet.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof packet.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isString(message.UID))
                    return "UID: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.Domain != null && message.hasOwnProperty("Domain"))
                if (!$util.isString(message.Domain))
                    return "Domain: string expected";
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                if (!$util.isString(message.Icon))
                    return "Icon: string expected";
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                if (!$util.isInteger(message.Gender))
                    return "Gender: integer expected";
            if (message.Phone != null && message.hasOwnProperty("Phone"))
                if (!$util.isString(message.Phone))
                    return "Phone: string expected";
            if (message.Birth != null && message.hasOwnProperty("Birth"))
                if (!$util.isString(message.Birth))
                    return "Birth: string expected";
            if (message.Email != null && message.hasOwnProperty("Email"))
                if (!$util.isString(message.Email))
                    return "Email: string expected";
            if (message.Is_Self != null && message.hasOwnProperty("Is_Self"))
                if (typeof message.Is_Self !== "boolean")
                    return "Is_Self: boolean expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packet.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packet.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.packet.User)
                return object;
            var message = new $root.packet.User();
            if (object.UID != null)
                message.UID = String(object.UID);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Domain != null)
                message.Domain = String(object.Domain);
            if (object.Icon != null)
                message.Icon = String(object.Icon);
            if (object.Gender != null)
                message.Gender = object.Gender >>> 0;
            if (object.Phone != null)
                message.Phone = String(object.Phone);
            if (object.Birth != null)
                message.Birth = String(object.Birth);
            if (object.Email != null)
                message.Email = String(object.Email);
            if (object.Is_Self != null)
                message.Is_Self = Boolean(object.Is_Self);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packet.User
         * @static
         * @param {packet.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UID = "";
                object.Name = "";
                object.NickName = "";
                object.Domain = "";
                object.Icon = "";
                object.Gender = 0;
                object.Phone = "";
                object.Birth = "";
                object.Email = "";
                object.Is_Self = false;
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Domain != null && message.hasOwnProperty("Domain"))
                object.Domain = message.Domain;
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                object.Icon = message.Icon;
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                object.Gender = message.Gender;
            if (message.Phone != null && message.hasOwnProperty("Phone"))
                object.Phone = message.Phone;
            if (message.Birth != null && message.hasOwnProperty("Birth"))
                object.Birth = message.Birth;
            if (message.Email != null && message.hasOwnProperty("Email"))
                object.Email = message.Email;
            if (message.Is_Self != null && message.hasOwnProperty("Is_Self"))
                object.Is_Self = message.Is_Self;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof packet.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return packet;
})();

$root.result = (function() {

    /**
     * Namespace result.
     * @exports result
     * @namespace
     */
    var result = {};

    result.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof result
         * @interface IResult
         * @property {number|null} [Code] Result Code
         * @property {string|null} [Msg] Result Msg
         * @property {boolean|null} [State] Result State
         */

        /**
         * Constructs a new Result.
         * @memberof result
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {result.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result Code.
         * @member {number} Code
         * @memberof result.Result
         * @instance
         */
        Result.prototype.Code = 0;

        /**
         * Result Msg.
         * @member {string} Msg
         * @memberof result.Result
         * @instance
         */
        Result.prototype.Msg = "";

        /**
         * Result State.
         * @member {boolean} State
         * @memberof result.Result
         * @instance
         */
        Result.prototype.State = false;

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof result.Result
         * @static
         * @param {result.IResult=} [properties] Properties to set
         * @returns {result.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link result.Result.verify|verify} messages.
         * @function encode
         * @memberof result.Result
         * @static
         * @param {result.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.State);
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link result.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof result.Result
         * @static
         * @param {result.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof result.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {result.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.result.Result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.uint32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                case 3:
                    message.State = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof result.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {result.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof result.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (typeof message.State !== "boolean")
                    return "State: boolean expected";
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof result.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {result.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.result.Result)
                return object;
            var message = new $root.result.Result();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.State != null)
                message.State = Boolean(object.State);
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof result.Result
         * @static
         * @param {result.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
                object.State = false;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof result.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Result;
    })();

    result.Common = (function() {

        /**
         * Properties of a Common.
         * @memberof result
         * @interface ICommon
         * @property {string|null} [Id] Common Id
         */

        /**
         * Constructs a new Common.
         * @memberof result
         * @classdesc Represents a Common.
         * @implements ICommon
         * @constructor
         * @param {result.ICommon=} [properties] Properties to set
         */
        function Common(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Common Id.
         * @member {string} Id
         * @memberof result.Common
         * @instance
         */
        Common.prototype.Id = "";

        /**
         * Creates a new Common instance using the specified properties.
         * @function create
         * @memberof result.Common
         * @static
         * @param {result.ICommon=} [properties] Properties to set
         * @returns {result.Common} Common instance
         */
        Common.create = function create(properties) {
            return new Common(properties);
        };

        /**
         * Encodes the specified Common message. Does not implicitly {@link result.Common.verify|verify} messages.
         * @function encode
         * @memberof result.Common
         * @static
         * @param {result.ICommon} message Common message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Common.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            return writer;
        };

        /**
         * Encodes the specified Common message, length delimited. Does not implicitly {@link result.Common.verify|verify} messages.
         * @function encodeDelimited
         * @memberof result.Common
         * @static
         * @param {result.ICommon} message Common message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Common.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Common message from the specified reader or buffer.
         * @function decode
         * @memberof result.Common
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {result.Common} Common
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Common.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.result.Common();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Common message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof result.Common
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {result.Common} Common
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Common.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Common message.
         * @function verify
         * @memberof result.Common
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Common.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            return null;
        };

        /**
         * Creates a Common message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof result.Common
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {result.Common} Common
         */
        Common.fromObject = function fromObject(object) {
            if (object instanceof $root.result.Common)
                return object;
            var message = new $root.result.Common();
            if (object.Id != null)
                message.Id = String(object.Id);
            return message;
        };

        /**
         * Creates a plain object from a Common message. Also converts values to other types if specified.
         * @function toObject
         * @memberof result.Common
         * @static
         * @param {result.Common} message Common
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Common.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Id = "";
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            return object;
        };

        /**
         * Converts this Common to JSON.
         * @function toJSON
         * @memberof result.Common
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Common.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Common;
    })();

    return result;
})();

module.exports = $root;
