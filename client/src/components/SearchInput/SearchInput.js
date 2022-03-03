import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './SearchInput.css';

const SearchInput = () => {
    
    return (
        <form className='SearchInput'>
            <TextField className='TextField'
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