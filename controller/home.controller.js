const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  res.status(200).send("this is how we do it");
});

module.exports = router;
