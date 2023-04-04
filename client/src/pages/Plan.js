import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const Plan = ({ user, plans, getAllPlans }) => {
  let navigate = useNavigate()

  console.log(plans)

  useEffect(() => {
    getAllPlans()
  }, [user])
  return user ? (
    <div className="h-full">
      <div className="grid grid-cols-1 py-9 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Link to={`/planDetails/${plan.id}`} key={plan.id}>
            <div
              className="flex-nowrap bg-white hover:shadow-lg hover:scale-105 rounded-lg shadow-md py-5 w-100 lg:flex"
              key={plan.id}
            >
              <div>
                <img
                  className="flex px-4 rounded"
                  src={plan.image}
                  alt="plan"
                />
                <h3 className="font-bold uppercase">{plan.name}</h3>
                <p className="font-medium">{plan.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-[#512a71] w-[200px] rounded-md my-8 mx-auto md:mx-0 py-3 text-white justify-self-center">
        <NavLink to="/addPlan">Add Plan</NavLink>
      </button>
    </div>
  ) : (
    <div className="h-[40rem]">
      <div className="grid grid-cols-1 h-full py-9 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            className="flex-nowrap bg-white hover:shadow-lg hover:scale-105 rounded-lg shadow-md py-5 w-100 lg:flex"
            key={plan.id}
          >
            <div>
              <img className="flex px-4 rounded" src={plan.image} alt="plan" />
              <h3 className="font-bold uppercase">{plan.name}</h3>
              <p className="font-medium">{plan.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Plan
