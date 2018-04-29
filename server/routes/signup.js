var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var cors = require('cors');

var db = mongojs("mongodb://ckc:15149229lOv521@ds151259.mlab.com:51259/ckcapp", ["signup"]);
const util = require('util');
router.get("/signup", function(req, res, next){
console.log("one");
    db.signup.find(function(err, signup){
        if (err){
            res.send(err);
        }
        res.json(signup);
    })
});
//router.use(bodyParser.urlencoded({extended: true}));
//router.use(bodyParser.json());

router.post("/signup", function(req, res, next){
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({extended:true}));
    var signupuser = req.body;
    console.log(signupuser);
    /*if(!signupuser.userName){
        res.status(400);
        res.json({
            error: "Bad data"
        });
    } else{*/
        db.signup.save(signupuser, function(err, savedsignupuser){
            if(err){
                res.send(err);
            }
            res.json(savedsignupuser);
        });

})

module.exports = router;
