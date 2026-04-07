import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-980 text-white text-center p-4 h-16 mt-auto'>
        <p className='text-sm text-gray-400 bg-black'>
            &copy; {new Date().getFullYear()} ChaiFi. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer






