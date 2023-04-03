import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Plan = ({ user, plans, getAllPlans }) => {
  let navigate = useNavigate()

  console.log(plans)

  useEffect(() => {
    getAllPlans()
  }, [])
  return user ? (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div className="flex-nowrap py-5 w-100 lg:flex" key={plan.id}>
            <div>
              <img className="flex px-4" src={plan.image} alt="plan" />
              <h3>{plan.name}</h3>
              <p className="font-medium">{plan.content}...</p>
            </div>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="bg-[#512a71] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-white justify-self-center">
        <NavLink to="/addPlan">Add Plan</NavLink>
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
export default Plan
