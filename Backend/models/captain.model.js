import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
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

     status: {
        type: String,
        enum: [ 'active', 'inactive' ],
        default: 'inactive',
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [ 3, 'Color must be at least 3 characters long' ],
        },
        plate: {
            type: String,
            required: true,
            minlength: [ 3, 'Plate must be at least 3 characters long' ],
        },
        capacity: {
            type: Number,
            required: true,
            min: [ 1, 'Capacity must be at least 1' ],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: [ 'car', 'motorcycle', 'auto' ],
        }
    },

    location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }

},{timestamps : true})

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ 
        _id: this._id,
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '24h' });
    return token;
};

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


export const Captain = mongoose.model("Captain",captainSchema);