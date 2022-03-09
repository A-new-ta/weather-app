import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import { signInValidation } from './validationSchema';
import AuthService from '../../service/AuthService';

const SignIn = ({onClose}) => {

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validateOnBlur
            // onSubmit={(values) => { console.log(values) }}
            onSubmit={(values) => {
                const { email, password } = values
                AuthService.signIn(email, password)
                onClose()
            }
            }
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
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                        >
                            Sing In
                        </Button>
                    </form>
                )}
        </Formik>
    )
}

export default SignIn;
