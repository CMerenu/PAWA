import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import React from 'react'
import { updatePlan } from '../services/WorkoutServices'

const UpdatePlan = ({ plans, user, userInfo }) => {
  const userId = userInfo.id
  let { id } = useParams()
  const planId = id
  // console.log(planId)
  // console.log(userId)
  let navigate = useNavigate()
  let initialState = {
    name: '',
    goal: '',
    content: '',
    image: ''
  }

  const [formValues, setFormValues] = useState(initialState)
  const update = async (data) => {
    const ret = await Client.put(`/plan/update_plan/by_id/${id}`, data)
  }

  const getPlanById = async () => {
    const res = await Client.get(`/plan/by_id/${id}`)
    console.log(res.data)
    setFormValues(res.data)
  }
  useEffect(() => {
    getPlanById()
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('here')
    let plan = {
      planId: planId,
      name: formValues.name,
      goal: formValues.goal,
      content: formValues.content,
      image: formValues.image,
      userId: userId
    }
    // console.log(plan)
    await update(plan)
    // setFormValues(initialState)
    navigate(`/plan`)
    // e.preventDefault()
    // window.alert('Plan Updated!!')
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const formSubmit = document.getElementById('form')
  if (formSubmit) {
    formSubmit.addEventListener('submit', handleSubmit)
  }

  return (
    <div className="h-full">
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className=" h-full py-7 space-y-12">
          <div className="border-b border-white-900/10 pb-12 grid w-screen place-items-center">
            <h2 className="text-base font-semibold leading-7 text-purple-900">
              Update Your Workout Plan!
            </h2>
            <p className="mt-1 text-sm leading-6 text-white">
              Add a Workout Plan that people can follow!
            </p>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-3 sm:p-4">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-white-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formValues.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Goal
                    </label>

                    <div className="mt-2">
                      <input
                        id="goal"
                        name="goal"
                        type="goal"
                        value={formValues.goal}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white-900"
                    >
                      Content
                    </label>
                    <div className="mt-2">
                      <input
                        id="content"
                        name="content"
                        type="content"
                        value={formValues.content}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-white-900"
                    >
                      Image
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="image"
                        id="image"
                        value={formValues.image}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-6 flex items-center justify-end gap-x-6"
                  id="submitButton"
                >
                  <button
                    type="submit"
                    // onSubmit={handleSubmit()}
                    // onSubmit={() => handleSubmit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdatePlan
