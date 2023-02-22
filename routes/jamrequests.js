const express = require("express");
const {
  getJamRequests,
  getJamRequest,
  createJamRequest,
  updateJamRequest,
  deleteJamRequest,
} = require("../controllers/jamrequests");
const router = express.Router();

router.route("/").get(getJamRequests).post(createJamRequest);

router
  .route("/:id")
  .get(getJamRequest)
  .put(updateJamRequest)
  .delete(deleteJamRequest);

module.exports = router;
