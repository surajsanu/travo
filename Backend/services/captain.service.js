import { Captain } from "../models/captain.model.js";



export const createCaptain = async ({
    firstName, lastName, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = new Captain({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    await captain.save();

    return captain;
}