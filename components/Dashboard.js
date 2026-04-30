"use client"
import React, { useState } from 'react'

const Dashboard = () => {
    const [form, setForm] = useState({ name: "", email: "", username: "", profilepic: "", coverpic: "", razorpayid: "", razorpaysecret: "" })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='container mx-auto py-5 px-4 md:px-0'>
            <h1 className='text-center my-8 text-3xl font-bold'>Welcome to your Dashboard</h1>

            <div className='flex flex-col gap-4 max-w-2xl mx-auto'>
                {/* Name */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-sm font-semibold'>Name</label>
                    <input value={form.name} onChange={handleChange} name='name' type="text" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                    <input value={form.email} onChange={handleChange} name='email' type="email" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* Username */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username" className='text-sm font-semibold'>Username</label>
                    <input value={form.username} onChange={handleChange} name='username' type="text" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* Profile Picture */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="profilepic" className='text-sm font-semibold'>Profile Picture</label>
                    <input value={form.profilepic} onChange={handleChange} name='profilepic' type="text" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* Cover Picture */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="coverpic" className='text-sm font-semibold'>Cover Picture</label>
                    <input value={form.coverpic} onChange={handleChange} name='coverpic' type="text" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* Razorpay Credentials */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="razorpayid" className='text-sm font-semibold'>Razorpay Id</label>
                    <input value={form.razorpayid} onChange={handleChange} name='razorpayid' type="text" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="razorpaysecret" className='text-sm font-semibold'>Razorpay Secret</label>
                    <input value={form.razorpaysecret} onChange={handleChange} name='razorpaysecret' type="password" className='w-full p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* Save Button */}
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4 transition-all'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Dashboard


