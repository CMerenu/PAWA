import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { pushPlan } from '../services/WorkoutServices'
import AddWork from '../components/AddWork'

const PlanDetails = ({ user, userInfo }) => {
  let { id } = useParams()
  console.log(id)
  let navigate = useNavigate()

  // const [results, setResults] = useState(null)
  const [planDetails, setPlanDetails] = useState()
  const [workouts, setWorkouts] = useState()

  const getPlanDetails = async () => {
    const res = await Client.get(`plan/by_id/${id}`)
    console.log(res)
    setPlanDetails(res.data)
  }

  const getWorkoutByPlan = async () => {
    const work = await Client.get(`/workout/find_workouts/by_planId/${id}`)
    console.log(work)
    setWorkouts(work.data)
  }

  console.log(planDetails)

  const deletePlan = async (event, id) => {
    const deleted = await Client.delete(`/plan/delete_plan/${id}`)
    window.alert('Success! Plan was deleted')
    navigate('/plans')
  }
  useEffect(() => {
    getPlanDetails()
    getWorkoutByPlan()
  }, [user])

  if (planDetails)
    return (
      <div className="min-h-screen ">
        {user && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4"></h1>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 lg:w-1/2 mr-4 mb-4">
                  <img
                    src={planDetails?.image}
                    alt="post"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                    <p className="text-gray-700 font-bold mb-2">
                      {planDetails?.name}
                    </p>
                  </div>
                  <div>
                    <div className="">
                      <button
                        onClick={() => pushPlan(userInfo.id, planDetails.id)}
                        className="bg-white p-2 rounded-sm shadow-md mt-4"
                      >
                        Add Plan!
                      </button>
                    </div>
                    <Link to={`/updatePlan/${id}`} key={id}>
                      <button className="bg-white p-2 rounded-sm shadow-md mt-4 my-3">
                        Update Plan
                      </button>
                    </Link>
                    <button
                      className="bg-red-700 text-white sp-2 rounded-sm shadow-md mt-4 my-3"
                      onClick={(event) => deletePlan(event, id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-2/3 mt-4 md:mt-0"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 py-9 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <h2>Workouts!</h2>
              {workouts?.map((workout) => (
                <Link to={`/workoutDetails/${workout.id}`} key={workout.id}>
                  <div
                    className="flex-nowrap bg-white hover:shadow-lg hover:scale-105 rounded-lg shadow-md py-5 w-100 lg:flex"
                    key={workout.id}
                  >
                    <div>
                      <img
                        className="flex px-4 rounded"
                        src={workout.image}
                        alt="workout"
                      />
                      <h3 className="font-bold uppercase">{workout.name}</h3>
                      <p className="font-medium">{workout.content}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <AddWork />
      </div>
    )
}
export default PlanDetails
