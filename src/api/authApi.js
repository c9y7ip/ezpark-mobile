import axios from 'axios';

// swap baseURL here so that it applies to all api requests.
// const baseURL = 'http://localhost:5000'
const baseURL = 'http://34.67.193.145'

const login = (email, password) => {
    console.log('logging in')
    return axios.post(`${baseURL}/auth/login`, {
        email: email,
        password: password
    }).then(response => {
        console.log(response)
        return response.data
    })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const register = (name, password, email, phone) => {
    return axios.post(`${baseURL}/auth/register`, {
        name: name,
        password: password,
        email: email,
        phone: phone,
        isAdmin: false
    }).then(response => response.data)
        .catch(err => {
            console.log(err)
            throw err
        })
}

module.exports = {
    login: login,
    register: register
}