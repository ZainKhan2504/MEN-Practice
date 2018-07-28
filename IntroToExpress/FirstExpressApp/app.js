var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/",function(req, res){
    res.send("Hello Zain");
});

// "/bye" => "Goodbye"
app.get("/:bye",function(req, res){
    var bye = req.params.bye;
   res.send("Good Bye"+bye.toUpperCase()); 
});

// "*" => "Any Thing"
app.get("*",function(req, res){
    res.send("Anything");
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});