import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/passenger?page=0&size=10')
  },
  getPassengerDetail(id) {
    return apiClient.get('/passenger/'+id)
  },
  getAirlinesDetail(id) {
    return apiClient.get('/passenger/'+id)
  }
}