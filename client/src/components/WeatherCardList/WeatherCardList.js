import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import WeatherCardSimplify from '../WeatherCardSimplify/WeatherCardSimplify';
// import './WeatherCardList.scss';



const WeatherCardList = () => {

    const [cardsList, setCardsList] = useState([]);

    const addCard = event => {
        setCardsList(cardsList.concat(<WeatherCardSimplify key={ cardsList.length}/>))
    }
    
    return (
        <main className='main'>
            <Button variant='outlined'
                onClick={addCard}
            >
                Card
            </Button>
            {cardsList} 
        </main>
        
    )
}

export default WeatherCardList;