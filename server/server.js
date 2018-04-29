var express = require("express");
var path = require("path");
var cors = require('cors');
var bodyParser = require("body-parser");
var cors = require('cors');

var index = require("./routes/index.js");
var signup = require("./routes/signup.js");

var app = express();

var port = 3000;

const util = require('util');

app.listen(port,function(){
    console.log("Server running on port", port);
});
app.use(cors());
//views

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use("/", index);
app.use("/api", signup);
