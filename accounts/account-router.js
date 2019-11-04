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
    // dB('accounts') // returns promise!!!
    // .then(result => {
    //     res.status(200).json(result)

    // })
    // .catch(error => {
    //   res.status(500).json({ message: 'this went wrong: ' + error.message });
    // });
})


module.exports = router;