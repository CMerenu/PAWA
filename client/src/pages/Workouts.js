import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const Workout = ({ user, getAllWorkouts, setWorkouts, workouts }) => {
  let navigate = useNavigate()
  console.log(workouts)

  useEffect(() => {
    getAllWorkouts()
  }, [])
  return user ? (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div className="flex-nowrap py-5 w-100 lg:flex " key={workout.id}>
            <div className="">
              <img className="flex px-4" src={workout.image} alt="Workout" />
              <h3>{workout.name}</h3>
              <h4>{workout.muscleGroup}</h4>
              <p className="font-medium">{workout.content}...</p>
            </div>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="bg-[#512a71] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-white justify-self-center">
        <NavLink to="/addWorkout">Add Workout</NavLink>
      </button>
    </div>
  ) : (
    <div className="h-[40rem]">
      <div className="protected grid  items-center justify-center  px-4 py-[10rem] sm:px-6 lg:px-8">
        <div className="rounded-md overflow-hidden border w-full text-center bg-white py-[3rem] mx-3 md:mx-0 lg:mx-0">
          <h3 className="text-5xl pb-4 text-orange-500 font-bold font-Playfair">
            !
          </h3>
          <h3 className="text-2xl">You must be signed in to do that!</h3>
        </div>
        <button
          className=" w-full justify-center rounded-md mx-3 md:mx-0 lg:mx-0 text-xl bg-orange-500 mt-4 py-2 px-3 hover:bg-orange-300"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Workout
