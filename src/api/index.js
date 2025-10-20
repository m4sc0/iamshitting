import axios from 'axios'
import { env } from '../env'

const api = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  timeout: 8000
})

export async function getPing() {
  try {
    const response = await api.get('/ping')
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error fetching:', error)
    throw error
  }
}

export default api
