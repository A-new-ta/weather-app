import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

export const signInValidation = yup.object().shape({
    email: yup
        .string()
        .email('Enter a correct email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .minUppercase(1, 'Password must contain at least 1 uppercase letter')
        .minLowercase(1, 'Password must contain at least 1 lowercase letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 symbol')
        .required('Password is required')
})


export const signUpValidation = yup.object().shape({
    email: yup
        .string()
        .email('Enter a correct email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .minUppercase(1, 'Password must contain at least 1 uppercase letter')
        .minLowercase(1, 'Password must contain at least 1 lowercase letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 symbol')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password does not match')
        .required('Confirm your password')
})