import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://customers-884c3-default-rtdb.firebaseio.com//'
});

export default instance;