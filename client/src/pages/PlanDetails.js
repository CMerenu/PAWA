import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { updatePlan } from '../services/WorkoutServices'
import { useNavigate } from 'react-router-dom'

const PlanDetails = ({ user }) => {
  let [id] = useParams()

  let navigate = useNavigate()

  let initialState = {
    name: '',
    goal: '',
    content: '',
    image: ''
  }

  const [results, setResults] = useState(null)
  const [planDetails, setPlanDetails] = useState()
  const [formValues, setFormValues] = useState(initialState)

  const getPlanDetails = async (e, planId) => {
    const res = await Client.get(`/plan/by_id/${planId}`)
    setPlanDetails(res.data)
  }
  // const

  const handleSubmit = async (e) => {
    e.preventDefault()
    const details = {
      name: formValues.name,
      goal: formValues.goal,
      content: formValues.content,
      image: formValues.image,
      userId: id
    }
    await updatePlan(details)
    setFormValues(initialState)
    navigate('/plan')
    alert('Plan Updated!!')
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  return user ? (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formValues.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formValues.userName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-[#e57626] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e99253] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div></div>
  )
}
export default PlanDetails
