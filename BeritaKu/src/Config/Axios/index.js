import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Axios = axios.create({
  baseURL: 'https://restful-api-news.herokuapp.com',
});

Axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
