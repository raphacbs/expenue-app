import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({ baseURL: 'https://transaction-account-app-bff.herokuapp.com' });

api.interceptors.request.use(async (config: any) => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
})

api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;