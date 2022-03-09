import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import { signUpValidation } from './validationSchema';
import AuthService from '../../service/AuthService';


const SignUp = ({onClose}) => {
    
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validateOnBlur
            // onSubmit={(values) => { console.log(values.email) }}
            onSubmit={(values) => {
                const { email, password } = values
                AuthService.signUp(email, password)
                onClose()
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
                        // autoFocus
                        fullWidth
                        margin='normal'
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        />
                        {/* {touched.email && errors.email && <span className='error'>{ errors.email}</span>} */}
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
                        {/* {touched.password && errors.password && <span className='error'>{errors.password}</span>} */}
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
                        {/* {touched.confirmPassword && errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>} */}
                    <Button
                        variant='outlined'
                        type='submit'
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                    >
                        Sing Up
                    </Button>
                </form>
                )}
            </Formik>
    )
}

export default SignUp;