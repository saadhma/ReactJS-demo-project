import React, { useEffect } from 'react';
import './HomeScreen.css';
import { HeaderComponent } from '../../components/Header';
import HorizontalImageList from '../../components/HorizontalImageList/HorizontalImageList';
import BasicTabs from '../../components/TabBar/TabBar.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../store/Actions/moviesActions';
import FooterComponent from '../../components/Footer/Footer';
import { Grid } from '@mui/material';

export default function HomeScreen() {

    const dispatch = useDispatch();
    const streammingMoviesData = useSelector(state => state.moviesReducer?.get('streammingMovies'));
    const freeMoviesData = useSelector(state => state.moviesReducer?.get('freeMovies'));
    const trendingMoviesData = useSelector(state => state.moviesReducer?.get('trendingMovies'));

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            <HeaderComponent />
            <Grid container style={{ paddingTop: '75px', paddingInline: '25px' }}>
                <Grid item xs={2}>
                    <h2> What's Popular </h2>
                </Grid>
                <Grid item xs={8}>
                    <BasicTabs tabs={4} />
                </Grid>
            </Grid>
            <HorizontalImageList moviesData={streammingMoviesData.results} />
            <Grid container style={{ paddingTop: '30px', paddingInline: '25px' }}>
                <Grid item xs={2}>
                    <h2> Free to Watch </h2>
                </Grid>
                <Grid item xs={8}>
                    <BasicTabs tabs={2} tab1={'Movies'} tab2={'TV'} />
                </Grid>
            </Grid>
            <HorizontalImageList moviesData={freeMoviesData.results} />
            <Grid container style={{ paddingTop: '30px', paddingInline: '25px' }}>
                <Grid item xs={2}>
                    <h2> Trending </h2>
                </Grid>
                <Grid item xs={8}>
                    <BasicTabs tabs={2} tab1={'Today'} tab2={'This Week'} />
                </Grid>
            </Grid>
            <HorizontalImageList moviesData={trendingMoviesData.results} />
            <FooterComponent/>
        </div>
    );
}