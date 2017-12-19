var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{
    connection = mysql.createConnection({
        hostname: "localhost",
        port: 3306,
        user: "root",
        password: "PO)(IU*&po09iu87",
        database: "burger_db"
    });
    
}

module.exports = connection;