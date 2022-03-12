import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AuthModal from '../AuthModal/AuthModal';

const AuthButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const openModal = () => {
        setIsVisible(true)
    }
    const closeModal = () => {
        setIsVisible(false)
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
                visible={isVisible}
                onClose={closeModal}/>
        </>
    )
}

export default AuthButton;