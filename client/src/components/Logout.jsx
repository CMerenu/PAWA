import { Link, } from "react-router-dom"

const LoginButton = ({ user, handleLogOut }) => {



  return user ? (
    <li className='p-4 hover:text-purple-500' onClick={handleLogOut}><Link to="/">Log Out</Link></li>
  ) : (
    <li className='p-4 hover:text-purple-500'><Link to="/login">Login</Link></li>
  )
}

export default LoginButton
// sign out button