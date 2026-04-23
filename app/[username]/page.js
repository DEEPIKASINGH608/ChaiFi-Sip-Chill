import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      {params.username}
      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[350]' src="/patreon_banner.gif" alt="" />
        <div className='absolute -bottom-14 right-[50%] border-white border'>
          <img width={115} height={115} src="https://www.vecteezy.com/free-photos/cute-baby-cat" alt="" />
        </div>
      </div>
    </>
  )
}

export default Username





