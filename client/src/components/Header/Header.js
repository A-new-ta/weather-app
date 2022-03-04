import React, { useState } from 'react';
import './Header.scss';
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchForm from '../SearchForm/SearchForm';
import Switcher from '../shared/Switcher';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AuthButton from '../AuthButton/AuthButton';
import SideBar from '../SideBar/SideBar';

const Header = () => {
    
    const [menuState, setMenuState] = useState(false)
    const openMenu = () => {
        setMenuState(true)
    }
    const closeMenu = () => {
        setMenuState(false)
    }

    return (
        <header className='header'>
            <p>WeatherApp</p>
            <WeatherCard/>
            <SearchForm />
            <Switcher
                label={'°C | °F'}
                labelPlacement={'top'}
                value={'degrees'}
            />
                
            <AuthButton/>
            <IconButton onClick={openMenu}>
                <MenuIcon/>
            </IconButton>
            <SideBar
                menuState={menuState}
                openMenu={openMenu}
                closeMenu={closeMenu}
            />
        </header>
    )
}

export default Header;