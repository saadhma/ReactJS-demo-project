import React from 'react';
import './WebsiteFAQScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';
import { Grid } from '@mui/material';
import FooterComponent from '../../../components/Footer/Footer';

export default function WebsiteFAQScreen() {
    return (
        <div>
            <HeaderComponent />
            <Grid container className='parent-container'>
                <FAQ />
                <Grid item xs={9}>
                    <div className='child-container'>
                        <h2 className='text-style'> Website FAQ </h2>
                        <h3 className='text-style'> How can I contact TMDB? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            You can find our contact links
                            <a href='/ContactUsScreen' className='txt' > here </a>
                        </p>
                        <h3 className='text-style'> Do I have to have an account? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            No, you do not. You will need an account if you would like to access certain account features like rating movies and maintaining your favorites and/or watchlist.
                            You will also need an account to edit data.
                        </p>
                        <h3 className='text-style'> Does it cost to use the site? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            No, it is free to use our website.
                        </p>
                        <h3 className='text-style'> Can I help out with the website translations? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Yes, you can! We use a service called Locale for this. Our project page can be found
                            <a href='/' className='txt' > here </a> and everyone can contribiute!
                        </p>
                        <h3 className='text-style'> How can I use the data? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Our data can be used in many different ways.
                            A good showcase can be found on our apps page. You are strictly prohibited from scraping data from the website.
                        </p>
                        <h3 className='text-style'> How do I add a title? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Click the "Add New Movie" link in the top right corner of the website once you are signed up and logged in.
                        </p>
                        <h3 className='text-style'> How do I add or correct information? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            A series of "Edit" links will appear throughout the website once you are signed up and logged in.
                            Click on any one of these links to help us build our database.
                        </p>
                        <h3 className='text-style'> How do I correct a title? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            A series of "Edit" links will appear throughout the website once you are signed up and logged in.
                            Click on the "Edit" link next to the "Movie Facts" or "TV Show Facts" and you'll be taken to the "Primary Facts" edits page. From here, you will see fields to edit the original and translated titles.
                        </p>
                        <h3 className='text-style'> How do I correct a title? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            A series of "Edit" links will appear throughout the website once you are signed up and logged in.
                            Click on the "Edit" link next to the "Movie Facts" or "TV Show Facts" and you'll be taken to the "Primary Facts" edits page. From here, you will see fields to edit the original and translated titles.
                        </p>
                        <h3 className='text-style'> How do I add a title in pre-production? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Following the same steps above to get to the "Primary Facts" edit page, you will see a dropdown for the "Movie" or "TV Show" status and then set the field to "Planned".
                        </p>
                        <h3 className='text-style'> How do I add a title still in production? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Following the same steps above to get to the "Primary Facts" edit page, you will see a dropdown for the "Movie" or "TV Show" status and then set the field to "In Production".
                        </p>
                        <h3 className='text-style'> When will my updates be posted? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Edits are posted immediately on the website. They can take up to 12 hours to propagate to the API.
                        </p>
                        <h3 className='text-style'> Can I watch videos on TMDB? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Most of our movies and TV shows have trailers, clips and featurettes which can be viewed on TMDB.
                            However, we do not stream or play any of the actual movies or TV shows.
                        </p>
                        <h3 className='text-style'> Why can't I find what I am looking for? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            There are two common scenarios. First, the media has not been added to our database yet.
                            Second, it could be a misspelling, typo or foreign language issue.<br></br><br></br>
                            Movies and TV shows support translated titles as well as what we call "Alternative Titles".
                            A lot of times the issue is simply that the translated or alternative title hasn't been added.
                        </p>
                        <h3 className='text-style'> Do you have social features? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            We support connecting your Twitter and Facebook accounts for easy sharing of movies and TV shows.
                        </p>
                        <h3 className='text-style'> How do you calculate a content score? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            The content score is calculated with a series of validations we do on movies and TV shows to gauge their completeness.
                            <br></br><br></br>
                            For movies we check for:<br></br>
                            a director<br></br>
                            a writer<br></br>
                            four or more cast members<br></br>
                            an overview<br></br>
                            a poster<br></br>
                            a backdrop<br></br>
                            a release date<br></br>
                            a trailer<br></br>
                            For TV shows we check for:<br></br>
                            a creator<br></br>
                            four or more cast members<br></br>
                            an overview<br></br>
                            a poster<br></br>
                            a backdrop<br></br>
                            an air date<br></br>
                            genres
                        </p>
                        <h3 className='text-style'> Where does your data come from? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            You! Every title since 2009 has been added by users like yourself.
                        </p>
                        <h3 className='text-style'> Why are there titles in foreign languages? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            TMDb supports movies and data from every corner of the globe. It is part of what makes us unique and such a powerful tool.
                        </p>
                        <h3 className='text-style'> Can I use your logo? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Yes, as long as you are using our data and/or images. We have logos for attribution available here.
                        </p>
                        <h3 className='text-style'> What's the leaderboard? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            The leaderboard is a page where you can see the top 100 contributors (based on number of edits) for the previous 7 days.
                            If you don't see your name listed, get contributing!
                        </p>
                    </div>
                </Grid>
            </Grid>
            <FooterComponent/>
        </div>
    );
}