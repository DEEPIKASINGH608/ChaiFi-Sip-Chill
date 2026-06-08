"use server"

import Razorpay from "razorpay";
import Payment from "../models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, username, paymentformData) => {
    await connectDB()
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET || process.env.RAZORPAY_KEY_SECRET,
    });

    const amountInPaise = Number.parseInt(amount) * 100;

    let options = {
        amount: amountInPaise,
        currency: "INR",
    }
    try {
        let x = await instance.orders.create(options)

        await Payment.create({
            oid: x.id,
            amount: Number.parseInt(amount),
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
    if (!u) return null;
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
        await connectDB();

        if (oldusername !== data.username) {
            const existingUser = await User.findOne({ username: data.username });
            if (existingUser) {
                return { success: false, message: "Username is already taken!" };
            }
        }

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

