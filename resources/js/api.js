import axios from 'axios'

const config = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
  },
  withCredentials: true,
}

const $axios = axios.create(config)

const api = axios.create({
  ...config,
  baseURL: '/api',
})

export { api }

export default $axios
