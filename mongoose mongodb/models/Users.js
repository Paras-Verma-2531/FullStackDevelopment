const mongoose = require("mongoose");
//create user schems
const userSchema = mongoose.Schema({
  email: String,
  password: String,
});
module.exports = mongoose.model("user", userSchema);
