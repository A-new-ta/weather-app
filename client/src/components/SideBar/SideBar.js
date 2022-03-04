import React from 'react';
import { SwipeableDrawer, Divider, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Switcher from '../shared/Switcher';
import ZipCode from '../ZipCode/ZipCode';
import AuthButton from '../AuthButton/AuthButton';
import useTheme from '../../hooks/useTheme';
import './SideBar.scss';


const SideBar = (props) => {
    const { isDark, setIsDark } = useTheme();
    return (
        <SwipeableDrawer 
            anchor="right"
            open={props.menuState}
            onClose={props.closeMenu}
            onOpen={props.openMenu}
        >
            <div className='sidebar'>
                <button
                    onClick={props.closeMenu}
                    role='button'
                    tabIndex={0}
                >
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                </button>
                <Divider />
                <button className='button'>
                    <AuthButton/>
                </button>
                <Divider />
                <Switcher
                    label={'Dark theme'}
                    labelPlacement={'top'}
                    value={'theme'}
                    onChange={() => setIsDark(!isDark)}
                />
                <Switcher
                    label={'°C | °F'}
                    labelPlacement={'top'}
                    value={'degrees'}
                />
                <ZipCode/>
                
                <Divider/>
            </div>

        </SwipeableDrawer>
    )
}

export default SideBar;
