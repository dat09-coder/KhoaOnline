const mongoose = require("mongoose");

const LockTimeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lockTime: {
    type: Number,
    default: 0,
    required: true,
  },
});

const LockTime = mongoose.model("LockTime", LockTimeSchema);

module.exports = LockTime;