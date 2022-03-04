import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './SearchInput.scss';

const SearchInput = () => {
    
    return (
        <form className='search-input'>
            <TextField className='text-field'
                label="Search for location"
                variant="outlined"
            />
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </form>
        
    )
}


export default SearchInput;