import { Button } from '@material-ui/core';
import React from 'react';
import './WeatherCardButtons.scss'

const buttons = ['table', 'graph', 'map']

const WeatherCardButtons = (props) => {
    
    const { swapViewMod, viewState } = props
    return (
        <div className='weater-card-buttons'>
            {buttons.map((buttonValue) => {
                return (
                    <Button
                        className='change-button'
                        key={buttonValue}
                        variant={buttonValue === viewState ? 'contained' : 'outlined'}
                        onClick={() => { swapViewMod(buttonValue) }}
                        color={buttonValue === viewState ? 'primary' : 'default'}
                        fullWidth
                    >
                        {buttonValue}
                    </Button>
                )
            })}
        </div>
    )
}


export default WeatherCardButtons