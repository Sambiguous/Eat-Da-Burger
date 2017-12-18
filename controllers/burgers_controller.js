var express = require("express");
var burger = require("./../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.allBurgers(function(result){

        var data = {
            burgers: result
        }

        let devoured = 0;
        let undevoured = 0;

        for(i in result){
            if(result[i].devoured === 1){
                devoured ++;
            } else{
                undevoured ++;
            }
        }
        
        data.allDevoured = undevoured === 0;
        data.noneDevoured = devoured === 0;

        console.log(data);



        res.render("index", data);
    });
});

router.put("/:devoured/:id", function(req, res) {
    var data = {
        id: req.params.id,
        devoured: req.params.devoured
    }

  
    burger.devourBurger(data, function(result){
        res.redirect("/")
    });
});

module.exports = router;