import { NavLink } from 'react-router-dom'
const AboutPage = () => {
  return (
    <div className="w-full h-full py-[1rem] px-4 text-black">
      <div className="text-left text-4xl pb-[2rem]">
        <h1 className="text-3xl text-black-500">About Page</h1>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-purple-500 font-bold">THE DREAM BODY APP</p>
        <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2 text-purple">
          Build the body of your DREAMS!{' '}
        </h1>
        <p className="text-gray-500">
          Whether you want to drop some weight, gain some muscle or just get in
          better shape, PAWA has something for you! With its user-friendly
          interface, PAWA allows you to create a personalized workout plan that
          breaks downs your fitness journey day by day!
        </p>
        <button className="bg-[#512a71] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-white justify-self-center">
          <NavLink to="/register">Register!</NavLink>
        </button>
      </div>
    </div>
  )
}
export default AboutPage
