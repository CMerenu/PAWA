import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { updateWorkout } from '../services/WorkoutServices'
import { useNavigate } from 'react-router-dom'

const WorkoutDetails = ({ user, userInfo }) => {
  let { id } = useParams()

  let navigate = useNavigate()

  const [workoutDetails, setWorkoutDetails] = useState()

  const getWorkoutDetails = async () => {
    const res = await Client.get(`workout/find_workout/${id}`)
    console.log(res)
    setWorkoutDetails(res.data)
  }
  console.log(workoutDetails)
  console.log(user)
  console.log(userInfo)
  useEffect(() => {
    getWorkoutDetails()
  }, [user])
  return (
    <div className="min-h-screen bg-gray-100">
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
                  <p className="text-gray-700 font-bold text-xl mb-2">
                    Muscle: {workoutDetails.muscleGroup}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                  <p className="text-gray-700 font-bold mb-2">
                    {workoutDetails.content}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-2/3 mt-4 md:mt-0">
                {/* <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Comments</h3>
                  {workoutDetails.comments.map((comment) => (
                    <div className="flex mb-4" key={comment.id}>
                      <div className="flex-1">
                        <p className="text-gray-700">{comment.content}</p>
                        {user?.id === comment?.userId && (
                          <div className="mt-2">
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                              // onClick={(e) => deleteComment(e, comment.id)}
                            >
                              Delete
                            </button>
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                              // onClick={(e) => clicky(e, comment.id)}
                            >
                              Update
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default WorkoutDetails
