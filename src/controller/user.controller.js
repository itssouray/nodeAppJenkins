const User = require("../model/User");

const createUser = async (req,res)=>{
    try {
        const {fullName,email,mobile} = req.body;

        if(!fullName || !email || !mobile){
            res.status(400).json({status:400,message:"All fields are required!"});
        }

        const user = await User({
            fullName,
            email,
            mobile
        });

        user.save();

        res.status(200).json({status:200,message:"New user created successfully!"});
    } catch (error) {
        console.log("Something went wrong while creating new user!",error.message);
        res.status(500);
    }
};


const getAllUser = async (req,res)=>{
    try {
        const user = await User.find();

        if(!user){
            res.status(404).json({status:404,message:"No user found!"});
        }

        res.status(200).json({status:200,user});
    } catch (error) {
        console.log("Something went wrong while fetching the user's!",error.message);
        res.status(500);
    }
};


module.exports = {
    createUser,
    getAllUser
};