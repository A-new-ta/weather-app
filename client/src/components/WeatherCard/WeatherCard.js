import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Clock from '../Clock/Clock';
import { AppContext } from '../../context/context';
import { changeTempUnits } from '../../utils/changeTempUnits';

const WeatherCard = () => {
    const { data, temperatureUnit } = useContext(AppContext)
    
    if (!data) {
        return (
            <Typography variant="h5">
                    Loading...
            </Typography>
        )
    }
    return (
        <Box boxShadow={3} className="weather-card">
            <Typography variant='h6' >
                {data.resolvedAddress}
            </Typography>
            <Clock timezone={data.timezone} />
            <Typography variant='h4'>
            {changeTempUnits((data.currentConditions.temp), temperatureUnit)} {temperatureUnit}
            </Typography>
            <Typography variant='h6' >
                Wind {data.currentConditions.windspeed} km/h
            </Typography>
            <Typography variant='h6' >
                Hum {data.currentConditions.humidity} %
            </Typography>
        </Box>
    )
}


export default WeatherCard;