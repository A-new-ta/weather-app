import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SearchInput from '../SearchInput/SearchInput';
import './SearchForm.scss';
import AuthService from '../../service/AuthService';


const SearchForm = () => {
    
    const [currentUser, setCurrentUser] = useState(true)
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setCurrentUser(false);
        }
    }, []);
    const btnStatus = () => {
        console.log(currentUser)
        return currentUser
    }
    
    return (
        <div className='search-form'>
            <SearchInput />
            <Button variant='outlined'>
                Card
            </Button>
            <Button
                variant='outlined'
                disabled={btnStatus()}
            >           
                Favourite
            </Button>
        </div>
    )
}


export default SearchForm;