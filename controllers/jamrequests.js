const JamRequest = require("../models/JamRequests");

exports.getJamRequests = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get all Jam Requests`, hello: req.hello });
};

exports.getJamRequest = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get Jam Request ${req.params.id}` });
};

exports.createJamRequest = async (req, res, next) => {
  try {
    const jamrequest = await JamRequest.create(req.body);
    res.status(201).json({
      success: true,
      data: jamrequest,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.updateJamRequest = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Jam Request ${req.params.id}` });
};

exports.deleteJamRequest = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Jam Request ${req.params.id}` });
};
