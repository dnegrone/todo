import axios from 'axios';

const api = axios.create({
    baseURL: 'https://private-anon-e821e77806-roihfetask.apiary-mock.com/api',
});

export default api;