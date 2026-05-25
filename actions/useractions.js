"use server"

import Razorpay from "razorpay";
import Payment from "../models/Payment";
import connectDB from "../utils/connectDB";
import User from "../models/User";

export const initiate = async (amount, username, paymentformData) => {
    await connectDB()

    // FIX: Initialize the missing 'instance' using your environment variables
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    let options = {
        amount: Number.parseInt(amount) * 100, // Amount in paise
        currency: "INR",
    }

    // This will now successfully authenticate without throwing a 401
    let x = await instance.orders.create(options)

    // Create a payment object which shows pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount,
        to_username: username,
        name: paymentformData.name,
        message: paymentformData.message
    })

    return x
}



