import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
    <div className='flex justify-between bg-[#512a71] items-center h-16 max-w-[screen] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-align:left text-white'>PAWA.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-purple-500'><Link to="/register">Register Profile</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/login">Sign In</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/addWorkout">AddWorkout</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/updateWorkout">Update Workout</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/addPlan">Add Plan</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/updatePlan">Update Plan</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/dashboard">DashBoard</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/editProfile">Edit Profile</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/home">Home</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/profilePage">ProfilePage</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar