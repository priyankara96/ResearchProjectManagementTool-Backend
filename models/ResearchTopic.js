const mongoose = require("mongoose");

const researchTopic = new mongoose.Schema({
  groupID: {
    type: String,
    required: true,
  },
  researchTopic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  submitDateTime: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
  },
  feedback: {
    type: String,
  },
  userID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ResearchTopics", researchTopic);
