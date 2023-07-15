// mongoose is a library used to connect backend to the database:(MongoDB)
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const mongoUrl = process.env.MONGOURL;//fetch the URL from config.env
const User = require("./models/Users");
try {
  //connect to cloud database
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log(error);
}
// create a new entry :: -->instance of user
const user = new User({
  email: "parasverma@gmail.com",
  password: "paras",
});
//save the entry to db
user.save().then(() => {
  console.log("data saved to database");
});
