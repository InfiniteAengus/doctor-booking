import axios from 'axios'

const getInstance = (headers = {}) => {
  return axios.create({
    baseURL: '/api',
    headers: {
      ...headers,
      'x-api-key': process.env.REACT_APP_API_KEY,
    },
  })
}

const withPromise = (axiosInstance) =>
  new Promise((resolve, reject) => {
    axiosInstance.then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        // service is unavailable
        if (!err.response) {
          reject(new Error('Service is unavailable'))
          return
        }

        if (err.response.status === 403) {
          // redirect to the homepage if permission is denied
          document.location = '/'
        }

        // general error
        reject(
          Object.assign(err.response.data || {}, {
            status: err.response.status,
          })
        )
      }
    )
  })

function get(endpoint, params = {}) {
  return withPromise(
    getInstance().get(endpoint, {
      params,
    })
  )
}

function post(endpoint, body) {
  return withPromise(getInstance().post(endpoint, body))
}

function put(endpoint, body) {
  return withPromise(getInstance().put(endpoint, body))
}

function del(endpoint) {
  return withPromise(getInstance().delete(endpoint))
}

const api = {
  get,
  post,
  put,
  del,
}

export default api
