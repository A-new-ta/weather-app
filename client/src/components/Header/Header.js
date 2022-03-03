import React, { useState } from 'react';
import './Header.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchForm from '../SearchForm/SearchForm';
import SwitcherDegrees from '../SwitcherDegrees/SwitcherDegrees';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import RightMenu from '../RightMenu/RightMenu';
import AuthButton from '../AuthButton/AuthButton';

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
            <SwitcherDegrees />
            <AuthButton/>
            <IconButton onClick={openMenu}>
                <MenuIcon/>
            </IconButton>
            <RightMenu
                menuState={menuState}
                openMenu={openMenu}
                closeMenu={closeMenu}
            />
        </header>
    )
}

export default Header;