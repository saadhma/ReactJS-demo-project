import './Header.css';
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Colors } from '../../constants/Colors';
import logo from '../../assets/movie-portal-logo.svg';
import plusIcon from '../../assets/plus-icon.svg';
import { Box } from '@mui/system';
import ButtonWithPopUpMenu from '../PopUpMenu/PopUpMenu.tsx';

export default function HeaderComponent() {

    return (
            <AppBar
            className='header'
            style={{ backgroundColor: Colors.headerColor }}
            position="absolute"
            color="primary"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <Toolbar>
                <Box sx={{ width: '15%', flexDirection: 'row' }}>
                    <a href='/'>
                        <img
                            src={logo}
                            alt="T M D B"
                        />
                    </a>
                </Box>
                <Box sx={{ width: '60%', flexDirection: 'row' }}>
                    <ButtonWithPopUpMenu items={4} buttonName={'Movies'} />
                    <ButtonWithPopUpMenu items={4} buttonName={'TV Shows'} />
                    <ButtonWithPopUpMenu items={1} buttonName={'People'} />
                    <ButtonWithPopUpMenu items={4} buttonName={'More'} />
                </Box>
                <Box>
                    <a href='/'>
                        <img className='plus-icon-style'
                            src={plusIcon}
                            alt="plus"
                        />
                    </a>
                </Box>
                <Box>
                    <Button
                        className='lang-btn-style'
                        href="#" 
                        variant="outlined"
                        sx={{ 
                            minWidth: '10px',
                            borderColor: 'white' }}>
                        <text className='text-link'>
                            EN
                        </text>
                    </Button>
                    <Link
                        className='text-link'
                        variant="h8"
                        href="/LoginScreen"
                        color="inherit"
                        underline="none"
                    >
                        Login
                    </Link>
                    <Link
                        className='text-link'
                        variant="h8"
                        href="/SignUp"
                        color="inherit"
                        underline="none"
                    >
                        Join TMDB
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >
    );
}