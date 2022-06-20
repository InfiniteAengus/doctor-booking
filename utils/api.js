import api from './axios'

const api_url = process.env.REACT_APP_API_URL

export const apiGetDoctors = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await api.get(`${api_url}/doctor`)
      return resolve(res)
    } catch {
      return reject()
    }
  })

export const apiGetDoctorInfo = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await api.get(`${api_url}/doctor/${id}`)
      return resolve(res)
    } catch {
      return reject()
    }
  })

export const apiGetBookings = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await api.get(`${api_url}/booking`)
      return resolve(res)
    } catch {
      return reject()
    }
  })

export const apiPostBooking = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = api.post(`${api_url}/booking`, data)
      return resolve(res)
    } catch {
      return reject()
    }
  })
