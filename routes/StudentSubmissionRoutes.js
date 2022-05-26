const router = require("express").Router();
const Submission = require("../models/StudentSubmission");
const extractToken = require("../TokenExtract");
const jwt_decode = require("jwt-decode");

//Register Research Group
router.post("/submission", async (req, res) => {
  try {
    const decodeHeader = jwt_decode(extractToken(req));
    const userID = decodeHeader.data._id;
    console.log("header", decodeHeader);
    console.log("ID : ", userID);
    const submit = new Submission({
      groupID: req.body.groupID,
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
    console.log("result , ", savedSubmission);
  } catch (err) {
    console.log("error in submitting ", err);
    res.status(500).send({ message: "failed", data: err });
  }
});

router.get("/submission/:userID", async (req, res) => {
  try {
    const submit = await Submission.find(req.params);
    res.json(submit);
    console.log("result , ", submit);
  } catch (err) {
    console.log("error in get submissions", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
