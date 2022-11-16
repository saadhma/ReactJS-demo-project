import React, { useEffect } from 'react';
import { HeaderComponent } from '../../components/Header';
import StandardImageList from '../../components/StandardImageList/StandardImageList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SortCollapsableMenu from '../../components/CollapsableMenu/SortCollapsableMenu.tsx';
import FilterCollapsableMenu from '../../components/CollapsableMenu/FilterCollapsableMenu.tsx';
import WhereToWatchCollapsableMenu from '../../components/CollapsableMenu/WhereToWatchCollapsableMenu.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOnAirTVShows } from '../../store/Actions/tvShowsActions';

export default function CurrentlyAiringTVShowsScreen() {

    const dispatch = useDispatch();
    const onAirTVShowsData = useSelector(state => state.tvShowsReducer?.get('onAirTVShows'));

    useEffect(() => {
        dispatch(fetchOnAirTVShows());
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
                                <h2> Currently Airing TV Shows </h2>
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
                            <StandardImageList dataList={onAirTVShowsData.results} />
                        </Grid>
                    </Grid>
            </div>
        </Box >
            </div >
        </div >
    );
}