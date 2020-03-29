import axios from 'axios';
import { AppOwnership } from 'expo-constants';

const api = axios.create({
    baseURL: 'http://192.168.100.11:3333'
});

export default api;