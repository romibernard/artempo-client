import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL // http://localhost:3000 | http://...herokuapp.com
})

export default axiosClient