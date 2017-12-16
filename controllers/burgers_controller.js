var express = require("express");
var burger = require("./../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.allBurgers(function(data){
        for(i in data){
            if(data[i].devoured === 0){
                data[i].devoured = false;
            }
        }
        
        res.render("index", {burgers: data})
    });
});


module.exports = router;