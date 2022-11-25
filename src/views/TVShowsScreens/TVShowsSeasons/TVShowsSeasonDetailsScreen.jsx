import React, { useEffect } from 'react';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';
import { fetchTVShowsDetails, fetchTVShowsSeasonDetails } from '../../../store/Actions/tvShowsActions';
import PosterImage from '../../../assets/posterImage.svg';

export default function TVShowsSeasonDetailsScreen() {
    const dispatch = useDispatch();
    const { id, index } = useParams();

    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));
    const tvShowsSeasonDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsSeasonDetailsData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));
        dispatch(fetchTVShowsSeasonDetails(id, index));
    }, [dispatch]);

    console.log("id", id);
    console.log("id", index);
    console.log("details data", tvShowsDetailsData);
    console.log("season details data", tvShowsSeasonDetailsData);

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
                    <Typography variant="h6">
                        Episodes {tvShowsSeasonDetailsData?.episodes?.length}
                    </Typography>
                    {tvShowsSeasonDetailsData?.episodes?.map((item, index) => (
                        <Grid container sx={{ marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
                            <Grid item xs={2}>
                                {item.still_path === null ?
                                    <div style={styles.posterDivStyle}>
                                        <img src={PosterImage} alt='' style={{ width: '50px', height: '50px' }} />
                                    </div> :
                                    <img src={`${POSTER_IMAGE_BASE_URL}${item.still_path}`} alt=''
                                        style={styles.posterImageStyle} />}
                            </Grid>
                            <Grid item xs={10} style={styles.detailItemStyle}>
                                <Typography variant="h6">
                                    {index + 1} {item.name}
                                </Typography>
                                <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                    {item.overview}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
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
        paddingInline: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    bannerDetailItemStyle: {
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
        height: 130,
        width: 200,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        objectFit: 'cover'
    },
    posterDivStyle: {
        display: 'flex',
        background: Colors.greyColor,
        height: 130,
        width: 200,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
}