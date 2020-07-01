import axios from 'axios';

const api = axios.create({
    baseURL:'http://gotradeup.herokuapp.com/',
});

export default api;
