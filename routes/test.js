const express = require("express");
const router = express.Router();
const db = require("../database/dbConfig");

router.get("/", (req, res) => {
    db("test")
        .then(test => res.status(200).send(test))
        .catch(err => console.log(err));
});

module.exports = router;