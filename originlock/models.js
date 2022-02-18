const mongoose = require("mongoose");

const originLockSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
    unique:true
  }
});

const originLock = mongoose.model("OriginLock", originLockSchema);

module.exports = originLock;