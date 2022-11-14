import React from 'react';
import './GeneralFAQScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';

export default function GeneralFAQScreen() {
    return (
        <div>
            <HeaderComponent />
            <div className='parent-container'>
                <FAQ />
                <div className='child-container'>
                    <h2 className='text-style'> General FAQ </h2>
                    <h3 className='text-style'> Where did all of your data come from? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        You! Since starting this project in 2008, we've been lucky enough to have users just like you add and edit missing/incorrect data.
                        Think of TMDB as a very specialised version of Wikipedia where everything is editable but very specialised around only movie, TV and actor data.
                        We started with an initial data contribution from a project called
                        <a href='/SignUp' className='txt' > omdb </a> with only 10,000 movies in 2009. Everything added and edited since then has been users just like you!
                    </p>
                    <p className='paragraph-style'>
                        In October 2013, we finally added TV. Since we didn't want to start with an empty database we opted to bring an intial import of data from Freebase.
                        Unfortunately, Freebase is no longer online and was shut down in 2016.
                    </p>
                    <h3 className='text-style'> How many movies are on TMDB? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        As of this writing, we currently have 824,435 movies.
                    </p>
                    <h3 className='text-style'> How many TV shows are on TMDB? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        As of this writing, we currently have 141,688 tv shows.
                    </p>
                    <h3 className='text-style'> How many TV episodes are on TMDB? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        As of this writing, we currently have 3,460,006 tv episodes.
                    </p>
                    <h3 className='text-style'> How many people are on TMDB? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                    As of this writing, we currently have 2,695,879 people.
                    </p>
                    <h3 className='text-style'> Is TMDB on Twitter or Facebook? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                    We sure are! You can check us out on 
                    <a href='/SignUp' className='txt' > Twitter </a>
                    and 
                    <a href='/SignUp' className='txt' > Facebook</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}