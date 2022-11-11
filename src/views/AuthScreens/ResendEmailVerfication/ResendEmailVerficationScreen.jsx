import React from 'react';
import './ResendEmailVerficationScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { Button, TextField } from '@mui/material';
import { Colors } from '../../../constants/Colors';

export default function ResendEmailVerificationScreen() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ paddingTop: '75px', paddingInline: '250px' }}>
                <h2 className='text-style'> Resend Activation Email </h2>
                <p className='paragraph-style'>
                Missing your account verification email? Enter your email below to have it resent.
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
                        Send</Button>
                    <a href='/LoginScreen' className='txt-cancel' > Cancel </a>
                </div>
            </div>
        </div>
    );
}