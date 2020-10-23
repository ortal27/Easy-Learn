import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-easy-learn.firebaseio.com/' 
});

export default instance;