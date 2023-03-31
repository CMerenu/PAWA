const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const WorkoutRouter = require('./WorkoutRouter')
const PlanRouter = require('./PlanRouter')
const UserRouter = require('./UserRouter')
const middleware = require('../middleware')

Router.use('/auth', AuthRouter)
Router.use('/workout', WorkoutRouter)
Router.use('/plan', PlanRouter)
Router.use('/user', UserRouter)

module.exports = Router
