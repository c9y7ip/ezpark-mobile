import apiClient from './apiClient'
import config from './config'

const fetchCars = () => {
    return apiClient.get(`/car/get`)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
            throw err

        })
}

module.exports = {
    fetchCars: fetchCars
}