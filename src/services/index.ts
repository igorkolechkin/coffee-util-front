import axios from 'axios'

export const BASE_URL = process.env.REACT_APP_SERVER_URL

export const toApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})