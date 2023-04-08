import { Link, } from "react-router-dom"

const NavUsername = ({ user, userInfo }) => {
  console.log(userInfo)
  return user ? (
    <li className='p-4 text-white'><Link to="/editProfile">Hello {userInfo.userName}</Link></li>
  ) : (
    <li className='p-4 hover:text-purple-500'><Link to="/login"></Link></li>
  )
}

export default NavUsername