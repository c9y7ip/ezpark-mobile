import axios from 'axios'
import { AsyncStorage } from 'react-native';
import config from './config'

const apiClient = axios.create({
    baseURL: config.baseURL
})

apiClient.interceptors.request.use(async function (config) {
    let token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.authorization = token;
    }
    return config
}, function (error) {
    return Promise.reject(error);
})

export default apiClient