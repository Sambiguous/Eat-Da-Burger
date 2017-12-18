var express = require("express");
var burger = require("./../models/burger.js");

var router = express.Router();


router.get("/", function(req, res){
    burger.allBurgers(function(result){

        let data = {
            burgers: result
        }

        //console.log(data);

        let devoured = 0;
        let undevoured = 0;

        // read the devoured status of all of the burgers in the database and increment the appropriate counter;
        for(i in result){
            if(result[i].devoured === 1){
                devoured ++;
            } else{
                undevoured ++;
            }
        }
        
        // add two properties to the 'data' object that are booleans based on the devoured status of all of the burgers
        // handlebars uses these booleans to render the appropriate partials
        data.allDevoured = undevoured === 0;
        data.noneDevoured = devoured === 0;

        res.render("index", data);
    });
});

router.post("/newburger", function(req, res){

    let data = {
        burger_name: req.body.name
    };

    burger.addBurger(data, function(result){
        console.log(result);

        // burger.allBurgers(function(result){
        //     console.log(result);
        //     let data = {
        //         burgers: result
        //     }
    
        //     let devoured = 0;
        //     let undevoured = 0;
    
        //     // read the devoured status of all of the burgers in the database and increment the appropriate counter;
        //     for(i in result){
        //         if(result[i].devoured === 1){
        //             devoured ++;
        //         } else{
        //             undevoured ++;
        //         }
        //     }
            
        //     // add two properties to the 'data' object that are booleans based on the devoured status of all of the burgers
        //     // handlebars uses these booleans to render the appropriate partials
        //     data.allDevoured = undevoured === 0;
        //     data.noneDevoured = devoured === 0;
    
        //     res.render("index", data);
        // })


        res.redirect("/")


    });
});

router.put("/:devoured/:id", function(req, res) {

    let data = {
        id: req.params.id,
        devoured: req.params.devoured
    };

    burger.devourBurger(data, function(result){
        //console.log(result);
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res){
    let data = {
        id: req.params.id
    };

    burger.deleteBurger(data, function(result){
        //console.log(result);
        res.redirect("/");
    });
});



module.exports = router;