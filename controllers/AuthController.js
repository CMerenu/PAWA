const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, city, state, userName } =
      req.body
    let passwordDigest = await middleware.hashPassword(password)
    const data = await User.create({
      firstName,
      lastName,
      email,
      userName,
      passwordDigest,
      city,
      state
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const data = await User.findOne({
      where: { email: email },
      raw: true
    })
    let matched = await middleware.comparePassword(
      data.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        email: data.email,
        password: data.passwordDigest
      }

      let token = middleware.createToken(payload)
      return res.send({ data: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on Login!' })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const data = await User.findByPk(req.params.user_id)
    let matched = await middleware.comparePassword(
      data.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await data.update({ passwordDigest })
      return res.send({ status: 'Password Updated!' })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
