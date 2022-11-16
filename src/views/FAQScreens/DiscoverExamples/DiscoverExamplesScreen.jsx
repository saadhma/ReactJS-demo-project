import React from 'react';
import './DiscoverExamplesScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';
import { Grid } from '@mui/material';
import FooterComponent from '../../../components/Footer/Footer';

export default function DiscoverExamplesScreen() {
    return (
        <div>
            <HeaderComponent />
            <Grid container className='parent-container'>
                <FAQ />
                <Grid item xs={9}>
                    <div className='child-container'>
                        <h2 className='text-style'> Discover API Examples </h2>
                        <p className='paragraph-style'>
                            Our discover methods can be very powerful tools when you're looking for specific data.
                            Below are some examples to showcase some of the powerful things you can do.
                        </p>
                        <h3 className='text-style'> What movies are in theatres? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the most popular movies? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?sort_by=popularity.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the highest rated movies rated R? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the most popular kids movies? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What is are the best movies from 2010? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?primary_release_year=2010&sort_by=vote_average.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the best dramas that were released this year? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?with_genres=18&primary_release_year=2014</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the highest rated science fiction movies that Tom Cruise has been in? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the Will Ferrell's highest grossing comedies? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> Have Brad Pitt and Edward Norton ever been in a movie together? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?with_people=287,819&sort_by=vote_average.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> Has David Fincher ever worked with Rooney Mara? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?with_people=108916,7467&sort_by=popularity.desc</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are the best drama's? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10</mark>
                            </div>
                        </p>
                        <h3 className='text-style'> What are Liam Neeson's highest grossing rated 'R' movies? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            <div className='link-text'>
                                <mark style={{ background: "white", fontWeight: 'bold' }}>URL:</mark>&nbsp;&nbsp;
                                <mark style={{ background: "#D3D3D3" }}> /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896</mark>
                            </div>
                        </p>
                    </div>
                </Grid>
            </Grid>
            <FooterComponent />
        </div>
    );
}