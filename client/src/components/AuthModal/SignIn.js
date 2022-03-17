import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '@mui/material';
import { Formik } from 'formik';
import { signInValidation } from './validationSchema';
import AuthService from '../../service/AuthService';
import { AppContext } from '../../context/context';

const SignIn = ({onClose}) => {
    const { isLogin, setIsLogin } = useContext(AppContext);
    const [message, setMessage] = useState('');

    const handleLogin = (email, password) => {
        setMessage('');
        setIsLogin(false);
        AuthService.signIn(email, password).then(
            (response) => {
                setIsLogin(true);
                onClose();
            },
            (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setMessage(resMessage);
            }
        )
    }
    const handleSubmitForm = (values) => {
        const { email, password } = values
        handleLogin(email, password)
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validateOnBlur
            onSubmit={handleSubmitForm}
            validationSchema={signInValidation}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <form className='form-sign'>
                        <TextField
                            label='Email'
                            type='email'
                            name='email'
                            variant='standard'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            // autoFocus
                            fullWidth
                            margin='normal'
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            />
                        <TextField
                            label='Password'
                            type='password'
                            name='password'
                            variant='standard'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            // autoFocus
                            fullWidth
                            margin='normal'
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        <Button
                            variant='outlined'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Sing In
                        </Button>
                        {message && (
                            <Alert severity = 'error'>
                                {message}
                            </Alert>
                        )}
                    </form>
                )}
        </Formik>
    )
}

export default SignIn;
