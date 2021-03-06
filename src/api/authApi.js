import axios from 'axios';
import config from './config'

const baseURL = config.baseURL

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
    console.log(baseURL)
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