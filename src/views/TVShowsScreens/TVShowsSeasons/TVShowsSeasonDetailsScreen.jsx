import React, { useEffect } from 'react';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';
import { fetchTVShowsDetails } from '../../../store/Actions/tvShowsActions';

export default function TVShowsSeasonDetailsScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));

    }, [dispatch]);

    console.log("details data", tvShowsDetailsData?.seasons);

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
                <Grid item xs={10} style={styles.bannerDetailItemStyle}>
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
                <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid container sx={{ paddingInline: "10px" }}>
                        {tvShowsDetailsData?.seasons?.map((item) => (
                            <Grid container sx={{ marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
                                <Grid item xs={1.5}>
                                    <img src={`${POSTER_IMAGE_BASE_URL}${item.poster_path}`} alt=''
                                        style={styles.posterImageStyle} />
                                </Grid>
                                <Grid item xs={10.5} style={styles.detailItemStyle}>
                                    <Typography variant="h4">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {item.air_date.substring(0, 4)} | {item.episode_count} Episodes
                                    </Typography>
                                    <Typography variant="body1">
                                        Season {item.season_number} of {tvShowsDetailsData?.name} premiered on {item.air_date}
                                    </Typography>
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {item.overview}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
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
        fontWeight: 'bold',
        paddingRight: 50,
    },
    bannerDetailItemStyle : {
        paddingRight: 50,
        paddingBlock: 30,
    },
    textStyle: {
        fontWeight: 'bold',
        color: Colors.whiteColor,
    },
    headingTextStyle: {
        fontWeight: 'bold',
        color: Colors.blackColor,
    },
    paragraphStyle: {
        fontWeight: 'normal',
        color: Colors.whiteColor
    },
    reviewDivStyle: {
        paddingBlock: 30,
        marginBottom: 20
    },
    reviewerNameStyle: {
        backgroundColor: Colors.headerColor,
        color: 'white',
        display: 'flex',
        width: 60,
        height: 60,
        borderRadius: ' 50%',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: '60%',
        backgroundColor: Colors.headerColor,
        color: 'white',
        borderRadius: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingButtonStyle: {
        height: 30,
        backgroundColor: Colors.blackColor,
        color: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginInline: 20
    },
    posterImageStyle: {
        height: 200,
        borderRadius: 10,
    },
}