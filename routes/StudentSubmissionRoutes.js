const router = require("express").Router();
const Submission = require("../models/StudentSubmission");
const extractToken = require("../TokenExtract");
const jwt_decode = require("jwt-decode");

//Upload a submission
router.post("/submission", async (req, res) => {
  try {
    const decodeHeader = jwt_decode(extractToken(req));
    const userID = decodeHeader.data._id;
    const submit = new Submission({
      groupID: req.body.groupID,
      subject: req.body.subject,
      submitURL: req.body.submitURL,
      submitDateTime: req.body.submitDateTime,
      userID: userID,
    });
    const savedSubmission = await submit.save();
    if (savedSubmission) {
      res.status(201).send(savedSubmission._id);
    } else {
      res.status(400).send({ message: "failed", data: savedSubmission });
    }
  } catch (err) {
    console.log("error in submitting ", err);
    res.status(500).send({ message: "failed", data: err });
  }
});

//Render the submission uploaded at the moment
router.get("/mysubmission/:id", async (req, res) => {
  try {
    const submit = await Submission.findById(req.params.id);
    res.json(submit);
  } catch (err) {
    console.log("error in get submissions", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Get all submissions
router.get("/submissions", async (req, res) => {
  try {
    const allSubmissions = await Submission.find(req.params);
    res.json(allSubmissions);
  } catch (err) {
    console.log("error in get submissions", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//update student submission-by supervisor
router.put("/submission/:id", async (req, res) => {
  try {
    const updatedSubmission = await Submission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSubmission);
  } catch (err) {
    console.log("error in updating submission", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
