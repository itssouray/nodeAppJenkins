const mongoose = require("mongoose");

// awsDbUserAlex
// aws-alex

const connect = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://aws-alex:awsDbUserAlex@cluster0.aub0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB connected successfully!");
    } catch (error) {
        console.log("Something went wrong while connecting to DB",error.message);
    }
};

module.exports = connect;