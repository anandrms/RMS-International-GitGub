const mongoose = require("mongoose");
const addProduct = new mongoose.Schema({
    productName: String,
    productPrize: String,
    productImage: String
})
module.exports = mongoose.model("addProduct", addProduct)