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
    let updatedWorkout = req.body
    const data = await Workout.update(
      {
        name: updatedWorkout.name,
        muscleGroup: updatedWorkout.muscleGroup,
        content: updatedWorkout.content,
        image: updatedWorkout.image,
        userId: updatedWorkout.userId,
        planId: updatedWorkout.planId
      },
      { where: { id: id } }
    )
    res.send(data)
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
