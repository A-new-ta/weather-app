import axios from 'axios';
import { baseURL, apiKey } from '../config/config.js';


const generateString = (location) => {
    return `${baseURL + location}?unitGroup=metric&include=current&lang=en&` + 
            `key=${apiKey}&contentType=json`
}
    
class WeatherController {
    async getWeather(req, res) {
        try {
            const response = await axios.get(
                generateString(req.body.data)
            )
            const { data } = response;
            return res.json(data)
        } catch(err) {
            res.status(400).json({message: 'Server error'})
        }
    }
}


export default new WeatherController();

