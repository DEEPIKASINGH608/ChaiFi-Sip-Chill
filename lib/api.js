"use server"

import Razorpay from "razorpay"
import connectDb from "@/db/connectDb"
import Payment from "@/models/Payment"
import User from "@/models/User"

export const initiate = async (amount, username, paymentformData) => {

    // 1. Establish Mongo connection inside the action lifecycle
    await connectDb();

    // 2. Fetch target user profile to look up custom keys
    let user = await User.findOne({ username: username });

    const razorpayKeyId = user?.razorpayid || process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = user?.razorpaysecret || process.env.RAZORPAY_KEY_SECRET;


    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    let options = {
        amount: Number(amount) * 100,
        currency: "INR",
    }

    let order = await instance.orders.create(options)

    // 4. Save a pending entry into your collections so your verification webhook knows what to look for
    await Payment.create({
        name: paymentformData.name || "Anonymous",
        to_user: username,
        oid: order.id,
        amount: Number(amount),
        message: paymentformData.message || "",
        done: false
    });

    return JSON.parse(JSON.stringify(order));
}
