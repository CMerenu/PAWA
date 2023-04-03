const DashBoard = ({ user, userInfo }) => {
  return (
    <div className="space-y-12 color-white">
      <div className="border-b border-white-900/10 pb-12">
        <h1 className="text-xl uppercase">DashBoard</h1>
        <h3>Hello, {userInfo.userName}</h3>
      </div>
    </div>
  )
}
export default DashBoard
