import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AuthModal from '../AuthModal/AuthModal';
// import './AuthButton.css';


const AuthButton = () => {
    const [visible, setVisible] = useState(false);
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    return (
        <>
            <Button
                variant='outlined'
                className='auth-button'
                onClick={openModal}
            >
                Sign In
            </Button>
            <AuthModal
                visible={visible}
                onClose={closeModal}/>
        </>
    )
}


export default AuthButton;