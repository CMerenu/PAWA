import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { updateWorkout } from '../services/WorkoutServices'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const WorkoutDetails = ({ user, userInfo }) => {
  let { id } = useParams()

  let navigate = useNavigate()

  const [workoutDetails, setWorkoutDetails] = useState()
  const [planDetails, setPlanDetails] = useState()

  const getWorkoutDetails = async () => {
    const res = await Client.get(`workout/find_workout/${id}`)
    console.log(res)
    setWorkoutDetails(res.data)
  }

  console.log(workoutDetails)
  console.log(user)
  console.log(userInfo)

  const deleteWorkout = async (event, id) => {
    const res = await Client.delete(`/workout/delete_workout/${id}`)
    console.log(res)
    window.alert('Success! Workout was deleted')
    navigate('/dashboard')
  }

  useEffect(() => {
    getWorkoutDetails()
    // getPlanDetails()
  }, [user])
  if (workoutDetails)
    return (
      <div className="min-h-screen ">
        {user && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4"></h1>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 lg:w-1/3 mr-4 mb-4">
                  <img
                    src={workoutDetails?.image}
                    alt="post"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                    <p className="text-gray-700 font-bold mb-2">
                      <span className="text-purple-500">Name: </span>
                      {workoutDetails?.name}
                    </p>
                  </div>
                  <div className="mt-2 space-x-2">
                    <Link to={`/updateWorkout/${id}`} key={id}>
                      <button className="bg-blue-700 p-2 text-white font-bold px-2 rounded-lg shadow-md mt-4 my-3 py-3 hover:bg-blue-500">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-700 p-2 font-bold text-white sp-2 rounded-lg shadow-md mt-4 my-3 px-2 py-3 hover:bg-red-500"
                      onClick={(event) => deleteWorkout(event, id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="md:w-3/4 lg:w-2/3 mt-4 md:mt-0 py-3 space-y-5">
                  <div className="bg-white p-6 rounded-lg shadow-md lg:w-2/3 mt-4 md:mt-0">
                    <p className="text-gray-700 font-bold mb-2">
                      <span className="text-purple-500">Muscle Group: </span>{' '}
                      {workoutDetails?.muscleGroup}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md h-3/5 lg:w-2/3 mt-4 md:mt-0">
                    <p className="text-gray-700 font-bold mb-2 ">
                      <span className="text-purple-500">Description: </span>{' '}
                      {workoutDetails?.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}
export default WorkoutDetails
