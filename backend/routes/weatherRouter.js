import Router from 'express';
import WeatherController from '../controllers/weatherController.js';


const weatherRouter = new Router();

weatherRouter.post('/current', WeatherController.getWeather);


export default weatherRouter;