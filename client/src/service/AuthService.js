import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

const signIn = async (email, password) => {
    // try {
    const response = await axios.post(API_URL + 'login', { email, password });
    // if (!response.ok) {
    //     throw new Error (response.message || 'Error')
    // }
    if (response.data.token) {
        localStorage.setItem('email', JSON.stringify(response.data));
    }
    return response.data;
    // } catch (e) {
    //     console.log(e.message)
    // }
}

const signUp = async (email, password) => {
    // try {
    const response = await axios.post(API_URL + 'registration', { email, password });
    // if (!response.ok) {
    //     throw new Error (response.message || 'Error')
    // }
    // alert(response.data.message)
    return response
    // } catch (e) {
    //     console.log(e.message)
    // }
}

const logOut = () => {
    localStorage.removeItem('email')
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