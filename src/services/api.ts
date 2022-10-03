import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({ baseURL: 'https://6315fbf533e540a6d389be50.mockapi.io' });

api.interceptors.request.use(async (config: any) => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
})

export default api;