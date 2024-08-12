const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    doorNo: String,
    street: String,
    city: String,
    district: String,
    state: String,
    pincode: String
})
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    userName: String,
    password: String,
    address: addressSchema

})

module.exports = mongoose.model("registeredUser", userSchema)