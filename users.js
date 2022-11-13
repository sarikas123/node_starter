const mongoose = require("mongoose")
const userSchema = "user";
const User = mongoose.model(userSchema,{
    name : String,
    age : Number
});
module.exports = User;