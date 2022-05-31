const mongoose = require("mongoose");

const researchGroupSchema = new mongoose.Schema({
  groupID:{
    type:String
  },
  leaderName: {
    type: String,
    required: true,
  },
  leaderRegNo: {
    type: String,
    required: true,
  },
  leaderSliitMail: {
    type: String,
    required: true,
  },
  leaderPersonalMail: {
    type: String,
    required: true,
  },
  leaderContactNo: {
    type: String,
    required: true,
  },
  member1Name: {
    type: String,
    required: true,
  },
  member1RegNo: {
    type: String,
    required: true,
  },
  member1SliitMail: {
    type: String,
    required: true,
  },
  member1PersonalMail: {
    type: String,
    required: true,
  },
  member1ContactNo: {
    type: String,
    required: true,
  },
  member2Name: {
    type: String,
    required: true,
  },
  member2RegNo: {
    type: String,
    required: true,
  },
  member2SliitMail: {
    type: String,
    required: true,
  },
  member2PersonalMail: {
    type: String,
    required: true,
  },
  member2ContactNo: {
    type: String,
    required: true,
  },
  member3Name: {
    type: String,
    required: true,
  },
  member3RegNo: {
    type: String,
    required: true,
  },
  member3SliitMail: {
    type: String,
    required: true,
  },
  member3PersonalMail: {
    type: String,
    required: true,
  },
  member3ContactNo: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ResearchGroups", researchGroupSchema);
