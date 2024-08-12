const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const app = express();
const path = require("path")
const PORT = 3000;
app.use(express.static(path.join(__dirname,"..","public")))
mongoose.connect("mongodb://0.0.0.0/RMS-International")

app.use(cors())
app.use(bodyParser.json())
app.use('/login', require("../routes/loginRouter"));
app.use('/product', require("../routes/productRouter"));
app.use('/register', require("../routes/registerRouter"));

// app.post('/add-product', (req, res) => {
//     const data= req.body;
//     res.json({'Product added successfully': data});
//     // res.send();
// });

app.listen(PORT, (error) => {
    if (error) {
        console.log("error while connecting to server", error)
    }
    else {
        console.log("server successfully connected on server");
    }
})