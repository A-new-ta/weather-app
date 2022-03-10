import { Card, IconButton, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Close from '@material-ui/icons/Close';
import TableWeather from '../TableWeather/TableWeather';
import cn from 'classnames';
import './WeatherCardMain.scss';
import { ThemeContext } from '../../context/ThemeProvider';
import GraphWeather from '../GraphWeather/GraphWeather';


const WeatherCardMain = React.memo(({ id }) => {
    const [viewState, changeViewState] = useState('table');
    const { isDark } = useContext(ThemeContext);

    const swapViewMod = (value) => {
        changeViewState(value)
    }

    const renderContent = (viewState) => {
        // if (viewState === 'table') {
        //     return (
        //     // <div className={cn('weather-card-main', { dark: isDark })} >
        //     // <Card className='weather-card-main-card'>
        //         <TableWeather />
        // //         <IconButton>
        // //             <Close/>
        // //         </IconButton>
        // //     </Card>
        // // </div>
        //     )
        // }
        // if (viewState === 'map') {
        //     return <InteractiveMap/>
        // }
        return (
            <GraphWeather />
        )
    }

    return (
        // <div className={cn('weather-card-main', { dark: isDark })} >
        //     <Card className='weather-card-main-card'>
        //         <TableWeather />
        //         <IconButton>
        //             <Close/>
        //         </IconButton>
        //     </Card>
        // </div>
        <Card>
            <Grid container>
                <Grid item xs={9} sm={10}>
                    {renderContent(viewState)}
                </Grid>
                <Grid item xs={3} sm={2}>
                    {/* <WeatherCardSettings
                        swapViewMod={swapViewMod}
                        viewState={viewState}
                    /> */}
                </Grid>
                <IconButton aria-label="delete">
                    <Close />
                </IconButton>
            </Grid>
        </Card>
    )
})

export default WeatherCardMain;