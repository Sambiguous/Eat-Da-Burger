var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Set public directory so that server may send files within it
app.use(express.static("public"));

// I don't know that this line does
app.use(bodyParser.urlencoded({extended: false}));

// Override POST method if it contains ?_method
app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

// Set the default layout to main.handlbars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routs and give server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("Server listening in port:", PORT);
});