import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import { CreatePlan } from '../services/WorkoutServices'

const AddPlan = ({ user, userInfo }) => {
  const userName = userInfo.userName
  console.log(userName)
  const userId = userInfo.id
  console.log(userId)

  let navigate = useNavigate()
  let initialState = {
    name: '',
    goal: '',
    content: '',
    image: '',
    id: userId
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await CreatePlan({
      name: formValues.name,
      goal: formValues.goal,
      content: formValues.content,
      image: formValues.image,
      userId: userId
    })
    setFormValues(initialState)
    navigate('/dashboard')
  }

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }
  useEffect(() => {}, [])

  return (
    <div className="h-full">
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className=" h-full py-7 space-y-12">
          <div className="border-b border-white-900/10 pb-12 grid w-screen place-items-center">
            <h2 className="text-base font-semibold leading-7 text-purple-900">
              Add Your Workout Plan!
            </h2>
            <p className="mt-1 text-sm leading-6 text-white">
              Add a Workout Plan that people can follow!
            </p>
            <div className="overflow-hidden shadow sm:rounded-md w-1/2">
              <div className="bg-white px-4 py-3 sm:p-4">
                <div className=" gap-y-5  sm:grid-cols-5">
                  <div className="sm:col-span-3 py-3">
                    <label className="block text-base font-medium leading-6 text-white-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="name"
                        id="name"
                        rows={2}
                        value={formValues.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3 py-3">
                    <label className="block text-base font-medium leading-6 text-gray-900">
                      Goal
                    </label>

                    <div className="mt-2">
                      <textarea
                        id="goal"
                        name="goal"
                        type="goal"
                        rows={3}
                        value={formValues.goal}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3 py-3">
                    <label className="block text-base font-medium leading-6 text-white-900">
                      Content
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="content"
                        name="content"
                        type="content"
                        rows={5}
                        value={formValues.content}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 py-3">
                    <label className="block text-base font-medium leading-6 text-white-900">
                      Image
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="image"
                        id="image"
                        rows={4}
                        value={formValues.image}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-6 flex items-center justify-center gap-x-6"
                  id="submitButton"
                >
                  <button
                    type="submit"
                    // onSubmit={handleSubmit()}
                    // onSubmit={() => handleSubmit}
                    className="rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

export default AddPlan
