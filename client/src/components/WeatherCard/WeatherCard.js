import React from 'react';
import Box from '@material-ui/core/Box';
import './WeatherCard.scss';


const WeatherCard = () => {
    
    return (
        <Box boxShadow={3} className="weather-card">
            <p>City</p>
            <p>Day and time</p>
            <p>Temperature</p>
            <p>Wind</p>
            <p>Humidity</p>
        </Box>
    )
}


export default WeatherCard;