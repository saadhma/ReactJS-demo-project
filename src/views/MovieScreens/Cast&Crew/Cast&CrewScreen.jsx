import React, { useEffect } from 'react';
import './Cast&CrewScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieCredits, fetchMovieDetails } from '../../../store/Actions/moviesActions';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import VerticalItemList from '../../../components/VerticalItemList/VerticalItemList';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';

export default function CastAndCrewScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const movieDetailData = useSelector(state => state.moviesReducer?.get('movieDetailsData'));
    const movieCreditsData = useSelector(state => state.moviesReducer?.get('movieCreditsData'));

    useEffect(() => {
        dispatch(fetchMovieDetails(`${id}`));
        dispatch(fetchMovieCredits(`${id}`));
    }, [dispatch]);

    console.log("details data", movieDetailData);
    console.log("credits data", movieCreditsData);

    return (
        <React.Fragment>
            <HeaderComponent />
            <Grid container style={styles.banner1Container}>
                    <ButtonWithPopUpMenu items={8} buttonName={'Overview'} />
                    <ButtonWithPopUpMenu items={4} buttonName={'Media'} />
                    <ButtonWithPopUpMenu items={2} buttonName={'Fandom'} />
                    <ButtonWithPopUpMenu items={3} buttonName={'Share'} />
            </Grid>
            <Grid container style={styles.banner2Container}>
                <Grid item xs={2} style={styles.imageItemStyle}>
                    <img src={`${POSTER_IMAGE_BASE_URL}${movieDetailData.poster_path}`} alt=''
                        style={styles.imageStyle} />
                </Grid>
                <Grid item xs={10} style={styles.detailItemStyle}>
                    <Typography variant="h4" style={styles.textStyle}>
                        {movieDetailData.original_title}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {movieDetailData.release_date}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        Back to main
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={styles.sectionContainer}>
                <Grid container style={{ width: '50%', display: 'flex', flexDirection: 'column'}}>
                    <h2> Cast ({movieCreditsData.cast.length})</h2>
                    <VerticalItemList dataList={movieCreditsData.cast}/>
                </Grid>
                <Grid container style={{ width: '50%', display: 'flex', flexDirection: 'column'}}>
                    <h2> Crew ({movieCreditsData.crew.length})</h2>
                    <VerticalItemList dataList={movieCreditsData.crew}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const styles = {
    banner1Container: {
        width: '100%',
        background: Colors.whiteColor,
        display: 'flex',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner2Container: {
        width: '100%',
        background: Colors.blackColor,
        display: 'flex',
    },
    sectionContainer: {
        width: '100%',
        display: 'flex',
        paddingInline: 50,
        paddingBlock: 25
    },
    imageStyle: {
        height: 100,
    },
    imageItemStyle: {
        paddingInline: 50,
        paddingBlock: 30
    },
    detailItemStyle: {
        paddingBlock: 30,
        paddingRight: 50
    },
    textStyle: {
        fontWeight: 'bold',
        color: Colors.whiteColor,
    },
    paragraphStyle: {
        fontWeight: 'normal',
        color: Colors.whiteColor
    },
}