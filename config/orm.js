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
    updateOne: function(table, data, cb){
        let sql = "UPDATE ? SET ?? = ?, ?? = ?;";

        connection.query(sql, [table, data], function(err, result){
            if(err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;