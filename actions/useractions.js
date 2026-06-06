"use server"

import Razorpay from "razorpay";
import Payment from "../models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, username, paymentformData) => {
    await connectDB()
    var instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    let options = {
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
    }
    try {
        let x = await instance.orders.create(options)

        await Payment.create({
            oid: x.id,
            amount: amount/100,
            to_user: username,
            name: paymentformData.name,
            message: paymentformData.message
        });

        return x
    } catch (error) {
        console.error("Error initiating payment:", error);
        throw new Error("Failed to initiate payment");
    }
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = JSON.parse(JSON.stringify(u))
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).lean()
    return JSON.parse(JSON.stringify(p))
}


export const updateProfile = async (oldusername, data) => {
    try {
        // 1. Ensure database is connected
        await connectDB();

        // 2. Double check if the username is being changed, using the correct lowercase variable names
        if (oldusername !== data.username) {
            const existingUser = await User.findOne({ username: data.username });
            if (existingUser) {
                return { success: false, message: "Username is already taken!" };
            }
        }

        // 3. Find by the OLD username and update with the new data object values
        const updatedUser = await User.findOneAndUpdate(
            { username: oldusername },
            { $set: data },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return { success: false, message: "User profile not found in database." };
        }

        return {
            success: true,
            user: JSON.parse(JSON.stringify(updatedUser))
        };

    } catch (error) {
        console.error("Database Update Error:", error);
        throw new Error(error.message || "Failed to update profile due to an internal error.");
    }
}
