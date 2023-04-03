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
import Plan from './pages/Plan'
import Workout from './pages/Workouts'
import { useState, useEffect } from 'react'
import { CheckSession } from '../src/services/Auth'

function App() {
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState({})
  // const [planInfo, setPlanInfo;] = useState({})

  console.log(userInfo)

  const navigate = useNavigate()

  const checkToken = async () => {
    const userCS = await CheckSession()
    setUser(userCS)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/register')
  }
  return (
    <div className="App">
      <NavBar user={user} userInfo={userInfo} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="register" element={<RegisterProfile />} />
          <Route
            path="login"
            element={<Login setUser={setUser} setUserInfo={setUserInfo} />}
          />
          <Route path="workout" element={<Workout />} />
          <Route
            path="plan"
            element={<Plan user={user} userInfo={userInfo} />}
          />
          <Route path="addWorkout" element={<AddWorkout />} />
          <Route path="updateWorkout" element={<UpdateWorkout />} />
          <Route path="addPlan" element={<AddPlan userInfo={userInfo} />} />
          <Route path="updatePlan" element={<UpdatePlan />} />
          <Route
            path="dashboard"
            element={<DashBoard userInfo={userInfo} user={user} />}
          />
          <Route
            path="editProfile"
            element={<EditProfile userInfo={userInfo} user={user} />}
          />
          <Route path="home" element={<Home />} />
          <Route
            path="profilePage"
            element={
              <ProfilePage
                userInfo={userInfo}
                user={user}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
