import React, { useEffect } from 'react';
import './HomeScreen.css';
import { HeaderComponent } from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../store/Actions/moviesActions';
import FooterComponent from '../../components/Footer/Footer';
import { fetchOnAirTVShows, fetchPopularTVShows } from '../../store/Actions/tvShowsActions';
import BasicTabs from '../../components/TabBar/TabBar.tsx';

export default function HomeScreen() {

    const dispatch = useDispatch();
    const streammingMoviesData = useSelector(state => state.moviesReducer?.get('streammingMovies'));
    const nowPlayingMoviesData = useSelector(state => state.moviesReducer?.get('nowPlayingMovies'));
    const freeMoviesData = useSelector(state => state.moviesReducer?.get('freeMovies'));
    const trendingMoviesData = useSelector(state => state.moviesReducer?.get('trendingMovies'));
    const onAirTVShowsData = useSelector(state => state.tvShowsReducer?.get('onAirTVShows'));
    const popularTVShowsData = useSelector(state => state.tvShowsReducer?.get('popularTVShows'));

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchOnAirTVShows());
        dispatch(fetchPopularTVShows());
    }, [dispatch]);

    return (
        <div>
            <HeaderComponent />
            <BasicTabs tabs={4}
                streammingMoviesList={streammingMoviesData.results}
                tvShowsList={popularTVShowsData.results}
                inTheatresMovies={nowPlayingMoviesData.results} />
            <BasicTabs tabs={2} tab1={'Movies'} tab2={'TV'} freeMoviesList={freeMoviesData.results} tvShowsList={onAirTVShowsData.results}/>
            <BasicTabs tabs={2} tab1={'Today'} tab2={'This Week'} trendingMoviesList={trendingMoviesData.results} streammingMoviesList={streammingMoviesData.results}/>
            <FooterComponent />
        </div>
    );
}
