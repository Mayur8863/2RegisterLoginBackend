const mongoose= require("mongoose");

const loginSchema = new mongoose.Schema({
    emailId : String,
    password: String
})

module.exports = mongoose.model('loginDetail',loginSchema);