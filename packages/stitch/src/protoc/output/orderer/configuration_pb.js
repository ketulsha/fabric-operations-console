/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.orderer.BatchSize', null, global);
goog.exportSymbol('proto.orderer.BatchTimeout', null, global);
goog.exportSymbol('proto.orderer.ChannelRestrictions', null, global);
goog.exportSymbol('proto.orderer.ConsensusType', null, global);
goog.exportSymbol('proto.orderer.KafkaBrokers', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderer.ConsensusType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderer.ConsensusType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.orderer.ConsensusType.displayName = 'proto.orderer.ConsensusType';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderer.ConsensusType.prototype.toObject = function(opt_includeInstance) {
  return proto.orderer.ConsensusType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderer.ConsensusType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.ConsensusType.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderer.ConsensusType}
 */
proto.orderer.ConsensusType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderer.ConsensusType;
  return proto.orderer.ConsensusType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderer.ConsensusType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderer.ConsensusType}
 */
proto.orderer.ConsensusType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderer.ConsensusType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderer.ConsensusType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderer.ConsensusType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.ConsensusType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.orderer.ConsensusType.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.orderer.ConsensusType.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderer.BatchSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderer.BatchSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.orderer.BatchSize.displayName = 'proto.orderer.BatchSize';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderer.BatchSize.prototype.toObject = function(opt_includeInstance) {
  return proto.orderer.BatchSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderer.BatchSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.BatchSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxMessageCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    absoluteMaxBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    preferredMaxBytes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderer.BatchSize}
 */
proto.orderer.BatchSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderer.BatchSize;
  return proto.orderer.BatchSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderer.BatchSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderer.BatchSize}
 */
proto.orderer.BatchSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxMessageCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAbsoluteMaxBytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPreferredMaxBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderer.BatchSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderer.BatchSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderer.BatchSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.BatchSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxMessageCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAbsoluteMaxBytes();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPreferredMaxBytes();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 max_message_count = 1;
 * @return {number}
 */
proto.orderer.BatchSize.prototype.getMaxMessageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.orderer.BatchSize.prototype.setMaxMessageCount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 absolute_max_bytes = 2;
 * @return {number}
 */
proto.orderer.BatchSize.prototype.getAbsoluteMaxBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.orderer.BatchSize.prototype.setAbsoluteMaxBytes = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 preferred_max_bytes = 3;
 * @return {number}
 */
proto.orderer.BatchSize.prototype.getPreferredMaxBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.orderer.BatchSize.prototype.setPreferredMaxBytes = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderer.BatchTimeout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderer.BatchTimeout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.orderer.BatchTimeout.displayName = 'proto.orderer.BatchTimeout';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderer.BatchTimeout.prototype.toObject = function(opt_includeInstance) {
  return proto.orderer.BatchTimeout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderer.BatchTimeout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.BatchTimeout.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeout: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderer.BatchTimeout}
 */
proto.orderer.BatchTimeout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderer.BatchTimeout;
  return proto.orderer.BatchTimeout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderer.BatchTimeout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderer.BatchTimeout}
 */
proto.orderer.BatchTimeout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderer.BatchTimeout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderer.BatchTimeout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderer.BatchTimeout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.BatchTimeout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeout();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string timeout = 1;
 * @return {string}
 */
proto.orderer.BatchTimeout.prototype.getTimeout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.orderer.BatchTimeout.prototype.setTimeout = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderer.KafkaBrokers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.orderer.KafkaBrokers.repeatedFields_, null);
};
goog.inherits(proto.orderer.KafkaBrokers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.orderer.KafkaBrokers.displayName = 'proto.orderer.KafkaBrokers';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.orderer.KafkaBrokers.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderer.KafkaBrokers.prototype.toObject = function(opt_includeInstance) {
  return proto.orderer.KafkaBrokers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderer.KafkaBrokers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.KafkaBrokers.toObject = function(includeInstance, msg) {
  var f, obj = {
    brokersList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderer.KafkaBrokers}
 */
proto.orderer.KafkaBrokers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderer.KafkaBrokers;
  return proto.orderer.KafkaBrokers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderer.KafkaBrokers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderer.KafkaBrokers}
 */
proto.orderer.KafkaBrokers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBrokers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderer.KafkaBrokers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderer.KafkaBrokers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderer.KafkaBrokers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.KafkaBrokers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrokersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string brokers = 1;
 * @return {!Array<string>}
 */
proto.orderer.KafkaBrokers.prototype.getBrokersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.orderer.KafkaBrokers.prototype.setBrokersList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.orderer.KafkaBrokers.prototype.addBrokers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.orderer.KafkaBrokers.prototype.clearBrokersList = function() {
  this.setBrokersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderer.ChannelRestrictions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderer.ChannelRestrictions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.orderer.ChannelRestrictions.displayName = 'proto.orderer.ChannelRestrictions';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderer.ChannelRestrictions.prototype.toObject = function(opt_includeInstance) {
  return proto.orderer.ChannelRestrictions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderer.ChannelRestrictions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.ChannelRestrictions.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderer.ChannelRestrictions}
 */
proto.orderer.ChannelRestrictions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderer.ChannelRestrictions;
  return proto.orderer.ChannelRestrictions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderer.ChannelRestrictions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderer.ChannelRestrictions}
 */
proto.orderer.ChannelRestrictions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderer.ChannelRestrictions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderer.ChannelRestrictions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderer.ChannelRestrictions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderer.ChannelRestrictions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 max_count = 1;
 * @return {number}
 */
proto.orderer.ChannelRestrictions.prototype.getMaxCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.orderer.ChannelRestrictions.prototype.setMaxCount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.orderer);
