import { Link, } from "react-router-dom"

const NavUsername = ({ user }) => {
  return user ? (
    <li className='p-4 text-white'><Link to="/profilePage">{user.userName}</Link></li>
  ) : (
    <li className='p-4 hover:text-purple-500'><Link to="/login"></Link></li>
  )
}

export default NavUsername