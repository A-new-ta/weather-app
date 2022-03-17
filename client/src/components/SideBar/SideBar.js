import React, { useContext } from 'react';
import { SwipeableDrawer, Divider, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Switcher from '../shared/Switcher';
import ZipCode from '../ZipCode/ZipCode';
import AuthButton from '../AuthButton/AuthButton';
import cn from 'classnames';
import { AppContext } from '../../context/context';
import { ThemeContext } from '../../context/ThemeProvider';
import FavouritiesList from '../FavouritiesList/FavouritiesList';


const SideBar = (props) => {
    const { temperatureUnit, setTemperatureUnit } = useContext(AppContext);
    const changeDegrees = () => {
        temperatureUnit === '°C' ? setTemperatureUnit('°F') : setTemperatureUnit('°C')
    }
    const { isDark, setIsDark } = useContext(ThemeContext);
    
    return (
        <SwipeableDrawer className={cn('swipeable-drawer', {dark: isDark})}
            anchor="right"
            open={props.menuState}
            onClose={props.closeMenu}
            onOpen={props.openMenu}
        >
            <div className='sidebar'>
                <div
                    onClick={props.closeMenu}
                    role='button'
                    tabIndex={0}
                >
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
                <Divider />
                <div className='button'>
                    <AuthButton/>
                </div>
                <Divider />
                <Switcher
                    label={'Dark theme'}
                    labelPlacement={'top'}
                    value={'theme'}
                    onChange={() => setIsDark(!isDark)}
                    checked={isDark}
                />
                <Switcher
                    label={'°C | °F'}
                    labelPlacement={'top'}
                    value={'degrees'}
                    onChange={changeDegrees}
                    checked={temperatureUnit === '°F'}
                />
                <ZipCode/>
                <Divider />
                <FavouritiesList/>
            </div>

        </SwipeableDrawer>
    )
}

export default SideBar;
