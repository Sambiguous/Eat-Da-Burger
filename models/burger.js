var orm = require("./../config/orm.js");


var burger = {
    allBurgers: function(cb){
        orm.selectAll("burgers", cb)
    },
    addBurger: function(data, cb){
        orm.insertOne("burgers", data, cb);
    }, 
    devourBurger: function(data, cb){
        orm.updateOne("table", data, cb);
    }
}

module.exports = burger;