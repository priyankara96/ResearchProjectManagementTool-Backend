const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  topic: {
type :String,
required: true,
  },
  submitURL: {
    type: String,
    required: true,
  },
  submitDateTime: {
    type: String,
    
  },
});

module.exports = mongoose.model("Resources", resourceSchema);
