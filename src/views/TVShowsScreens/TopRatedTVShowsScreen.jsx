import React, { useEffect } from 'react';
import { HeaderComponent } from '../../components/Header';
import StandardImageList from '../../components/StandardImageList/StandardImageList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SortCollapsableMenu from '../../components/CollapsableMenu/SortCollapsableMenu.tsx';
import FilterCollapsableMenu from '../../components/CollapsableMenu/FilterCollapsableMenu.tsx';
import WhereToWatchCollapsableMenu from '../../components/CollapsableMenu/WhereToWatchCollapsableMenu.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRatedTVShows } from '../../store/Actions/tvShowsActions';

export default function TopRatedTVShowsScreen() {

    const dispatch = useDispatch();
    const topRatedTVShowsData = useSelector(state => state.tvShowsReducer?.get('topRatedTVShows'));

    useEffect(() => {
        dispatch(fetchTopRatedTVShows());
    }, [dispatch]);

    return (
        <div>
            <HeaderComponent />
            <div style={{ paddingTop: '75px', }}>
                <Box sx={{ flexGrow: 1 }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <div style={{ alignItems: 'center', justifyContent: 'center', paddingInline: '40px' }}>
                                <h2> Top Rated TV Shows </h2>
                                <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                                <SortCollapsableMenu/>
                                </div>
                                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <FilterCollapsableMenu/>
                                </div>
                                <div style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                                <WhereToWatchCollapsableMenu/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <StandardImageList dataList={topRatedTVShowsData.results} />
                        </Grid>
                    </Grid>
            </div>
        </Box >
            </div >
        </div >
    );
}