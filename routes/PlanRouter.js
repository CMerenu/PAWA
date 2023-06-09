const Router = require('express').Router()

const controller = require('../controllers/PlanController')

Router.get('/get_plans', controller.GetAllPlan)
Router.post('/create_plan', controller.CreatePlan)
Router.get('/by_user/:user_id', controller.GetPlanByUserId)
Router.get('/by_id/:id', controller.GetPlanById)
Router.put('/update_plan/by_id/:plan_id', controller.UpdatePlan)
Router.delete('/delete_plan/:plan_id', controller.DeletePlan)

module.exports = Router
