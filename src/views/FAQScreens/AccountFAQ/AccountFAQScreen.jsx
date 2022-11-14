import React from 'react';
import './AccountFAQScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';

export default function AccountFAQScreen() {
    return (
        <div>
            <HeaderComponent />
            <div className='parent-container'>
                <FAQ />
                <div className='child-container'>
                    <h2 className='text-style'> Account FAQ </h2>
                    <h3 className='text-style'> Where do I signup? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        Signing up for an account on TMDB is completely free to do and can be done by going
                        <a href='/SignUp' className='txt' > here</a>. The only information we will ask for is a valid email address.
                    </p>
                    <h3 className='text-style'> What are the benefits of singing up? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        There's lots of things you can do on TMDB with a registered account.
                        Signing up for an account will not only let you edit movie data but also rate movies and images, add movies to your favourite and personal watchlists as well as create and share new lists.
                        You will also be able to take part in the discussion area.
                    </p>
                    <h3 className='text-style'> Can I import an exported list from IMDb? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        Yes, you can! We currently support syncing an exported list to either your watchlist, favourite or rated lists.
                        To use an exported file from IMDb, go to the bottom of one of your lists and click "export this list".
                        IMDb will create a CSV file for you. When you login to TMDB, click the "Import List" link from your account page.
                        Drag and drop your CSV file and voila, syncing will begin.
                    </p>
                    <h3 className='text-style'> Can I have my own avatar? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        There's a chance your avatar appeared automatically, if it did that must mean you have an account at Gravatar.
                        We support both
                        <a href='/SignUp' className='txt' > Gravatar </a> and uploading a custom image. Whatever is easiest for you.
                    </p>
                    <h3 className='text-style'> Can I delete my account? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        Yes, of course. From your account settings page click the "Delete Account" link.
                    </p>
                    <h3 className='text-style'> What are the benefits of connecting my account to Twitter and/or Facebook? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        By connecting your account, you can easily share links to movies and TV shows to your friends and followers.
                        This is purely optional of course, but it makes sharing items as easy as about 2 clicks.
                    </p>
                    <h3 className='text-style'> Can I share my watchlist/favorite/rated lists? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        Each one of these lists can be toggled to be viewed publicly but are all private by default.
                    </p>
                    <h3 className='text-style'> Will movies automatically be removed from my watchlist once they've been rated? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        They are by default, yes. If this is not the setting you would like, you can change it from within your watchlist page.
                    </p>
                    <h3 className='text-style'> How do you build my recommendations? </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                    The more movies and TV shows you mark as a favorite, the more entries we can recommend for you. 
                    We will also automatically filter your rated items as well so you can hopefully find something new to watch instantly. 
                    Adding a minimum of 30 items will usually start to build an interesting list.
                    </p>
                </div>
            </div>
        </div>
    );
}