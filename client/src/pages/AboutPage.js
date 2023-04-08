import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'

const AboutPage = () => {
  return (
    <div className="w-full h-screen py-[1rem] px-4 text-black">
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
        <div className="w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 rounded-full mx-auto mt-[-3rem] bg-white"
            src="https://i.postimg.cc/yd7S605j/Screen-Shot-2023-04-08-at-1-34-16-AM.png"
            alt="/"
          />
          <h2 className="text-xl font-bold text-center pt-3">
            {' '}
            Chikodi Merenu
          </h2>
          <p className="text-center">Full Stack Developer</p>
          <p className="text-center">General Assembly</p>
          <div className="py-8 text-center font-medium">
            <p>
              Efficient and solution-oriented data analyst driven to solve new
              problems every day.{' '}
            </p>
            <div className="flex py-3 justify-center">
              {/* <AiFillLinkedin size={40}/> */}
              <Link to={'https://www.linkedin.com/in/chikodimerenu/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 24 24"
                  fill="#0e76a8"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link to={'https://github.com/CMerenu'}>
                <AiFillGithub size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutPage
