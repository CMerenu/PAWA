import Client from './api'

export const CreatePlan = async (data) => {
  try {
    const res = await Client.post('plan/create_plan', data)
    return res.data
  } catch (error) {
    throw error
  }
}
