import {React, useState }from 'react'
import { Link } from "react-router-dom"
import LoginButton from './Login/Logout'

const NavBar = ({ user, userInfo, handleLogOut}) =>  {
  const [nav, setNav] = useState(false)
  let userOptions
  if (user) {
  userOptions = (
    <nav>
      <img src={userInfo.profilePicture} />
    <div className='flex justify-between bg-[#512a71] items-center h-16 max-w-[screen] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-align:left text-white'>PAWA.</h1>
      <ul className='hidden md:flex'>
        {/* <li className='p-4 hover:text-purple-500'><Link to="/login">Sign In</Link></li> */}
        {/* <li className='p-4 hover:text-purple-500'><Link to="/addWorkout">AddWorkout</Link></li> */}

        <li className='p-4 hover:text-purple-500'><Link to="/dashboard">DashBoard</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/plan">Plans</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/workout">Workouts</Link></li>

        <li className='p-4 hover:text-purple-500'><Link to="/updateWorkout">Update Workout</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/updatePlan">Update Plan</Link></li>
        {/* <li className='p-4 hover:text-purple-500'><Link to="/home">Home</Link></li> */}
        <li className='p-4 hover:text-purple-500'><Link to="/profilePage">Profile Page</Link></li>
        {/* <li className='p-4 hover:text-purple-500'><Link to="/about">About</Link></li> */}
        <LoginButton user={user} handleLogOut={handleLogOut} />
      </ul>
    </div>
  </nav>
  )
}
const publicOptions = (
  <nav>
    <div className='flex justify-between bg-[#512a71] items-center h-16 max-w-[screen] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-align:left text-white'>PAWA.</h1>
      <ul className='hidden md:flex'>
        {/* <li className='p-4 hover:text-purple-500'><Link to="/register">Register Profile</Link></li> */}
        <LoginButton user={user} handleLogOut={handleLogOut} />
        {/* <li className='p-4 hover:text-purple-500'><Link to="/addWorkout">AddWorkout</Link></li> */}
        {/* <li className='p-4 hover:text-purple-500'><Link to="/updateWorkout">Update Workout</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/addPlan">Add Plan</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/updatePlan">Update Plan</Link></li> */}
        {/* <li className='p-4 hover:text-purple-500'><Link to="/dashboard">DashBoard</Link></li> */}
        {/* <li className='p-4 hover:text-purple-500'><Link to="/editProfile">Edit Profile</Link></li> */}
        <li className='p-4 hover:text-purple-500'><Link to="/home">Home</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/plan">Plans</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/workout">Workouts</Link></li>
        {/* <li className='p-4 hover:text-purple-500'><Link to="/profilePage">ProfilePage</Link></li> */}
        <li className='p-4 hover:text-purple-500'><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
)

return (
  <header>
    {user ? userOptions : publicOptions }
  </header>
)
}

export default NavBar