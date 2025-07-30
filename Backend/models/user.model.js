import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullName: {
        firstName:{
        type: String,
        required: true,
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [20, "First name must be at most 20 characters long"]
    },
    lastName:{
        type: String,
        maxlength: [20, "Last name must be at most 20 characters long"]
    },
    },
    
    email: {
        type: String,
        required: true,
        unique: true,   
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        select: false // Exclude password from queries by default
    },
    socketId: {
        type: String,
    },
},{timestamps: true // Automatically manage createdAt and updatedAt fields
});

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ 
        _id: this._id,
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '1h' });
    return token;
};

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};



export const User = mongoose.model("User", userSchema);