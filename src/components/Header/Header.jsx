// import './Header.css';
// import React from "react";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import { Colors } from '../../constants/Colors';
// import logo from '../../assets/movie-portal-logo.svg';
// import plusIcon from '../../assets/plus-icon.svg';
// import searchIcon from '../../assets/searchIcon.svg';
// import { Box } from '@mui/system';
// import ButtonWithPopUpMenu from '../PopUpMenu/PopUpMenu.tsx';

// export default function HeaderComponent() {

//     return (
//             <AppBar
//             className='header'
//             style={{ backgroundColor: Colors.headerColor }}
//             position="absolute"
//             color="primary"
//             elevation={0}
//             sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
//             <Toolbar>
//                 <Box sx={{ width: '15%', flexDirection: 'row' }}>
//                     <a href='/'>
//                         <img
//                             src={logo}
//                             alt="T M D B"
//                         />
//                     </a>
//                 </Box>
//                 <Box sx={{ width: '55%', flexDirection: 'row' }}>
//                     <ButtonWithPopUpMenu items={4} buttonName={'Movies'} />
//                     <ButtonWithPopUpMenu items={4} buttonName={'TV Shows'} />
//                     <ButtonWithPopUpMenu items={1} buttonName={'People'} />
//                     <ButtonWithPopUpMenu items={4} buttonName={'More'} />
//                 </Box>
//                 <Box>
//                     <a href='/'>
//                         <img className='plus-icon-style'
//                             src={plusIcon}
//                             alt="plus"
//                         />
//                     </a>
//                 </Box>
//                 <Box>
//                     <Button
//                         className='lang-btn-style'
//                         href="#" 
//                         variant="outlined"
//                         sx={{ 
//                             minWidth: '10px',
//                             borderColor: 'white' }}>
//                         <text className='text-link'>
//                             EN
//                         </text>
//                     </Button>
//                     <Link
//                         className='text-link'
//                         variant="h8"
//                         href="/LoginScreen"
//                         color="inherit"
//                         underline="none"
//                     >
//                         Login
//                     </Link>
//                     <Link
//                         className='text-link'
//                         variant="h8"
//                         href="/SignUp"
//                         color="inherit"
//                         underline="none"
//                     >
//                         Join TMDB
//                     </Link>
//                 </Box>
//                 <Box>
//                     <a href='/SearchScreen'>
//                         <img className='search-icon-style'
//                             src={searchIcon}
//                             alt="search"
//                         />
//                     </a>
//                 </Box>
//             </Toolbar>
//         </AppBar >
//     );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../assets/movie-portal-logo.svg';
import { Colors } from '../../constants/Colors';
import { Grid } from '@mui/material';

const pages = ['Movies', 'TV Shows', 'People', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function HeaderComponent() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="static">
            <Container maxWidth="l">
                <Toolbar disableGutters>
                    <Grid container>
                        <Grid xs={2} item>
                            <a href='/'>
                                <img
                                    src={logo}
                                    alt="T M D B"
                                />
                            </a>
                        </Grid>

                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}