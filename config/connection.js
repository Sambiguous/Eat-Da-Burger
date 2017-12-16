var mysql = require("mysql");

var connection = mysql.createConnection({
    hostname: "localhost",
    port: 3306,
    user: "root",
    password: "PO)(IU*&po09iu87",
    database: "burgers_db"
});

module.exports = connection;