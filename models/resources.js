const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  submitURL: {
    type: String,
    required: true,
  },
  submitDateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Resources", resourceSchema);
