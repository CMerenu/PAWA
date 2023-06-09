import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('auth/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.data
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (data) => {
  try {
    await Client.put(`/user/update_user/by_id/${data.userId}`, data)
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetUser = async (data) => {
  try {
    const res = await Client.get(`/get_user/${data.userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddWork = async (data) => {
  try {
    const res = await Client.post('/create_workout', data)
    return res.data
  } catch (error) {
    throw error
  }
}
