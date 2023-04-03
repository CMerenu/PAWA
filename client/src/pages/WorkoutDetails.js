import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { updateWorkout } from '../services/WorkoutServices'
import { useNavigate } from 'react-router-dom'

const WorkoutDetails = ({ user }) => {
  let [id] = useParams()

  let navigate = useNavigate()

  let initialState = {
    name: '',
    muscleGroup: '',
    content: '',
    image: ''
  }

  const [results, setResults] = useState(null)
  const [workoutDetails, setWorkoutDetails] = useState()
  const [formValues, setFormValues] = useState(initialState)

  const getWorkoutDetails = async (e, workoutId) => {
    const res = await Client.get(`/workout/by_id/${workoutId}`)
    setWorkoutDetails(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const details = {
      name: formValues.name,
      muscleGroup: formValues.muscleGroup,
      content: formValues.content,
      image: formValues.image,
      userId: id
      // planId: planId
    }
    await updateWorkout(details)
    setFormValues(initialState)
    navigate('/plan')
    alert('Plan Updated!!')
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  return user ? <div></div> : <div></div>
}
export default WorkoutDetails
