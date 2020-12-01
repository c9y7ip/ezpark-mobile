import apiClient from './apiClient'

const fetchParking = (parkingId) => {
    return apiClient.get(`/parking/${parkingId}`)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const createSession = (payload) => {
    console.log('create session func')
    return apiClient.post('/session/create', {
        payload: payload
    })
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
    fetchParking: fetchParking,
    createSession: createSession
}