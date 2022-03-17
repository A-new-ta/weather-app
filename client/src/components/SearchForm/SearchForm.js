import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import SearchInput from '../SearchInput/SearchInput';
import { AppContext } from '../../context/context';
import UserService from '../../service/UserService';

const SearchForm = () => {
    const { addNewCard, isLogin, data } = useContext(AppContext);
    
    let name = (!data) ? null : data.resolvedAddress.split(',')[0];
    const cities = JSON.parse(localStorage.getItem('cities'));
    
    const addFavouriteCity = (name) => {
        const email = JSON.parse(localStorage.getItem('email'));
        const res = cities.find(city => city.name === name)
        if (!res) { 
        UserService.addCity(email, name).then(
            (response) => {
                console.log('city added succesfully')
            },
            (error) => {
                console.log(error)
            }
        )
        }
    }

    return (
        <div className='search-form'>
            <SearchInput />
            <Button variant='outlined'
                onClick={addNewCard}
            >
                Card
            </Button>
            {isLogin ?
                <Button
                    variant='outlined'
                    onClick={() => addFavouriteCity(name)}
                >
                    Favourite
                </Button> : null}
        </div>
    )
}


export default SearchForm;