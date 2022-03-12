import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import ForecastCard from '../ForecastCard/ForecastCard';
import Typography from '@material-ui/core/Typography';
import { celsiusToFahrenheit } from '../../utils/transformDegrees';
// import './TableWeather.scss'
const NUMBER_OF_DAYS = 7;

const TableWeather = () => {

    const changeTempUnits = (temp) => {
        if (fahrenheit === '°F') {
            return celsiusToFahrenheit(temp)
        }
        return temp
    }

    const { data, fahrenheit } = useContext(AppContext);
    if (!data) {
        return (
            <Typography variant="h5">
                    Loading...
            </Typography>
        )
    }
    // console.log(data)
    let newDataDays = [];
    for (let i = 0; i < NUMBER_OF_DAYS; i++) {
        const { datetimeEpoch, temp, humidity, icon, windspeed } = data.days[i];
        newDataDays.push({ datetimeEpoch, temp, humidity, icon, windspeed })
    }
    // console.log(newDataDays)

    let card = newDataDays.map(({datetimeEpoch, temp, humidity, icon, windspeed}) => 
        <ForecastCard
            key={datetimeEpoch}
            humidity={humidity}
            temp={changeTempUnits(temp)}
            datetimeEpoch={datetimeEpoch}
            fahrenheit={fahrenheit}
            icon={icon}
            windspeed={windspeed}
            timezone={data.timezone}
        />)
    return (
        <div className='table-weather'>
            {card}
        </div>
    )
}

export default TableWeather;