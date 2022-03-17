import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '@mui/material';
import { Formik } from 'formik';
import { signUpValidation } from './validationSchema';
import AuthService from '../../service/AuthService';


const SignUp = ({ onClose }) => {
    
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [message, setMessage] = useState('');

    const handleRegister = (email, password) => {
        setMessage('');
        setIsSuccessful(false);
        AuthService.signUp(email, password).then(
            (response) => {
                setMessage(response.data.message);
                setIsSuccessful(true)
            },
            (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setMessage(resMessage);
                setIsSuccessful(false);
            }
        )
    }
    
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
                const { email, password } = values
                handleRegister(email, password)
            }
            }
            validationSchema={signUpValidation}
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
                        fullWidth
                        margin='normal'
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        />
                    <TextField
                        label='Confirm your password'
                        type='password'
                        name='confirmPassword'
                        variant='standard'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        fullWidth
                        margin='normal'
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                    <Button
                        variant='outlined'
                        type='submit'
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                    >
                        Sing Up
                    </Button>
                    {message && (
                        <Alert severity = 'info'>
                            {message}
                        </Alert>
                    )}
                </form>
                )}
            </Formik>
    )
}

export default SignUp;