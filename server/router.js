const express = require("express");
const router = express.Router();

//root route
router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;
