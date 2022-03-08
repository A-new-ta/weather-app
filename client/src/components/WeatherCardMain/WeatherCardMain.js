import { Card, IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import Close from '@material-ui/icons/Close';
import TableWeather from '../TableWeather/TableWeather';
import cn from 'classnames';
import './WeatherCardMain.scss';
import { ThemeContext } from '../../context/ThemeProvider';


const WeatherCardMain = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={cn('weather-card-main', { dark: isDark })} >
            <Card className='weather-card-main-card'>
                <TableWeather />
                <IconButton>
                    <Close/>
                </IconButton>
            </Card>
        </div>
    )
}

export default WeatherCardMain;