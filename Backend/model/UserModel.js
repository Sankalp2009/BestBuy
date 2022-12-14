const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    first_Name:String,
    last_Name:String,
    email:  String,
    password: String,
    confirm:  String ,
    mobile_Number: Number,
    
})

const User = mongoose.model("User", UserSchema)
module.exports = {
    User
}