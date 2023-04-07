const { Plan } = require('../models')

const GetAllPlan = async (req, res) => {
  try {
    const data = await Plan.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetPlanById = async (req, res) => {
  try {
    let id = req.params.id
    console.log(id)
    const data = await Plan.findByPk(id)
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetPlanByUserId = async (req, res) => {
  try {
    const userId = req.params.user_id
    const data = await Plan.findAll({ where: { userId: userId } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const CreatePlan = async (req, res) => {
  try {
    const planBody = {
      ...req.body
    }
    let planCreate = await Plan.create(planBody)
    res.send(planCreate)
  } catch (error) {
    throw error
  }
}

const UpdatePlan = async (req, res) => {
  try {
    let planId = parseInt(req.params.plan_id)
    let updatedPlan = await Plan.update(req.body, {
      where: { id: planId },
      returning: true
    })
    res.send(updatedPlan)
  } catch (error) {
    throw error
  }
}

const DeletePlan = async (req, res) => {
  try {
    let id = parseInt(req.params.plan_id)
    await Plan.destroy({ where: { id: id } })
    res.send({ message: `Deleted Plan with an id of ${id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlanByUserId,
  GetAllPlan,
  GetPlanById,
  CreatePlan,
  UpdatePlan,
  DeletePlan
}
