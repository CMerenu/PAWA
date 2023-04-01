import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import RegisterProfile from './pages/Register'
import Login from './pages/LogIn'
import AddWorkout from './pages/AddWorkout'
import AddPlan from './pages/AddPlan'
import DashBoard from './pages/DashBoard'
import EditProfile from './pages/EditProfile'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import UpdateWorkout from './pages/UpdateWorkout'
import UpdatePlan from './pages/UpdatePlan'
// import { useState, useEffect } from 'react'
// import { CheckSession } from '../src/services/Auth'

function App() {
  // const [user, setUser] = useState(null)
  // const [userInfo, setUserInfo] = useState({})

  // console.log(userInfo)

  // const navigate = useNavigate()

  // const checkToken = async () => {
  //   const userCS = await CheckSession()
  //   setUser(userCS)
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     checkToken()
  //   }
  // }, [])

  // const handleLogOut = () => {
  //   setUser(null)
  //   localStorage.clear()
  //   navigate('/')

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="register" element={<RegisterProfile />} />
          <Route path="login" element={<Login />} />
          <Route path="addWorkout" element={<AddWorkout />} />
          <Route path="updateWorkout" element={<UpdateWorkout />} />
          <Route path="addPlan" element={<AddPlan />} />
          <Route path="updatePlan" element={<UpdatePlan />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="home" element={<Home />} />
          <Route path="profilePage" element={<ProfilePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
