import React, { useEffect } from 'react';
import './TVShowsDetailsScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CircularProgres from '@mui/material/CircularProgress';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GradeIcon from '@mui/icons-material/Grade';
import Button from '@mui/material/Button';
import { fetchTVShowsCredits, fetchTVShowsDetails, fetchTVShowsKeywords } from '../../../store/Actions/tvShowsActions';
import HorizontalImageList from '../../../components/HorizontalImageList/HorizontalImageList';
import Link from '@mui/material/Link';

export default function TVShowsDetailsScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const loadingData = useSelector(state => state.tvShowsReducer?.get('loading'));
    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));
    const tvShowsCreditsData = useSelector(state => state.tvShowsReducer?.get('tvShowsCreditsData'));
    const tvShowsKeywordsData = useSelector(state => state.tvShowsReducer?.get('tvShowsKeywordsData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));
        dispatch(fetchTVShowsCredits(`${id}`));
        dispatch(fetchTVShowsKeywords(`${id}`));
    }, [dispatch]);

    console.log("loading", loadingData);
    console.log("details data", tvShowsDetailsData);
    console.log("credits data", tvShowsCreditsData);
    console.log("keywords data", tvShowsKeywordsData);

    return (
        <React.Fragment>
            <HeaderComponent />
            <Grid container style={styles.bannerContainer}>
                <Grid item xs={3} style={styles.imageItemStyle}>
                    <img src={`${POSTER_IMAGE_BASE_URL}${tvShowsDetailsData?.poster_path}`} alt=''
                        style={styles.imageStyle} />
                </Grid>
                <Grid item xs={9} style={styles.detailItemStyle}>
                    <Typography variant="h4" style={styles.textStyle}>
                        {tvShowsDetailsData?.original_name}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {tvShowsDetailsData?.first_air_date}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        Action
                    </Typography>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item sx={{ display: 'flex', width: '20%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Grid item>
                                <div style={styles.percentageDivStyle}>
                                    <div style={styles.circleStyle}>
                                        <p style={{ fontSize: 18 }}>{Math.round(tvShowsDetailsData?.vote_average / 0.1)}%</p>
                                        <div style={styles.innerCircleStyle}>
                                            <CircularProgres variant="determinate" value={Math.round(tvShowsDetailsData?.vote_average / 0.1)} style={{ color: Colors.lightGreenColor, width: 60, height: 60 }} />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="body1" style={styles.textStyle}>
                                    User Score
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ display: 'flex', width: '30%', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Grid item>
                                <div style={styles.iconDivStyle}>
                                    <PlaylistAddIcon sx={{ color: Colors.whiteColor }} />
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={styles.iconDivStyle}>
                                    <FavoriteIcon sx={{ color: Colors.whiteColor }} />
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={styles.iconDivStyle}>
                                    <BookmarkIcon sx={{ color: Colors.whiteColor }} />
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={styles.iconDivStyle}>
                                    <GradeIcon sx={{ color: Colors.whiteColor }} />
                                </div>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={styles.paragraphStyle}>
                                    Play Trailer
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" style={styles.paragraphStyle}>
                        {tvShowsDetailsData?.tagline}
                    </Typography>
                    <Typography variant="h6" style={styles.textStyle}>
                        Overview
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {tvShowsDetailsData?.overview}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={styles.sectionContainer}>
                <Grid container style={{ width: '75%', flexDirection: 'row', }}>
                    <h2> Series Cast </h2>
                    <HorizontalImageList dataList={tvShowsCreditsData?.cast} type={"TV Characters"} />
                    <Grid container>
                        <Link href={"/movie/" + id + "/cast"} underline="none">
                            <h3 className='heading-style'> Full Cast & Crew </h3>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container style={{ width: '25%' }}>
                    <Grid item sx={{ paddingInline: '20px' }}>
                        <h4> Status </h4>
                        {/* <p> {tvShowsDetailsData?.status} </p> */}
                        <h4> Original Language </h4>
                        {/* <p> {tvShowsDetailsData?.original_language} </p> */}
                        <h4> Budget </h4>
                        {/* <p> ${tvShowsDetailsData?.budget}.00 </p> */}
                        <h4> Revenue </h4>
                        {/* <p> ${tvShowsDetailsData?.revenue}.00 </p> */}
                    </Grid>
                    <Grid item sx={{ paddingInline: '20px' }}>
                        <h4> Keywords </h4>
                        <div className='genre-section-style'>
                            <KeywordButton name={tvShowsKeywordsData?.results[0].name} />
                            <KeywordButton name={tvShowsKeywordsData?.results[1].name} />
                        </div>
                        {/* <div className='genre-section-style'>
                            <KeywordButton name={tvShowsKeywordsData?.results[2].name} />
                            <KeywordButton name={tvShowsKeywordsData?.results[3].name} />
                        </div>
                        <div className='genre-section-style'>
                            <KeywordButton name={tvShowsKeywordsData?.results[4].name} />
                            <KeywordButton name={tvShowsKeywordsData?.results[5].name} />
                        </div> */}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

function KeywordButton({ name }) {
    return (
        <Button
            onClick={() => {

            }}
            sx={{
                textTransform: 'none',
                fontWeight: 'normal',
                borderRadius: 10,
                borderColor: Colors.greyColor,
                color: Colors.blackColor,
                background: Colors.greyColor,
                marginRight: 1,
            }}
            variant="outlined">
            {name}
        </Button>
    );
}

const styles = {
    recommendationsContainer: {
        margin: 5
    },
    bannerContainer: {
        width: '100%',
        background: Colors.blackColor,
        display: 'flex',
        paddingTop: 75,
    },
    sectionContainer: {
        width: '100%',
        display: 'flex',
        paddingInline: 25,
    },
    reviewContainer: {
        width: '100%',
        background: Colors.whiteColor,
        paddingBLock: 50,
        display: 'flex',
    },
    reviewerStyle: {
        borderRadius: 30,
        backgroundColor: Colors.blueColor
    },
    imageStyle: {
        height: 450,
        borderRadius: 10,
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
    innerCircleStyle: {
        position: 'absolute',
        display: 'flex',
    },
    percentageDivStyle: {
        position: 'relative',
        paddingBlock: 30,
        marginBottom: 20
    },
    circleStyle: {
        position: 'absolute',
        bottom: -15,
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
    iconDivStyle: {
        backgroundColor: Colors.headerColor,
        color: 'white',
        display: 'flex',
        width: 45,
        height: 45,
        borderRadius: ' 50%',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItemStyle: {
        paddingBlock: 20
    },
    recommendationItemStyle: {
        width: 250,
        height: 150,
        borderRadius: 10,
        cursor: 'pointer',
        objectFit: 'cover'
    },
}