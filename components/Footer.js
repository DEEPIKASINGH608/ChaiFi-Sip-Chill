import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#020617] border-b border-white/5 shadow-2xl text-center p-4 h-16 mt-auto'>
        <p className='text-sm text-gray-200'>
            &copy; {new Date().getFullYear()} ChaiFi. All rights reserved. | <a href="/privacy" className='text-blue-500 hover:underline'>Privacy Policy</a> | <a href="/terms" className='text-blue-500 hover:underline'>Terms of Service</a>
        </p>
    </footer>
  )
}

export default Footer



