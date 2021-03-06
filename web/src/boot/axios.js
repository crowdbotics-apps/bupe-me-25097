import Vue from 'vue'
import axios from 'axios'
import Router from 'src/router'

const Axios = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'https://bupe-me-25097.botics.co/'
    : 'https://bupe-me-25097.botics.co/'

})

// Axios intercept request
Axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Token ${token}`
  }
  return config
}, err => {
  Promise.reject(err)
})

// Axios intercept response
Axios.interceptors.response.use((response) => {
  return response
}, error => {
  // console.log('error axios', error.response.status)
  if (error.response.status === 401) {
    // console.log('401 je')
    localStorage.removeItem('token')
    Router.push('/login')
  }
  return Promise.reject(error)
})

Vue.prototype.$axios = Axios
