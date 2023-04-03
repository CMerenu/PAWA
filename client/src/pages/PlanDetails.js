import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PlanDetails = ({ user, userInfo }) => {
  let { id } = useParams()

  let navigate = useNavigate()

  const [results, setResults] = useState(null)
  const [planDetails, setPlanDetails] = useState()

  const getPlanDetails = async () => {
    const res = await Client.get(`plan/by_id/${id}`)
    console.log(res)
    setPlanDetails(res.data)
  }
  console.log(planDetails)

  useEffect(() => {
    getPlanDetails()
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
                  src={planDetails?.image}
                  alt="post"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                  <p className="text-gray-700 font-bold mb-2">
                    Plan Name:{planDetails?.name}
                  </p>
                </div>
              </div>
              <button className="bg-white p-2 rounded-sm shadow-md mt-4">
                Add Plan to DashBoard
              </button>
              <Link to={`/updatePlan/${planDetails.id}`} key={planDetails.id}>
                <button className="bg-white p-2 rounded-sm shadow-md mt-4">
                  Update Plan
                </button>
              </Link>
              <div className="md:w-1/2 lg:w-2/3 mt-4 md:mt-0"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default PlanDetails
