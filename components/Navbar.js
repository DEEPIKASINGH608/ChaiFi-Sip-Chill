import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-980 text-white flex items-center justify-between p-4'>
      <div className="logo font-bold text-lg">ChaiFi</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>

    </nav>
  )
}

export default Navbar


