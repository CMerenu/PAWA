import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { pushPlan } from '../services/WorkoutServices'

const PlanDetails = ({ user, userInfo }) => {
  let { id } = useParams()

  let navigate = useNavigate()

  const [results, setResults] = useState(null)
  const [planDetails, setPlanDetails] = useState()

  const getPlanDetails = async () => {
    const res = await Client.get(`/plan/by_id/${id}`)
    console.log(res)
    setPlanDetails(res.data)
  }

  console.log(planDetails)

  const deletePlan = async (planId) => {
    const deleted = await Client.delete(`/plan/delete_plan/${planId}`)
    navigate('/plans')
    console.log(deleted)
  }
  useEffect(() => {
    getPlanDetails()
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
                    <Link
                      to={`/updatePlan/${planDetails.id}`}
                      key={planDetails.id}
                    >
                      <button className="bg-white p-2 rounded-sm shadow-md mt-4 my-3">
                        Update Plan
                      </button>
                    </Link>
                    <button
                      className="bg-red-700 text-white sp-2 rounded-sm shadow-md mt-4 my-3"
                      onClick={() => deletePlan(planDetails.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-2/3 mt-4 md:mt-0"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}
export default PlanDetails
