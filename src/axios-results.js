import axios from 'axios';


const instance = axios.create({
    baseURL: '' //TODO - add firebase
});

export default instance;