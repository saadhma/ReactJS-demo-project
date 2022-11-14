import React from 'react';
import './ContactUsScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';

export default function ContactUsScreen() {
    return (
        <div>
            <HeaderComponent />
            <div className='parent-container'>
                <FAQ />
                <div className='child-container'>
                    <h2 className='text-style'> Staying In Touch </h2>
                    <p className='paragraph-style'>
                        If you're looking for some help, the best place to get support is our
                        <a href='/SignUp' className='txt' > support forums</a>.
                    </p>
                    <h3 className='text-style'> Email </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div></div>
                    <p className='paragraph-style'>
                        If you would like to contact us directly, you can use
                        <a href='/SignUp' className='txt' > this form</a>.
                    </p>
                    <h3 className='text-style'> Around the Web </h3>
                    <div className='spacer-style'>
                        <div className='line-style' /></div>
                    <div>
                    </div>
                    <p className='paragraph-style'>
                        <a href='/SignUp' className='txt' > Twitter </a>
                    </p>
                </div>
            </div>
        </div>
    );
}