const router = require("express").Router();
const ResearchGroup = require("../models/ResearchGroup");
const extractToken = require("../TokenExtract");
const jwt_decode = require("jwt-decode");

//Register Research Group
router.post("/researchgroup", async (req, res) => {
  try {
    const decodeHeader = jwt_decode(extractToken(req));
    const userID = decodeHeader.data._id;
    console.log("header", decodeHeader);
    console.log("ID : ", userID);
    const group = new ResearchGroup({
      leaderName: req.body.leaderName,
      leaderRegNo: req.body.leaderRegNo,
      leaderSliitMail: req.body.leaderSliitMail,
      leaderPersonalMail: req.body.leaderPersonalMail,
      leaderContactNo: req.body.leaderContactNo,
      member1Name: req.body.member1Name,
      member1RegNo: req.body.member1RegNo,
      member1SliitMail: req.body.member1SliitMail,
      member1PersonalMail: req.body.member1PersonalMail,
      member1ContactNo: req.body.member1ContactNo,
      member2Name: req.body.member2Name,
      member2RegNo: req.body.member2RegNo,
      member2SliitMail: req.body.member2SliitMail,
      member2PersonalMail: req.body.member2PersonalMail,
      member2ContactNo: req.body.member2ContactNo,
      member3Name: req.body.member3Name,
      member3RegNo: req.body.member3RegNo,
      member3SliitMail: req.body.member3SliitMail,
      member3PersonalMail: req.body.member3PersonalMail,
      member3ContactNo: req.body.member3ContactNo,
      userID: userID,
    });
    const savedGroup = await group.save();
    if (savedGroup) {
      res.status(201).send(savedGroup._id);
    } else {
      res.status(400).send({ message: "failed", data: savedGroup });
    }
    console.log("result , ", savedGroup);
  } catch (err) {
    console.log("error in registering research group ", err);
    res.status(500).send({ message: "failed", data: err });
  }
});

//Get research groups
router.get("/researchgroups", async (req, res) => {
  try {
    const allResearchGroups = await ResearchGroup.find(req.params);
    res.json(allResearchGroups);
    console.log("result , ", allResearchGroups);
  } catch (err) {
    console.log("error in get all Research Groups", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Get a research group
router.get("/researchgroup/:id", async (req, res) => {
  try {
    const researchgroup = await ResearchGroup.findById(req.params.id);
    res.json(researchgroup);
    console.log("result , ", researchgroup);
  } catch (err) {
    console.log("error in getting research group details", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Get research group for the logged user
router.get("/studentresearchgroup/:userID", async (req, res) => {
  try {
    const researchgroup = await ResearchGroup.find(req.params);
    res.json(researchgroup);
    console.log("result , ", researchgroup);
  } catch (err) {
    console.log("error in get research groups", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Update Research Group
router.put("/researchgroup/:id", async (req, res) => {
  try {
    const updateGroup = await ResearchGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateGroup);
    console.log("result , ", updateGroup);
  } catch (err) {
    console.log("error in updating research group details", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Delete Research Group
router.delete("/researchgroup/:id", async (req, res) => {
  try {
    const deleteGroup = await ResearchGroup.findByIdAndRemove(req.params.id);
    res.json(deleteGroup);
    console.log("Deleted!");
  } catch (err) {
    console.log("error in deleting", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
