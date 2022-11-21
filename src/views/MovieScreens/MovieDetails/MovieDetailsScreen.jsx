import React, { useEffect } from 'react';
import './MovieDetailsScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieCredits, fetchMovieDetails, fetchMovieKeywords, fetchMovieRecommendations, fetchMovieReviews } from '../../../store/Actions/moviesActions';
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
import HorizontalImageList from '../../../components/HorizontalImageList/HorizontalImageList';
import Link from '@mui/material/Link';

export default function MovieDetailsScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const loadingData = useSelector(state => state.moviesReducer?.get('loading'));
    const movieDetailData = useSelector(state => state.moviesReducer?.get('movieDetailsData'));
    const movieKeywordsData = useSelector(state => state.moviesReducer?.get('movieKeywordsData'));
    const movieCreditsData = useSelector(state => state.moviesReducer?.get('movieCreditsData'));
    const movieReviewsData = useSelector(state => state.moviesReducer?.get('movieReviewsData'));
    const movieRecommendationsData = useSelector(state => state.moviesReducer?.get('movieRecommendationsData'));

    useEffect(() => {
        dispatch(fetchMovieDetails(`${id}`));
        dispatch(fetchMovieCredits(`${id}`));
        dispatch(fetchMovieKeywords(`${id}`));
        dispatch(fetchMovieReviews(`${id}`));
        dispatch(fetchMovieRecommendations(`${id}`));
    }, [dispatch]);

    console.log("loading", loadingData);
    console.log("details data", movieDetailData);
    console.log("keywords data", movieKeywordsData);
    console.log("credits data", movieCreditsData);
    console.log("reviews data", movieReviewsData);
    console.log("recommendations data", movieRecommendationsData);

    return (
        <React.Fragment>
            <HeaderComponent />
            <Grid container style={styles.bannerContainer}>
                <Grid item xs={3} style={styles.imageItemStyle}>
                    <img src={`${POSTER_IMAGE_BASE_URL}${movieDetailData?.poster_path}`} alt=''
                        style={styles.imageStyle} />
                </Grid>
                <Grid item xs={9} style={styles.detailItemStyle}>
                    <Typography variant="h4" style={styles.textStyle}>
                        {movieDetailData?.original_title}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {movieDetailData?.release_date}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        Action
                    </Typography>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item sx={{ display: 'flex', width: '20%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Grid item>
                                <div style={styles.percentageDivStyle}>
                                    <div style={styles.circleStyle}>
                                        <p style={{ fontSize: 18 }}>{Math.round(movieDetailData?.vote_average / 0.1)}%</p>
                                        <div style={styles.innerCircleStyle}>
                                            <CircularProgres variant="determinate" value={Math.round(movieDetailData?.vote_average / 0.1)} style={{ color: Colors.lightGreenColor, width: 60, height: 60 }} />
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
                        {movieDetailData?.tagline}
                    </Typography>
                    <Typography variant="h6" style={styles.textStyle}>
                        Overview
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {movieDetailData?.overview}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={styles.sectionContainer}>
                <Grid container style={{ width: '75%', flexDirection: 'row', }}>
                    <h2> Top Billed Cast </h2>
                    <HorizontalImageList dataList={movieCreditsData?.cast} type={"Characters"} />
                    <Grid container>
                        <Link href={"/movie/" + id + "/cast"} underline="none">
                            <h3 className='heading-style'> Full Cast & Crew </h3>
                        </Link>
                    </Grid>
                    <h2 className='heading-style'> Social </h2>
                    {movieReviewsData?.results === [] ?
                        <Typography variant="body1">
                            We don't have any reviews for this movie. Would you like to write one?
                        </Typography> :
                        <Grid container sx={{ paddingInline: "20px", paddingBottom: "20px" }}>
                            <Grid container sx={{ paddingInline: "30px", boxShadow: 2, borderRadius: 2 }}>
                                <Grid item xs={1}>
                                    <div style={styles.reviewDivStyle}>
                                        <div style={styles.reviewerNameStyle}>
                                            <Typography variant="h5">
                                                {movieReviewsData?.results[0].author.substring(0, 1)}
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={11} style={styles.detailItemStyle}>
                                    <Typography variant="h5">
                                        A review by {movieReviewsData?.results[0].author}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'gray', fontSize: 12 }}>
                                        Written by {movieReviewsData?.results[0].author} on {movieReviewsData?.results[0].created_at.substring(0, 10)}
                                    </Typography>
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {movieReviewsData?.results[0].content}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>}
                    <Link href={"/movie/" + id + "/reviews"} underline="none" sx={{ paddingInline: 3 }}>
                        {movieReviewsData?.results.length > 1 ?
                            <h3 className='semi-heading-style'> Read All Reviews </h3> : ""}
                    </Link>
                    <Grid container>
                        <h2 className='recommendations-div-style'> Recommendations </h2>
                        <HorizontalImageList dataList={movieCreditsData?.cast} type={"Characters"} />
                    </Grid>
                </Grid>
                <Grid container style={{ width: '25%' }}>
                    <Grid item sx={{ paddingInline: '20px' }}>
                        <h4> Status </h4>
                        <p> {movieDetailData?.status} </p>
                        <h4> Original Language </h4>
                        <p> {movieDetailData?.original_language} </p>
                        <h4> Budget </h4>
                        <p> ${movieDetailData?.budget}.00 </p>
                        <h4> Revenue </h4>
                        <p> ${movieDetailData?.revenue}.00 </p>
                    </Grid>
                    <Grid item sx={{ paddingInline: '20px' }}>
                        <h4> Keywords </h4>
                        <div className='genre-section-style'>
                            <KeywordButton name={movieKeywordsData?.keywords[0].name} />
                            <KeywordButton name={movieKeywordsData?.keywords[1].name} />
                            <KeywordButton name={movieKeywordsData?.keywords[2].name} />
                        </div>
                        <div className='genre-section-style'>
                            <KeywordButton name={movieKeywordsData?.keywords[3].name} />
                            <KeywordButton name={movieKeywordsData?.keywords[4].name} />
                        </div>
                        <div className='genre-section-style'>
                            <KeywordButton name={movieKeywordsData?.keywords[5].name} />
                            <KeywordButton name={movieKeywordsData?.keywords[6].name} />
                        </div>
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
}