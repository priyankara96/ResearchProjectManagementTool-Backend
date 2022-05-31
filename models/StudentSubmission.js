const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  groupID: {
    type: String,
    required: true,
  },
  subject: {
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
  userID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Submissions", submissionSchema);
