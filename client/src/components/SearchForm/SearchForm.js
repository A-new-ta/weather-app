import React, { useState, useEffect, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import SearchInput from '../SearchInput/SearchInput';
// import './SearchForm.scss';
import AuthService from '../../service/AuthService';
import WeatherCardSimplify from '../WeatherCardSimplify/WeatherCardSimplify'

const SearchForm = () => {
    
    // const [currentUser, setCurrentUser] = useState(true)
    // useEffect(() => {
    //     const user = AuthService.getCurrentUser();
    //     if (user) {
    //       setCurrentUser(false);
    //     }
    // }, []);
    // const btnStatus = () => {
    //     console.log(currentUser)
    //     return currentUser
    // }
    // const [cardsList, setCardsList] = useState([]);
    // const addCard = () => {
    //     setCardsList(cardsList.push(<WeatherCardSimplify key={cardsList.length} />))
    //     console.log(cardsList)
    //     window.localStorage.setItem('cards', cardsList)
    //     // console.log(cardsList)
    // }

    // const generateId = () => {
    //     let number = 0
    //     return () => {
    //         number += 1
    //         return `card_id_${number}`
    //     }
    // }

    // const addNewCard = useCallback(() => {
    //     setNewCard ({id: generateId()})
    // }, [setNewCard])


    return (
        <div className='search-form'>
            <SearchInput />
            <Button variant='outlined'
                // onClick={addNewCard}
            >
                Card
            </Button>
            <Button
                variant='outlined'
                // disabled={btnStatus()}
            >           
                Favourite
            </Button>
        </div>
    )
}


export default SearchForm;