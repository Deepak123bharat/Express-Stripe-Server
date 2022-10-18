const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    res.status(200).send("this is how we do it");
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
