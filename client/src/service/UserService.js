import axios from 'axios';
const API_URL = 'http://localhost:5000/api/';

const deleteCity = async (email, _id) => {
    const body = { email, cities: { _id } };
    const token = localStorage.getItem('token');
    const response = await axios.put(API_URL + 'user/remove', body, { headers: { 'Authorization': `Bearer ${token}` }
    });
    localStorage.setItem('cities', JSON.stringify(response.data.newUser.cities));
    return response.data.newUser.cities
}


const addCity = async (email, name) => {
    const body = { email, cities: { name } };
    const token = localStorage.getItem('token');
    const response = await axios.put(API_URL + 'user/add', body, { headers: { 'Authorization': `Bearer ${token}` }
    });
    localStorage.setItem('cities', JSON.stringify(response.data.newUser.cities));
    return response.data.newUser.cities
}

export default { deleteCity, addCity }



