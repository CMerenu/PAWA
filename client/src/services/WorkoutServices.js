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
    await Client.put(`/plan/update_plan/by_id/${data.planId}`, data)
  } catch (error) {
    throw error
  }
}
export const updateWorkout = async (data) => {
  try {
    await Client.put(`workout/update_workout/${data.workoutId}`, data)
  } catch (error) {
    throw error
  }
}

export const pushPlan = async (userId, planId) => {
  try {
    await Client.put(`plan/update_user/Plan/by_id/${userId}`, planId)
  } catch (error) {
    throw error
  }
}
export const CreateWorkout = async (data) => {
  try {
    const res = await Client.post('workout/create_workout', data)
    return res.data
  } catch (error) {
    throw error
  }
}
