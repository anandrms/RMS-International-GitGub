const express = require("express")
const router = express.Router();
const user = require("../model/userSchema");

router.route("/")
  .post(async (req, res) => {
    function emptyobje(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === undefined || obj[key] === '')) {
          return true
        }
      }
      return false
    }
    const data = req.body
    if (!emptyobje(data)) {
      const db = await new user(data)
      await db.save();
      res.status(200).json({ data, msg: "data success" })
    }
    else {
      res.status(403).send("invalid form data")
    }
  }
  )
  .get(async(req,res)=>
    {
      const get = await user.find()
      res.status(200).json(get)
    } )
module.exports = router
