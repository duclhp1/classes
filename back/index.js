const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./Router/admin")
const student = require("./Router/student")
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/class', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.raw());
app.get('/',function(req,res){
    res.sendfile("index.html");
});
app.listen(3001,() => {
    console.log("Started on PORT 3001");
})
app.use("/admin", admin)
app.use("/student", student)
