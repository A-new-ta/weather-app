import React, { useContext } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AppContext } from '../../context/context';
import Close from '@material-ui/icons/Close'


const SearchInput = () => {
    const {
        search, 
        setSearch,
        handleSubmit, 
        refreshings, 
        setRefreshings } = useContext(AppContext)
    
    return (
        <>
        <form className='search-input' onSubmit={(e) => handleSubmit(e)}>
            <TextField className='text-field'
                label="Search for location"
                variant="outlined"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <IconButton type='submit'>
                <SearchIcon />
            </IconButton>
        </form>
        {refreshings[0] 
            ? 
            <div className={`loading ${refreshings[2]}`}>
              {refreshings[1]} {refreshings[2] === 'red' 
                ? 
                <Close onClick={() => {setRefreshings([false , '', ''])}} className='close-button'/>
                : 
                <></>
                }
        </div> : <></>}
        </>
        
    )
}

export default SearchInput;