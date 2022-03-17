import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton, Typography } from '@material-ui/core';
import Close from '@material-ui/icons/Close'
import UserService from '../../service/UserService';

const FavouritiesList = () => {

    const cities = JSON.parse(localStorage.getItem('cities'));
    const [favouriteCities, setFavouriteCities] = useState(cities);

    if (!cities) {
        return (
            <ListItem>
                No favourite cities
            </ListItem>
        )
    }
    const deleteFavouriteCity = (_id) => {
        const email = JSON.parse(localStorage.getItem('email'));
        UserService.deleteCity(email, _id).then(
            (response) => {
                setFavouriteCities(JSON.parse(localStorage.getItem('cities')));
            },
            (error) => {
                console.log(error)
            }
        )
    }
    const result = favouriteCities.map((item) => {
        return <ListItem key={item._id} className='list'>
            <Typography className='list-item'>
                {item.name}
            </Typography>
            <IconButton
                aria-label='delete'
                className='close-button'
                onClick={() => deleteFavouriteCity(item._id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    
})
    return (
        <List>
            {result}
        </List>
    )
}


export default FavouritiesList;




