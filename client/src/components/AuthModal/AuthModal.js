import React, { useContext } from 'react';
import { Dialog, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import cn from 'classnames';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { ThemeContext } from '../../context/ThemeProvider';
import '@reach/tabs/styles.css'


const AuthModal = (props) => {
    
    const { modal, title, closeIcon } = useStyles();
    const { isDark } = useContext(ThemeContext);
    
    return (
        <Dialog 
            open={props.visible}
            onClose={props.onClose}
            aria-labelledby="form-dialog-title"
            PaperProps={{ className: modal }}
        >
            <DialogTitle className={cn('auth-modal', { dark: isDark })}>
                <div className={title}>
                    <div>
                        <Tabs
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="full width tabs example"
                        >
                            <TabList className='tabsnav'>
                                <Tab className='button' value={'sign_in'} >Sign In</Tab>
                                <Tab value={'sign_up'} >Sign Up</Tab>
                                <IconButton 
                                    aria-label='close'
                                    onClick={props.onClose}
                                >
                                    <CloseIcon className={closeIcon}/>
                                </IconButton>
                            </TabList>
                            <TabPanels>
                            <TabPanel value={'sign_in'}><SignIn onClose={props.onClose} /></TabPanel>
                            <TabPanel value={'sign_up'}><SignUp onClose={props.onClose} /></TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                   
                    </div>
            </DialogTitle>
            
            </Dialog>
            
    )
}


export default AuthModal;