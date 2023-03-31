const Router = require('express').Router()

const controller = require('../controllers/WorkoutController')

Router.post('/create_workout', controller.CreateWorkout)
Router.get('/find_workouts', controller.GetAllWorkout)
Router.get('/find_workouts/:workout_id', controller.GetWorkoutById)
Router.get('/find_workouts/by_planId/:plan_id', controller.GetWorkoutByPlanId)
Router.put('/update_workout/:workout_id', controller.UpdateWorkout)
Router.delete('/delete_workout/:workout_id', controller.DestroyWorkout)

module.exports = Router
