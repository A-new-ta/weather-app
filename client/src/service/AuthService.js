import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

class AuthService {
    
    async signIn(email, password) {
        const response = await axios.post(API_URL + 'login', { email, password });
        if (response.data.token) {
            localStorage.setItem('email', JSON.stringify(response.data));
        }
        alert(response.data.message)
        return response.data;
    }

    async signUp(email, password) {
        const response = await axios.post(API_URL + 'registration', { email, password });
        alert(response.data.message)
        return response
    }

    logOut() {
        localStorage.removeItem('email')
    }

    getCurrentUser() {
        const emailStr = localStorage.getItem('email');
        if (emailStr) return JSON.parse(emailStr);
        return null;
    }
}

export default new AuthService();