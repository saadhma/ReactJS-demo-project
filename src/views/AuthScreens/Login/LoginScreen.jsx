import React from 'react';
import './LoginScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { Button, TextField } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import FooterComponent from '../../../components/Footer/Footer';

export default function LoginScreen() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ paddingTop: '75px', }}>
                <h2 className='text-style'> Login to your account </h2>
                <p className='paragraph-style'> In order to use the editing and rating capabilities of TMDB,
                    as well as get personal recommendations you will need to login to your account.
                    If you do not have an account, registering for an account is free and simple.
                    <a href='/SignUp' className='txt' > Click here </a>
                    to get started.</p>
                <p className='paragraph-style'> If you signed up but didn't get your verification email,
                    <a href='/ResendEmailVerification' className='txt' > click here </a>
                    to have it resent.</p>
                <div style={{ paddingInline: '30px', paddingTop: '20px', paddingBottom: '15px' }}>
                    <p> Username </p>
                    <TextField
                        sx={{ width: '95%' }}
                        InputProps={{ sx: { height: 40 } }}
                    />
                </div>
                <div style={{ paddingInline: '30px' }}>
                    <p> Password </p>
                    <TextField
                        sx={{ width: '95%' }}
                        InputProps={{ sx: { height: 40 } }}
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                    />
                </div>
                <div className='btn-div-style'>
                    <Button variant="contained"
                        style={{ maxWidth: 200, maxHeight: 50, minWidth: 100, minHeight: 30, marginRight: 20, 
                        borderRadius: 10, background: Colors.blueColor, textTransform: 'none', fontWeight: 'bold' }}>
                        Login</Button>
                    <a href='/ResetPassword' className='txt-password' > Reset password </a>
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}