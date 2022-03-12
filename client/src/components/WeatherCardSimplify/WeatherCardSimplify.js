import { Card, IconButton, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Close from '@material-ui/icons/Close';
import TableWeather from '../TableWeather/TableWeather';
import cn from 'classnames';
// import './WeatherCardSimplify.scss';
import { ThemeContext } from '../../context/ThemeProvider';
import GraphWeather from '../GraphWeather/GraphWeather';
import WeatherCardButtons from '../WeatherCardButtons/WeatherCardButtons';
import MapWeather from '../MapWeather/MapWeather';

const WeatherCardMain = React.memo(({ id }) => {
    const [viewState, setViewState] = useState('table');
    const { isDark } = useContext(ThemeContext);

    const swapViewMod = (value) => {
        setViewState(value)
    }

    const renderContent = (viewState) => {
        if (viewState === 'table') {
            return (
                <TableWeather />
            )
        }
        if (viewState === 'map') {
            return <MapWeather />
        }
        return (
            <GraphWeather />
        )
    }

    return (
        <div className={cn('weather-card-main', { dark: isDark })} >
                
        <Card className='weather-card-main-card'>
            {renderContent(viewState)}
            <WeatherCardButtons
                swapViewMod={swapViewMod}
                viewState={viewState}
            />
            <IconButton
                aria-label='delete'
                className='close-button'>
                <Close />
            </IconButton>
        </Card>
        </div>
    )
})

export default WeatherCardMain;