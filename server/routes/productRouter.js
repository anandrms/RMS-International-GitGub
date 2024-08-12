const express = require("express");
const router = express.Router();
const Product = require("../model/addProduct");
const path = require("path");
const multer = require("multer");

const productImage = multer({"dest": path.join(__dirname,"..","public","productImage")})

router.route("/")
  .post(productImage.single("productImage"), async (req, res) => {
    let {productName,productPrize}=req.body;
    let image = req.file;

    let addProduct = await Product.create({
      productName,productPrize,productImage: image["filename"]
    })
    
    res.status(200).json({
      msg: 'Product added successfully'
    });
  })
  .get(async(req,res)=>
  {
    const get = await Product.find()
    res.status(200).json(get)
  } )

module.exports = router;

