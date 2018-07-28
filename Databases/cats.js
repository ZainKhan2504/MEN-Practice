// mongoose is Object Data Model ODM
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temprament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding cat to db
// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temprament: "Evil"
// });

// george.save(function(err, cat){
//     if (err) {
//         console.log("Something Went Wrong");
//     }
//     else{
//         console.log("We just saved a cat to the db");
//         console.log(cat);
//     }
// });

//retrieving cat from db
Cat.find({}, function(err, cats){
   if (err) {
       console.log("Oh no, Its Error");
       console.log(err);
   } 
   else{
       console.log("All Cats Are:");
       console.log(cats);
   }
});