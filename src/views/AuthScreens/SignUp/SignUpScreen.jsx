import React from 'react';
import './SignUpScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { Button, TextField } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

export default function SignUpScreen() {
    return (
        <div>
            <HeaderComponent />
            <div className='parent-container'>
                <div className='child1-container'>
                    <BenefitSection />
                </div>
                <div className='child2-container'>
                    <h2 className='text-style'> Sign up for an account </h2>
                    <p className='paragraph-style'>
                        Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
                    </p>
                    <div style={{ paddingInline: '30px', paddingTop: '20px', paddingBottom: '15px' }}>
                        <p> Username </p>
                        <TextField
                            sx={{ width: '95%' }}
                            InputProps={{ sx: { height: 40 } }}
                        />
                    </div>
                    <div style={{ paddingInline: '30px' }}>
                        <p> Password (4 characters minimum) </p>
                        <TextField
                            sx={{ width: '95%' }}
                            InputProps={{ sx: { height: 40 } }}
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </div>
                    <div style={{ paddingInline: '30px' }}>
                        <p> Password Confirm </p>
                        <TextField
                            sx={{ width: '95%' }}
                            InputProps={{ sx: { height: 40 } }}
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </div>
                    <div style={{ paddingInline: '30px' }}>
                        <p> Email </p>
                        <TextField
                            sx={{ width: '95%' }}
                            InputProps={{ sx: { height: 40 } }}
                        />
                    </div>
                    <div style={{ paddingTop: '15px', paddingLeft: '5px' }}>
                        <p className='paragraph-style'>
                            By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.
                        </p>
                        </div>
                    <div className='btn-div-style'>
                        <Button variant="contained"
                            style={{
                                maxWidth: 200, maxHeight: 50, minWidth: 100, minHeight: 30, marginRight: 20,
                                borderRadius: 10, background: Colors.blueColor, textTransform: 'none', fontWeight: 'bold'
                            }}>
                            Sign Up</Button>
                        <a href='/LoginScreen' className='txt-cancel' > Cancel </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BenefitSection() {
    return (
        <div>
            <Box
                sx={{
                    background: Colors.blueColor, color: Colors.whiteColor,
                    paddingInline: '35px', paddingBlock: '15px', borderRadius: '10px'
                }}>
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Benefits of being a
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                    member
                </Typography>
            </Box>
            <Box sx={{ width: 300, height: 300, color: Colors.blackColor }}>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Find something to watch on your subscribed streaming services
                    </Typography>
                </div>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Log the movies and TV shows you have watched
                    </Typography>
                </div>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Keep track of your favourite movies and TV shows and get recommendations from them
                    </Typography>
                </div>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Build and maintain a personal watchlist
                    </Typography>
                </div>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Build custom mixed lists (movies and TV)
                    </Typography>
                </div>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Take part in movie and TV discussions
                    </Typography>
                </div>
                <div className='benefit-section'>
                    <div className='icon-style'>
                        <CheckIcon />
                    </div>
                    <Typography>
                        Contribute to, and improve the information in our database
                    </Typography>
                </div>
            </Box>
        </div>
    );
}