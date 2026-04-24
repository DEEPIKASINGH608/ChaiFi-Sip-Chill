import React from 'react'

const Username = async ({ params }) => {
  // In Next.js 15+, params is a Promise that MUST be awaited
  const { username } = await params;

  return (
    <>
      {/* Banner Section */}
      <div className='cover w-full relative'>
        <img
          className='object-cover w-full h-[360px]'
          src="/patreon_banner.gif"
          alt="Banner"
        />
      </div>

      {/* Profile Section */}
      <div className='info flex flex-col items-center mt-[-40px] pb-32 relative z-10'>
        {/* Profile Image - Smaller, Moved Up, No clipping */}
        <div className='relative'>
          <img
            className='rounded-full h-[60px] w-[60px] border-white border-2 object-cover bg-black'
            src="/cat.jpg"
            alt="Profile"
          />
        </div>

        {/* Displaying Username */}
        <div className=' info gap-2 mt-4 text-lg flex-col items-center text-center'>
          <div className='font-bold text-lg'>
            @{username}
          </div>

          <div className='text-slate-400'>
            Creating Animated art for VTT's
            <div className='text-slate-400'>
              9,917 patrons posting $29,000 per month
            </div>
            <div className="payment flex gap-3">
              <div className="supporters">
                {/* Show list of all supporters as a leaderboard with their profile picture, username, and amount pledged. Sort by highest pledge or most recent supporters.*/}
                <ul>
                  <li className='flex items-center gap-2'>
                    <img
                      className='rounded-full h-[30px] w-[30px] border-white border-2 object-cover bg-black'
                      src="/default-profile.jpg"
                      alt="Supporter"
                    />
                    <div className='text-sm'>
                      <div className='font-medium'>@supporter1</div>
                      <div className='text-slate-400'>$10.00</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="makePayment">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Ensure this is the ONLY export in the file
export default Username;




