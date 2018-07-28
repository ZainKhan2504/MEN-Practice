var express = require("express");
var app = express();


app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
   res.render("home");
});

app.get("/:name", function (req, res) {
   var name = req.params.name;
   res.render("about", {names: name});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been started");
});