import React, { useContext, useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchForm from '../SearchForm/SearchForm';
import Switcher from '../shared/Switcher';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AuthButton from '../AuthButton/AuthButton';
import SideBar from '../SideBar/SideBar';
import { AppContext } from '../../context/context';

const Header = () => {
    const { temperatureUnit, setTemperatureUnit } = useContext(AppContext);
    const [isMenu, setIsMenu] = useState(false)
    const openMenu = () => {
        setIsMenu(true)
    }
    const closeMenu = () => {
        setIsMenu(false)
    }
    const changeDegrees = () => {
        temperatureUnit === '°C' ? setTemperatureUnit('°F') : setTemperatureUnit('°C')
    }

    return (
        <header className='header'>
            <h1 className='name'>WeatherApp</h1>
            <WeatherCard/>
            <div className='button-block'>
            <SearchForm />
                <div className='switcher-block'>
                    <Switcher
                        label={'°C | °F'}
                        labelPlacement={'top'}
                        value={'degrees'}
                        onChange={changeDegrees}
                        checked={temperatureUnit === '°F'}
                    />
                        
                        <AuthButton />
                </div>
            </div>
            <div className='close-button'>
                <IconButton onClick={openMenu}
                    className='icon-button'
                >
                <MenuIcon/>
            </IconButton>
            </div>
            <SideBar
                menuState={isMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
            />
        </header>
    )
}

export default Header;