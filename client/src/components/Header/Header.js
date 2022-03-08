import React, { useContext, useState } from 'react';
import './Header.scss';
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchForm from '../SearchForm/SearchForm';
import Switcher from '../shared/Switcher';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AuthButton from '../AuthButton/AuthButton';
import SideBar from '../SideBar/SideBar';
import { AppContext } from '../../context/context';

const Header = () => {
    const { fahrenheit, toggleFahrenheit } = useContext(AppContext);
    const [menuState, setMenuState] = useState(false)
    const openMenu = () => {
        setMenuState(true)
    }
    const closeMenu = () => {
        setMenuState(false)
    }
    const changeDegrees = () => {
        fahrenheit === '°C' ? toggleFahrenheit('°F') : toggleFahrenheit('°C')
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
                onChange={changeDegrees}
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