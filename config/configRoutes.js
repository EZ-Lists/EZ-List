const express = require("express");

const router = express.Router();

const testRoute = require("../routes/test");

router.use("/test", testRoute);

router.get("/", (req, res) => {
  res.send("API works.");
});

module.exports = router;