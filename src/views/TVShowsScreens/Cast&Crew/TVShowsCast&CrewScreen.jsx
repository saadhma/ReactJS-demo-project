import React, { useEffect } from 'react';
import './TVShowsCast&CrewScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import VerticalItemList from '../../../components/VerticalItemList/VerticalItemList';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';
import { fetchTVShowsCredits, fetchTVShowsDetails } from '../../../store/Actions/tvShowsActions';

export default function TVShowsCastAndCrewScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));
    const tvShowsCreditsData = useSelector(state => state.tvShowsReducer?.get('tvShowsCreditsData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));
        dispatch(fetchTVShowsCredits(`${id}`));
    }, [dispatch]);

    console.log("details data", tvShowsDetailsData);
    console.log("credits data", tvShowsCreditsData);

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
                    <img src={`${POSTER_IMAGE_BASE_URL}${tvShowsDetailsData?.poster_path}`} alt=''
                        style={styles.imageStyle} />
                </Grid>
                <Grid item xs={10} style={styles.detailItemStyle}>
                    <Typography variant="h4" style={styles.textStyle}>
                        {tvShowsDetailsData?.name}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {tvShowsDetailsData?.first_air_date}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        Back to main
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={styles.sectionContainer}>
                <Grid container style={{ width: '50%', display: 'flex', flexDirection: 'column'}}>
                    <h2> Cast ({tvShowsCreditsData?.cast.length})</h2>
                    <VerticalItemList dataList={tvShowsCreditsData?.cast}/>
                </Grid>
                <Grid container style={{ width: '50%', display: 'flex', flexDirection: 'column'}}>
                    <h2> Crew ({tvShowsCreditsData?.crew.length})</h2>
                    <VerticalItemList dataList={tvShowsCreditsData?.crew}/>
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
        height: 130,
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