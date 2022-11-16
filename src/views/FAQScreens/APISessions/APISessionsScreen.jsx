import React from 'react';
import './APISessionsScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';
import { Grid } from '@mui/material';
import FooterComponent from '../../../components/Footer/Footer';

export default function APISessionsScreen() {
    return (
        <div>
            <HeaderComponent />
            <Grid container className='parent-container'>
                <FAQ />
                <Grid item xs={9}>
                    <div className='child-container'>
                        <h2 className='text-style'> API Sessions </h2>
                        <p className='paragraph-style'>
                        In order for users to write data to their account via the API, we have created a user specific authentication workflow. Upon being completed successfully, the session id that is created can be used to do things like rate movies, add or remove items to a personal watchlist, and also create and edit lists.
                            <br></br><br></br>
                            Please consult the
                            <a href='/ContactUsScreen' className='txt' > official API documentation </a>for more information.
                        </p>
                    </div>
                </Grid>
            </Grid>
            <FooterComponent />
        </div>
    );
}