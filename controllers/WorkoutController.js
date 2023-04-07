const { Workout } = require('../models')

const CreateWorkout = async (req, res) => {
  try {
    let data = await Workout.create(req.body)
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetAllWorkout = async (req, res) => {
  try {
    let data = await Workout.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetWorkoutById = async (req, res) => {
  try {
    const id = req.params.workout_id
    let data = await Workout.findByPk(id)
    res.send(data)
  } catch (error) {}
}

const GetWorkoutByPlanId = async (req, res) => {
  try {
    const planId = req.params.plan_id
    const data = await Workout.findAll({ where: { planId: planId } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const UpdateWorkout = async (req, res) => {
  try {
    let id = req.params.workout_id
    let updatedWorkout = await Workout.update(req.body, {
      where: { id: id },
      returning: true
    })
    res.send(updatedWorkout)
  } catch (error) {
    throw error
  }
}

const DestroyWorkout = async (req, res) => {
  try {
    let id = req.params.workout_id
    let data = await Workout.destroy({ where: { id: id } })
    res.send(`Deleted Workout with ID of ${id}`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateWorkout,
  GetAllWorkout,
  UpdateWorkout,
  DestroyWorkout,
  GetWorkoutById,
  GetWorkoutByPlanId
}
