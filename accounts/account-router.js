const express = require("express");

const dB = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("Hello World")
})


module.exports = router;