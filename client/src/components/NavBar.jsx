import {React, useState }from 'react'
import { Link, NavLink } from "react-router-dom"
import LoginButton from './Logout'
import NavUsername from './NavUsername'
import Dropdown from './Dropdown'

const NavBar = ({ user, userInfo, handleLogOut}) =>  {
  const [nav, setNav] = useState(false)
  let userOptions
  if (user) {
  userOptions = (
    <nav>
    <div className='flex justify-between bg-[#512a71] items-center h-16 max-w-[screen] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-align:left text-white'>PAWA.</h1>
      <ul className='hidden md:flex'>
        <NavUsername user={user} />
        {/* <li><Dropdown /></li> */}
        <li className='p-4 hover:text-purple-500'><Link to="/dashboard">DashBoard</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/plan">Plans</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/workout">Workouts</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/profilePage">Profile</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/editProfile">Edit</Link></li>
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
        <LoginButton user={user} handleLogOut={handleLogOut} />
        <NavUsername user={user} />
        <li className='p-4 hover:text-purple-500'><Link to="/home">Home</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/plan">Plans</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="/workout">Workouts</Link></li>
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