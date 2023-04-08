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
import WorkoutDetails from './pages/WorkoutDetails'
import PlanDetails from './pages/PlanDetails'
import { useState, useEffect } from 'react'
import { CheckSession } from '../src/services/Auth'
import Client from './services/api'
import WorkoutsByPlanId from './pages/Workouts'

function App() {
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState({})
  const [plans, setPlans] = useState([])
  const [workouts, setWorkouts] = useState([])

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

  const getAllPlans = async () => {
    try {
      const res = await Client.get('/plan/get_plans')
      setPlans(res.data)
    } catch (error) {
      throw error
    }
  }
  const getAllWorkouts = async () => {
    try {
      const res = await Client.get('/workout/find_workouts')
      setWorkouts(res.data)
    } catch (error) {
      throw error
    }
  }
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
          <Route
            path="workouts/:id"
            element={
              <WorkoutsByPlanId
                user={user}
                getAllWorkouts={getAllWorkouts}
                userInfo={userInfo}
                workouts={workouts}
                setWorkouts={setWorkouts}
              />
            }
          />
          <Route
            path="plan"
            element={
              <Plan
                user={user}
                getAllPlans={getAllPlans}
                plans={plans}
                setPlans={setPlans}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="/workoutDetails/:id"
            element={<WorkoutDetails user={user} userInfo={userInfo} />}
          />
          <Route
            path="/planDetails/:id"
            element={
              <PlanDetails
                user={user}
                getAllPlans={getAllPlans}
                plans={plans}
                setPlans={setPlans}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="/addWorkout/:id"
            element={
              <AddWorkout
                user={user}
                getAllPlans={getAllPlans}
                plans={plans}
                setPlans={setPlans}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="updateWorkout/:id"
            element={
              <UpdateWorkout
                user={user}
                getAllPlans={getAllPlans}
                plans={plans}
                setPlans={setPlans}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="addPlan"
            element={<AddPlan user={user} userInfo={userInfo} />}
          />
          <Route
            path="/updatePlan/:id"
            element={<UpdatePlan user={user} userInfo={userInfo} />}
          />
          <Route
            path="dashboard"
            element={<DashBoard userInfo={userInfo} user={user} />}
          />
          <Route
            path="editProfile"
            element={
              <EditProfile
                userInfo={userInfo}
                user={user}
                handleLogOut={handleLogOut}
              />
            }
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
