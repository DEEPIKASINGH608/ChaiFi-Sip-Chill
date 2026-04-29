import React from 'react'

export default async function Username({ params }) {
  const { username } = await params;

  return (
    <div className='bg-[#000d1a] min-h-screen text-white'>
      {/* Banner Section */}
      <div className='cover w-full relative'>
        <img
          className='object-cover w-full h-[360px]'
          src="/patreon_banner.gif"
          alt="Banner"
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#000d1a]'></div>
      </div>

      {/* Profile Section */}
      <div className='info flex flex-col items-center mt-[-60px] pb-32 relative z-10'>
        <div className='relative'>
          <img
            className='rounded-full h-[100px] w-[100px] border-4 border-[#000d1a] object-cover bg-black shadow-xl'
            src="/cat.jpg"
            alt="Profile"
          />
        </div>

        <div className='gap-1 mt-4 flex flex-col items-center text-center px-4'>
          <div className='font-bold text-2xl tracking-tight'>
            @{username}
          </div>
          <div className='text-slate-400 text-sm max-w-lg'>
            Creating Animated art for VTT's
          </div>
          <div className='text-cyan-500 text-xs font-medium mt-1 uppercase tracking-widest'>
            9,917 patrons • $29,000 per month
          </div>
        </div>



        <div className="payment flex flex-col md:flex-row gap-6 w-1/2 lg:w-[60%] mt-10">

          {/* Supporters Section*/}
          <div className="supporters w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl min-h-[300px]">
            <h2 className='text-lg font-bold mb-6 border-b border-white/10 pb-3'>
              Supporters
            </h2>

            <ul className='text-slate-300 text-lg space-y-4'>
              <li className="flex flex-col">
                <div className="flex items-center gap-2"> {/* Added flex container for alignment */}
                  <img
                    src="avatar4.png"
                    alt=""
                    className='rounded-full size-8 object-cover border border-white/20' // Fixed size here
                  />
                  <span className="font-bold text-cyan-400 text-base">Shubham</span>
                </div>
                <span className="text-slate-500 italic mt-1 text-sm pl-10"> Subham donated $20! with a message "Keep up the great work!"
                </span>
              </li>

              <li className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img
                    src="avatar3.png"
                    alt=""
                    className='rounded-full size-8 object-cover border border-white/20' // Fixed size here
                  />
                  <span className="font-bold text-cyan-400 text-base">Jane Smith</span>
                </div>
                <span className="text-slate-500 italic mt-1 text-sm pl-10"> Jane donated $50! with a message
                  "Your art is amazing! Can't wait to see more!"
                </span>
              </li>
            </ul>
          </div>

          {/* Make Payment Section */}
          <div className="makePayment w-1/2 bg-gradient-to-br from-[#1e2d44] to-[#121b28] border border-white/10 p-6 rounded-2xl min-h-[300px] shadow-2xl">
            <h2 className="text-lg font-bold mb-4 tracking-tight">Make a Payment</h2>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full p-3 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 outline-none transition-all"
              />

              {/* Fixed Section: Added w-full to ensure the flex container stays inside the parent */}
              <div className="flex gap-2 w-full">
                <input
                  type="number"
                  placeholder="Amount"
                  className="min-w-0 flex-1 p-3 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 outline-none transition-all"
                />
                <button className="whitespace-nowrap bg-gradient-to-r from-purple-600 to-blue-600 hover:brightness-110 text-white text-sm font-bold py-2 px-6 rounded-lg transition-all shadow-lg active:scale-95">
                  Pay
                </button>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 mt-1">
                {['$10', '$20', '$30'].map((amt) => (
                  <button key={amt} className="flex-1 min-w-[60px] p-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    {amt}
                  </button>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}





