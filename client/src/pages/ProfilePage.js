import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ handleLogOut, userInfo }) => {
  let navigate = useNavigate()

  const GetPlanByUser = async () => {
    try {
      const userId = userInfo.id
      const res = await Client.get(`plan/by_user_id/${userId}`)
      console.log(res)
      setPlan(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleDelete = async (event) => {
    event.preventDefault()
    handleLogOut()
    await Client.delete(`user/delete_user/${userInfo.id}`)
    alert('users account was deleted, please make another user!')
    navigate('/home')
  }
  const [plans, setPlan] = useState([])
  const handlePlan = async () => {}

  useEffect(() => {
    handlePlan()
    GetPlanByUser()
  }, [userInfo])

  return (
    <div className="bg-gray-100 h-screen ml-[10rem] w-3/4 flex">
      <div className="flex md:flex-row-reverse flex-wrap">
        <div className="w-full p-4 text-center rounded-2xl">
          <div className="mb-10">
            <div className="bg-green p-3 rounded items-start">
              <img
                className="rounded-full"
                src={userInfo.profilePicture}
                alt="profilePic"
                width="100"
              />
            </div>
            <div className='text-left pl-4 pt-4">'>
              <span className="font-light text-[#6B7082] text-2xl mr-2">
                {userInfo.userName}
              </span>
              <span>
                {userInfo.city}, {userInfo.state}
              </span>

              <button className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">
                Edit Profile
              </button>
            </div>

            <div className="text-left pl-4 pt-3">
              {/* <span class="text-base font-semibold text-gray-700 mr-2">
                <b>220</b> posts
              </span>
              <span class="text-base font-semibold text-gray-700 mr-2">
                <b>114</b> followers
              </span>
              <span class="text-base font-semibold text-gray-700">
                <b>200</b> following
              </span> */}
              <h3>You are currently on {}</h3>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 px-1 snap-y">
            {plans.map((plan) => (
              <div
                className="flex-nowrap py-5 hidden w-100 lg:flex"
                key={plan.id}
              >
                <div>
                  <h3>{plan.content}</h3>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
