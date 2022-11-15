import React, { useEffect } from 'react';
import './HomeScreen.css';
import { HeaderComponent } from '../../components/Header';
import HorizontalImageList from '../../components/HorizontalImageList/HorizontalImageList';
import BasicTabs from '../../components/TabBar/TabBar.tsx';
import FooterComponent from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../store/Actions/moviesActions';

export default function HomeScreen() {

    const dispatch = useDispatch();
    const streammingMoviesData = useSelector(state => state.moviesReducer?.get('streammingMovies'));
    const freeMoviesData = useSelector(state => state.moviesReducer?.get('freeMovies'));
    const trendingMoviesData = useSelector(state => state.moviesReducer?.get('trendingMovies'));

    useEffect(() => {
        dispatch(fetchMovies());
    },[dispatch]);

    return (
        <div>
            <HeaderComponent />
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '75px', }}>
                <h2 className='text-style'> What's Popular </h2>
                <BasicTabs tabs={4} />
            </div>
            <HorizontalImageList moviesData={streammingMoviesData.results}/>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', }}>
                <h2 className='text-style'> Free to Watch </h2>
                <BasicTabs tabs={2} tab1={'Movies'} tab2={'TV'} />
            </div>
            <HorizontalImageList moviesData={freeMoviesData.results}/>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', }}>
                <h2 className='text-style'> Trending </h2>
                <BasicTabs tabs={2} tab1={'Today'} tab2={'This Week'} />
            </div>
            <HorizontalImageList moviesData={trendingMoviesData.results}/>
            <FooterComponent/>
        </div>
    );
}