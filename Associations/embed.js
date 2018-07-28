// =================
// Embedded Object
// =================

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// Post
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);

// User
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// // Create User
// var newUser = new User({
//   email: "sameeralikhan0908@gmail.com",
//   name: "Sameer Khan"
// });

// newUser.posts.push({
//   title: "How to be polyjuice",
//   content: "Just kidding. Go to potions class to learn it"
// });
// // Adding user to DB
// newUser.save(function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// // Create Post
// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious"
// });
// // Adding post to DB
// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Retrieving User
User.findOne({name: "Sameer Khan"}, function(err, user){
   if (err) {
    //   console.log(err);
   } else {
        user.posts.push({
        title: "3 things i really hate",
        content: "Voldemort. Voldemort. Voldemort."
        });
        user.save(function (err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        })
   } 
});