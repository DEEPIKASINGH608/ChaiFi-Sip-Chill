import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        {params.username}
      </div>

      <div className='cover w-full bg-red-50 relative'>
        {/* Added 'px' to the height and fixed the path if necessary */}
        <img
          className='object-cover w-full h-[360px]'
          src="/patreon_banner.gif"
          alt="Banner"
        />
        <div>
          <img src="" alt="" />
        </div>
      </div>

      <div className='cover'>
        {params.username}
      </div>
    </>
  )
}

export default Username

