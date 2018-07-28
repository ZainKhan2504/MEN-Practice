// =================
// References Object
// =================

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user")

// // Create User
// User.create({
//   email: "zainalikhan2504@gmail.com",
//   name: "Zain Khan"
// });

// Create Post
Post.create({
  title: "How to cook best Nihari",
  content: "Its not Tasty!"
}, function(err,post){
    if(err){
        console.log(err);
    }
    else{
        User.findOne({email: "zainalikhan2504@gmail.com"}, function(err,user){
      if (err) {
          console.log(err);
      } else {
          user.posts.push(post);
          user.save(function(err, data){
              if (err) {
                  console.log(err);
              }
              else{
                  console.log(data);
              }
          })
      } 
    });    
    }
});

// // Find User
// // Find all post aswell
// User.findOne({email: "zainalikhan2504@gmail.com"}).populate("posts").exec(function(err, user){
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(user);
//   } 
// });