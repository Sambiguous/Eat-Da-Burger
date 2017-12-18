var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        var sql = "SELECT * FROM ??";
        connection.query(sql, table, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    insertOne: function(table, data, cb){
        let sql = "INSERT INTO ?? VALUES(?)";

        connection.query(sql, [table, data], function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    // even though this function will only ever be used on the burgers table, I made it
    // able to handle any number column named and values because why not?
    updateOne: function(table, data, cb){
        let keyList = Object.keys(data);
        
        let sql = "UPDATE ?? SET ";
        let paramList = [table];
            
            for(var i = 0; i < keyList.length; i++){
                if(keyList[i] !== "id"){
        
                    sql += i < keyList.length - 1 ? "?? = ?, " : "?? = ?";
                    paramList.push(keyList[i]);
                    paramList.push(data[keyList[i]]);
                };
            };
            
            sql += " WHERE ?? = ?;";
        
            paramList.push("id");
            paramList.push(data.id);

            console.log(paramList);
            console.log(sql);


        connection.query(sql, paramList, function(err, result){
            if(err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;