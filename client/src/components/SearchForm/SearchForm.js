import React from 'react';
import Button from '@material-ui/core/Button';
import SearchInput from '../SearchInput/SearchInput';
import './SearchForm.scss';

const SearchForm = () => {
    
    return (
        <div className='search-form'>
            <SearchInput />
            <Button variant='outlined'>
                Card
            </Button>
            <Button variant='outlined'>           
                Favourite
            </Button>
        </div>
        
    )
}


export default SearchForm;