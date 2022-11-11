import React from 'react';
import './ResetPasswordScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { Button, TextField } from '@mui/material';
import { Colors } from '../../../constants/Colors';

export default function ResetPasswordScreen() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ paddingTop: '75px', paddingInline: '200px' }}>
                <h2 className='text-style'> Reset Password </h2>
                <p className='paragraph-style'>
                    Enter the email you used to sign up for a TMDB account and we'll send you the steps required to reset your password.
                </p>
                <div style={{ paddingInline: '30px', paddingTop: '20px', paddingBottom: '15px' }}>
                    <p> Email </p>
                    <TextField
                        sx={{ width: '95%' }}
                        InputProps={{ sx: { height: 40 } }}
                        floatingLabelText="Password"
                        placeholder="What's your email?"
                        variant="outlined"
                    />
                </div>
                <div className='btn-div-style'>
                    <Button variant="contained"
                        style={{ maxWidth: 200, maxHeight: 50, minWidth: 100, minHeight: 30, marginRight: 20, borderRadius: 10, 
                        background: Colors.blueColor, textTransform: 'none', fontWeight: 'bold' }}>
                        Continue</Button>
                    <a href='/LoginScreen' className='txt-cancel' > Cancel </a>
                </div>
            </div>
        </div>
    );
}