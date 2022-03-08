import React, { useContext } from 'react';
import { dateTransform } from '../../utils/dateTransform';
import { Card, Typography } from '@material-ui/core';
import cn from 'classnames';
import './ForecastCard.scss';
import { ThemeContext } from '../../context/ThemeProvider';

const ForecastCard = (props) => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={cn('forecast-card', { dark: isDark })}>
            <Card className='forecast-card-item'>
                <Typography variant='h5'>
                    {dateTransform(props.datetimeEpoch, props.timezone, 'DD.MM ddd')}
                </Typography>
                <Typography variant='h5'>
                    {props.temp} {props.fahrenheit}
                </Typography>
                <Typography>
                    {props.icon}
                </Typography>
                <Typography variant='h6'>
                    {props.windspeed} km/h
                </Typography>
                <Typography variant='h6'>
                    {props.humidity} %
                </Typography>
            </Card>
        </div>
    )
}

export default ForecastCard;