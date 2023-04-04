import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import { CreatePlan } from '../services/WorkoutServices'

const AddPlan = ({ userInfo }) => {
  const userName = userInfo.userName
  console.log(userName)
  const userId = userInfo.id
  console.log(userInfo)

  let navigate = useNavigate()
  let initialState = {
    name: '',
    goal: '',
    content: '',
    image: '',
    userId: userId
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-white-900/10 pb-12 grid w-screen place-items-center">
            <h2 className="text-base font-semibold leading-7 text-purple-900">
              Add a Workout Plan!
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
                        autoComplete="name"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="goal"
                      className="block text-sm font-medium leading-6 text-white-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="goal"
                        id="goal"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
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
                        onChange={handleChange}
                        onSubmit={handleSubmit}
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
                      <div className="mt-2">
                        <input
                          id="image"
                          name="image"
                          type="text"
                          onChange={handleChange}
                          onSubmit={handleSubmit}
                          className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Upload
                    </button>
                  </div>
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
