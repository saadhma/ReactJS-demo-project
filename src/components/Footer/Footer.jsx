import React from "react";
import './Footer.css';
import { Button } from '@mui/material';
import { Colors } from '../../constants/Colors';
import FooterLogo from '../../assets/footer-logo.svg';

export default function FooterComponent() {
  return (
    <div className="container">
      <div className="section-style">
        <img className='logo-style'
          src={FooterLogo}
          alt="THE MOVIE DB"
        />
        <Button variant="contained"
          style={{
            maxWidth: 200, maxHeight: 50, minWidth: 100, minHeight: 30, marginRight: 20,
            borderRadius: 5, background: Colors.whiteColor, textTransform: 'none', fontWeight: 'bold',
            color: Colors.blueColor
          }}>
          JOIN THE COMMUNITY</Button>
      </div>
        <div className="section-style">
          <p className="heading-txt-style">
            THE BASICS
          </p>
          <a href='/' className='link-txt-style' > About TMDB </a>
          <a href='/ContactUsScreen' className='link-txt-style' > Contact Us </a>
          <a href='/' className='link-txt-style' > Support Forums </a>
          <a href='/documentation/api' className='link-txt-style' > API </a>
          <a href='/' className='link-txt-style' > System Status </a>
        </div>
        <div className="section-style">
          <p className="heading-txt-style">
            GET INVOLVED
          </p>
          <a href='/' className='link-txt-style' > Contribution Style </a>
          <a href='/' className='link-txt-style' > Add New Movie </a>
          <a href='/' className='link-txt-style' > Add New TV Show </a>
        </div>
        <div className="section-style">
          <p className="heading-txt-style">
            COMMUNITY
          </p>
          <a href='/' className='link-txt-style' > Guidelines </a>
          <a href='/' className='link-txt-style' > Discussions </a>
          <a href='/' className='link-txt-style' > Leaderboard </a>
          <a href='/' className='link-txt-style' > Twitter </a>
        </div>
        <div className="section-style">
          <p className="heading-txt-style">
            LEGAL
          </p>
          <a href='/TermsOfUseScreen' className='link-txt-style' > Terms of Use </a>
          <a href='/' className='link-txt-style' > API Terms of Use </a>
          <a href='/PrivacyPolicyScreen' className='link-txt-style' > Privacy Policy </a>
        </div>
      </div>
  );
}