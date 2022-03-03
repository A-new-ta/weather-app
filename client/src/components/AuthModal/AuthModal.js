import React from 'react';
import { Button, Dialog, DialogContent, IconButton, TextField } from '@material-ui/core';
import  CloseIcon  from '@material-ui/icons/Close'



const AuthModal = (props) => {
    
    return (
    
        <Dialog 
            open={props.visible}
            onClose={props.onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogContent >
                <IconButton 
                    aria-label='close'
                    onClick={props.onClose}
                    
                >
                    <CloseIcon/>
                </IconButton>
                
                        <form>
                            <TextField
                                label='Email'
                                type='email'
                                variant='standard'
                                autoFocus
                                fullWidth
                                margin='normal' />
                            <TextField
                                label='Password'
                                type='password'
                                variant='standard'
                                fullWidth
                                margin='normal'/>
                            <Button
                                variant='outlined'
                                type='submit'
                        
                            >
                                Sing In
                            </Button>
                            <Button
                                variant='outlined'
                                type='submit'
                            >
                                Sign Up
                            </Button>
                        </form>
                    
            </DialogContent>
            
            
            </Dialog>
            
    )
}


export default AuthModal;