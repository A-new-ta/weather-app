import axios from 'axios';
const API_URL = 'http://localhost:5000/api/';


const signIn = async (email, password) => {
    const response = await axios.post(API_URL + 'login', { email, password });
    if (response.data.token) {
        localStorage.setItem('email', JSON.stringify(response.data.email));
        localStorage.setItem('cities', JSON.stringify(response.data.cities))
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
}

const signUp = async (email, password) => {
    const response = await axios.post(API_URL + 'registration', { email, password });
    return response
}

const logOut = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('cities');
    localStorage.removeItem('token');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('email'))
}

export default {
    signIn,
    signUp,
    logOut,
    getCurrentUser
}