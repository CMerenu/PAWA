import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Client from '../services/api'
import { useParams } from 'react-router-dom'

const WorkoutsByPlanId = ({ user, userInfo }) => {
  let { id } = useParams()
  console.log(id)
  let navigate = useNavigate()

  const [workouts, setWorkouts] = useState([])

  const getWorkoutsByPlan = async () => {
    const res = await Client.get(`workout/find_workouts/by_planId/${id}`)
    setWorkouts(res.data)
  }
  console.log(workouts)

  useEffect(() => {
    getWorkoutsByPlan()
  }, [user])

  return user ? (
    <div className="h-full">
      <div className="grid grid-cols-1 py-9 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <Link to={`/workoutDetails/${workout.id}`} key={workout.id}>
            <div
              className="flex-nowrap bg-white hover:shadow-lg hover:scale-105 rounded-lg shadow-md py-5 w-100 lg:flex"
              key={workout.id}
            >
              <div className="">
                <img className="flex px-4" src={workout.image} alt="Workout" />
                <h3>{workout.name}</h3>
                <h4>{workout.muscleGroup}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-purple-700 font-bold hover:bg-purple-500 w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-white justify-self-center">
        <Link to={`addWorkout/${id}`}>Add Workout</Link>
      </button>
    </div>
  ) : (
    <div className="h-[40rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div className="flex-nowrap py-5 w-100 lg:flex " key={workout.id}>
            <div className="">
              <img className="flex px-4" src={workout.image} alt="Workout" />
              <h3>{workout.name}</h3>
              <h4>{workout.muscleGroup}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutsByPlanId
