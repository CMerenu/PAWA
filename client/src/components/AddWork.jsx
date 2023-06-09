import { useNavigate, useParams } from "react-router-dom"
import { createWorkout } from "../services/WorkoutServices"
import { useEffect } from "react"
import { useState } from "react"

const AddWork = ({userInfo}) => {
  let { id } = useParams()
  console.log(userInfo)
  console.log(id)

  let navigate = useNavigate()
  let initialState = {
    planId: '',
    name: '',
    goal: '',
    content: '',
    image: '',
    userId: id
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createWorkout({
      planId: id,
      name: formValues.name,
      muscleGroup: formValues.muscleGroup,
      content: formValues.content,
      image: formValues.image,
      userId: id
    })
    setFormValues(initialState)
    navigate('/workout')
  }
  useEffect(() => {
  })


  return(
<div>
<form>
      <div className="space-y-12">
        <div className="border-b border-white-900/10 pb-12 grid w-screen place-items-center">
          <h2 className="text-base font-semibold leading-7 text-purple-900">
            Add a Workout!
          </h2>
          <p className="mt-1 text-sm leading-6 text-white">
            Add a workout for people to follow!
          </p>
          <div className="overflow-hidden w-2/3 justify-items-center shadow sm:rounded-md y">
            <div className="bg-white px-4 py-2 sm:p-4 grid place-items-center w-41">
              <div className="mt-5 grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-5">

                <div className="col-span-5 sm:col-span-3">
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
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-5 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white-900"
                  >
                    Muscle Group
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="muscleGroup"
                      id="muscleGroup"
                      value={formValues.muscleGroup}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-5 sm:col-span-3">
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

                <div className="col-span-5 sm:col-span-3">
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
    </form>
</div>
  )
}
export default AddWork