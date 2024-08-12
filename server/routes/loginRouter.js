const express = require('express');
const router = express.Router();
const User = require("../model/userSchema")

router
    .route("/")
    .post(async (req, res) => {
        const dta = { name: "ajay" }
        const data = req.body;
        const db = await User.findOne({
            firstName: data.firstName
        })
        if (dta.name == data.firstName) {
            res.status(200).json({ msg: 'success login', data })
        }
        else {
            res.status(404).json("error")
        }
    });
router
    .route("/product")
    .get((req, res) => {
        res.json("hi")
    })

module.exports = router