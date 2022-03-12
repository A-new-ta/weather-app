import React, { useContext } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// import './SearchInput.scss';
import { AppContext } from '../../context/context';
import Close from '@material-ui/icons/Close'


const SearchInput = () => {
    const {
        search, 
        changeSearch,
        handleSubmit, 
        refreshing, 
        changeRefreshing } = useContext(AppContext)
    
    return (
        <>
        <form className='search-input' onSubmit={(e) => handleSubmit(e)}>
            <TextField className='text-field'
                label="Search for location"
                variant="outlined"
                value={search}
                onChange={e => changeSearch(e.target.value)}
            />
            <IconButton type='submit'>
                <SearchIcon />
            </IconButton>
        </form>
        {refreshing[0] 
            ? 
            <div className={`loading ${refreshing[2]}`}>
              {refreshing[1]} {refreshing[2] === "red" 
                ? 
                <Close onClick={() => {changeRefreshing([false , '', ''])}} className='close-button'/>
                : 
                <></>
                }
        </div> : <></>}
        </>
        
    )
}

export default SearchInput;