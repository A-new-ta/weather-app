import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import AuthModal from '../AuthModal/AuthModal';
import AuthService from '../../service/AuthService';
import { AppContext } from '../../context/context';

const AuthButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { isLogin, setIsLogin } = useContext(AppContext);

    const openModal = () => {
        setIsVisible(true)
    }
    const closeModal = () => {
        setIsVisible(false)
    }
    const onClickLogout = () => {
        AuthService.logOut()
        setIsLogin(false)
    }

    return (
        <>
            {isLogin ? (
                <Button
                    variant='outlined'
                    onClick={onClickLogout}
                >
                    Logout
                </Button>
            ) : (
                <Button
                variant='outlined'
                className='auth-button'
                onClick={openModal}
            >
                Sign In
                </Button>
            )}
            <AuthModal
                visible={isVisible}
                onClose={closeModal}/>
        </>
    )
}

export default AuthButton;