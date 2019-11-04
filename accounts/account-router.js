const express = require("express");

const dB = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  // res.status(200).json("Hello World")
  dB.select("*")
    .from("accounts")
    .then((accounts) => {
      res.status(200).json(accounts)
    })
    .catch((err) => {
      res.status(500).json("errMessage: " + err)
    })
})

router.get("/:id", (req, res) => {
  dB.select("*")
    .from("accounts")
    .where("id", "=", req.params.id)
    .first()
    .then((accounts) => {
      res.status(200).json(accounts)
    })
    .catch((err) => {
      res.status(500).json("errMessage: " + err)
    })
})

router.post("/", (req, res) => {
  const accountsId = req.body;
  dB("accounts")
    .insert(accountsId, "id")
    .then((accounts) => {
      res.status(200).json(accounts)
    })
    .catch((err) => {
      res.status(500).json("errMessage: " + err)
    })
})


module.exports = router;