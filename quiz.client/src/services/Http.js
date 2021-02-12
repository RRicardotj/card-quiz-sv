import axios from 'axios'
import { BACKEND_API_URL } from '../configs'

const Http = axios.create({
  baseURL: BACKEND_API_URL
})

export default Http
