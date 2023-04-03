import { NavLink } from 'react-router-dom'

const Workout = () => {
  return (
    <div>
      <button className="bg-[#512a71] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-white justify-self-center">
        <NavLink to="/addWorkout">Add Workout</NavLink>
      </button>
    </div>
  )
}
export default Workout
