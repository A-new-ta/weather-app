import React from 'react';
import { SwipeableDrawer, Divider, IconButton, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwitcherDegrees from '../SwitcherDegrees/SwitcherDegrees';
import SwitcherTheme from '../SwitcherTheme/SwitcherTheme';
import ZipCode from '../ZipCode/ZipCode';
import AuthButton from '../AuthButton/AuthButton';
import './RightMenu.css';


const RightMenu = (props) => {
    
    return (
        <SwipeableDrawer 
            anchor="right"
            open={props.menuState}
            onClose={props.closeMenu}
            onOpen={props.openMenu}
        >
            <div className='RightMenu'>
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
                <SwitcherTheme/>
                <SwitcherDegrees />
                <ZipCode/>
                
                <Divider/>
            </div>

        </SwipeableDrawer>
    )
}

export default RightMenu;
