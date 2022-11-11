import React from 'react';
import './LoginScreen.css';
import { HeaderComponent } from '../../components/Header';
import { TextField } from '@mui/material';

export default function LoginScreen() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ paddingTop: '75px', }}>
                <h2 className='text-style'> Login to your account </h2>
                <p className='paragraph-style'> In order to use the editing and rating capabilities of TMDB,
                    as well as get personal recommendations you will need to login to your account.
                    If you do not have an account, registering for an account is free and simple.
                    Click here to get started.</p>
                <p className='paragraph-style'> If you signed up but didn't get your verification email, click here to have it resent.</p>
                <div style={{ paddingInline: '30px', paddingBlock: '50px' }}>
                    <TextField sx={{ width: '95%' }} />
                </div>
                <div style={{ paddingInline: '30px' }}>
                    <TextField sx={{ width: '95%' }} />
                </div>
            </div>
        </div>
    );
}