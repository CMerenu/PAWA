const { User } = require('../models')

const GetAllUser = async (req, res) => {
  try {
    const data = await User.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUser = async (req, res) => {
  try {
    const id = req.params.id
    let data = await User.findByPk(id)
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUserByEmail = async (req, res) => {
  try {
    const email = req.params.email
    console.log(email)
    let data = await User.findOne({ where: { email: email } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body
    }
    let newUser = await User.create(userBody)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.userId)
    const updatedUser = req.body
    let updateUser = await User.update(
      {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        userName: updatedUser.userName,
        email: updatedUser.email,
        city: updatedUser.city,
        state: updatedUser.state
      },
      { where: { id: id } }
    )
    res.send(updateUser)
  } catch (error) {
    throw error
  }
}

const UpdateUserPlan = async (req, res) => {
  try {
    let newArr = []
    const id = parseInt(req.params.userId)
    const planId = req.body
    console.log(planId)
    let find = await User.findByPk(id)
    const arr = find.plans
    console.log(arr)
    if (arr.length < 1) {
      newArr.push(planId.plans)
    } else {
      newArr.push(arr, planId.plans)
    }
    console.log(newArr, 'this is a new arr')
    let updateUserPlan = await User.update(
      {
        plans: newArr
      },
      { where: { id: id } }
    )
    res.send(updateUserPlan)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let id = parseInt(req.params.userId)
    await User.destroy({ where: { id: id } })
    res.send({ message: `Deleted user with an id of ${id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserByEmail,
  GetAllUser,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  UpdateUserPlan
}
