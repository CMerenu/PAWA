const Router = require('express').Router()

const controller = require('../controllers/PlanController')

Router.get('/get_plans', controller.GetAllPlan)
Router.post('/create_plan', controller.CreatePlan)
Router.get('/by_user_id/:user_id', controller.GetPlanByUserId)
Router.get('/by_id/:id', controller.GetPlanById)
Router.delete('/:planId', controller.DeletePlan)

module.exports = Router
