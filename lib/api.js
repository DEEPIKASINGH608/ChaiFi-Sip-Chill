"use server"

import Razorpay from "razorpay"

export const initiate = async (amount, username, paymentformData) => {

    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    let options = {
        amount: Number(amount) * 100,
        currency: "INR",
    }

    let x = await instance.orders.create(options)
    return x;
}


