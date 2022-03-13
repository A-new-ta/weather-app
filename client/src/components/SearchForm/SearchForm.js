import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import SearchInput from '../SearchInput/SearchInput';
import { AppContext } from '../../context/context';

const SearchForm = () => {
    const { addNewCard } = useContext(AppContext);
       
    return (
        <div className='search-form'>
            <SearchInput />
            <Button variant='outlined'
                onClick={addNewCard}
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