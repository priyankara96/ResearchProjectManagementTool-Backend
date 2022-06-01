const router = require("express").Router();
const ResearchTopic = require("../models/ResearchTopic");
const extractToken = require("../TokenExtract");
const jwt_decode = require("jwt-decode");

//Register Research Topic
router.post("/researchTopic", async (req, res) => {
  try {
    const decodeHeader = jwt_decode(extractToken(req));
    const userID = decodeHeader.data._id;
    const topic = new ResearchTopic({
      groupID: req.body.groupID,
      researchTopic: req.body.researchTopic,
      description: req.body.description,
      submitDateTime: req.body.submitDateTime,
      userID: userID,
    });
    const savedTopic = await topic.save();
    if (savedTopic) {
      res.status(201).send(savedTopic._id);
    } else {
      res.status(400).send({ message: "failed", data: savedTopic });
    }
  } catch (err) {
    console.log("error in submitting topic", err);
    res.status(500).send({ message: "failed", data: err });
  }
});

//Render the registered topic
router.get("/researchTopic/:id", async (req, res) => {
  try {
    const topic = await ResearchTopic.findById(req.params.id);
    res.json(topic);
  } catch (err) {
    console.log("error in get topics", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Get research topic for the logged user
router.get("/studentresearchtopic/:userID", async (req, res) => {
  try {
    const topic = await ResearchTopic.find(req.params);
    res.json(topic);
  } catch (err) {
    console.log("error in get research groups", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Get all topics
router.get("/researchTopics", async (req, res) => {
  try {
    const allTopics = await ResearchTopic.find(req.params);
    res.json(allTopics);
  } catch (err) {
    console.log("error in get topics", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//update student submission-by supervisor
router.put("/researchTopics/:id", async (req, res) => {
  try {
    const updatedTopic = await ResearchTopic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTopic);
  } catch (err) {
    console.log("error in updating research topic", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Delete Research Group
router.delete("/researchTopics/:id", async (req, res) => {
  try {
    const deleteTopic = await ResearchTopic.findByIdAndRemove(req.params.id);
    res.json(deleteTopic);
  } catch (err) {
    console.log("error in deleting", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
