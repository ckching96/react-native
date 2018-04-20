var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://ckc:15149229lOv521@ds151259.mlab.com:51259/ckcapp", ["signup"]);

router.get("/signup", function(req, res, next){
console.log("one");
    db.signup.find(function(err, signup){
        if (err){
            res.send(err);
        }
        res.json(signup);
    })
});

router.post("/signup", function(req, res, next){
    console.log("two");
    var signupuser = req.body.data;
    if(!signupuser.userName){
        res.status(400);
        res.json({
            error: "Bad data"
        });
    } else{
        db.signup.save(signupuser, function(err, savedsignupuser){
            if(err){
                res.send(err);
            }
            res.json(savedsignupuser);
        });
    }
})

module.exports = router;
