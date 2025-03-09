const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName :{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    }
});

const User = mongoose.model("User",userSchema);

module.exports = User;