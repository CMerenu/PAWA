import Client from './api'

export const CreatePlan = async (data) => {
  try {
    const res = await Client.post('plan/create_plan', data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const updatePlan = async (data) => {
  try {
    await Client.put(`plan/update_plan/by_id/${data.planId}`, data)
  } catch (error) {
    throw error
  }
}
export const updateWorkout = async (data) => {
  try {
    await Client.put(`/update_workout/${data.workoutId}`, data)
  } catch (error) {
    throw error
  }
}
