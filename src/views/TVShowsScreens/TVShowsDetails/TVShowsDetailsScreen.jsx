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
import { fetchTVShowsCredits, fetchTVShowsDetails, fetchTVShowsKeywords, fetchTVShowsSeasonRecommendations, fetchTVShowsSeasonReviews } from '../../../store/Actions/tvShowsActions';
import HorizontalImageList from '../../../components/HorizontalImageList/HorizontalImageList';
import Link from '@mui/material/Link';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function TVShowsDetailsScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const loadingData = useSelector(state => state.tvShowsReducer?.get('loading'));
    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));
    const tvShowsCreditsData = useSelector(state => state.tvShowsReducer?.get('tvShowsCreditsData'));
    const tvShowsRecommendationsData = useSelector(state => state.tvShowsReducer?.get('tvShowsSeasonRecommendationsData'));
    const tvShowsReviewsData = useSelector(state => state.tvShowsReducer?.get('tvShowsSeasonReviewsData'));
    const tvShowsKeywordsData = useSelector(state => state.tvShowsReducer?.get('tvShowsKeywordsData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));
        dispatch(fetchTVShowsCredits(`${id}`));
        dispatch(fetchTVShowsSeasonRecommendations(`${id}`));
        dispatch(fetchTVShowsSeasonReviews(`${id}`));
        dispatch(fetchTVShowsKeywords(`${id}`));
    }, [dispatch]);

    console.log("loading", loadingData);
    console.log("details data", tvShowsDetailsData);
    console.log("credits data", tvShowsCreditsData);
    console.log("recommendations data", tvShowsRecommendationsData);
    console.log("reviews data", tvShowsReviewsData);
    console.log("keywords data", tvShowsKeywordsData);

    return (
        <React.Fragment>
            <HeaderComponent />
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={styles.bannerContainer}>
                <Grid item xs={2.3} style={styles.imageItemStyle}>
                    <img src={`${POSTER_IMAGE_BASE_URL}${tvShowsDetailsData?.poster_path}`} alt=''
                        style={styles.imageStyle} />
                </Grid>
                <Grid item xs={9.7} style={styles.detailItemStyle}>
                    <Typography variant="h4" style={styles.textStyle}>
                        {`${tvShowsDetailsData?.original_name} `}
                        ({tvShowsDetailsData?.first_air_date.substring(0, 4)}-{
                            tvShowsDetailsData?.status === "Returning Series" ? "" :
                                tvShowsDetailsData?.last_air_date.substring(0, 4)})
                    </Typography>
                    {tvShowsDetailsData?.genres.map((item) => (
                        <Typography variant="body1" style={styles.paragraphStyle}>
                            {item.name}
                        </Typography>
                    ))}
                    <Grid xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Grid item xs={3}>
                                <div style={styles.percentageDivStyle}>
                                    <div style={styles.circleStyle}>
                                        <p style={{ fontSize: 18 }}>{Math.round(tvShowsDetailsData?.vote_average / 0.1)}%</p>
                                        <div style={styles.innerCircleStyle}>
                                            <CircularProgres variant="determinate" value={Math.round(tvShowsDetailsData?.vote_average / 0.1)} style={{ color: Colors.lightGreenColor, width: 60, height: 60 }} />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body1" style={styles.textStyle}>
                                    User Score
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
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
                        <Link href={"/tv/" + id + "/cast"} underline="none">
                            <h3 className='heading-style'> Full Cast & Crew </h3>
                        </Link>
                    </Grid>
                    <h2> Current Season </h2>
                    {tvShowsDetailsData?.seasons.length === 0 ?
                        <Typography variant="body1">
                            No seasons data avaiable.
                        </Typography> :
                        <Grid container sx={{ paddingInline: "20px", paddingBottom: "20px" }}>
                            <Grid container sx={{ paddingRight: "30px", boxShadow: 2, borderRadius: 2 }}>
                                {<Grid item xs={2}>
                                    <img src={`${POSTER_IMAGE_BASE_URL}${tvShowsDetailsData?.seasons[0].poster_path}`} alt=''
                                        style={styles.posterImageStyle} />
                                </Grid>}
                                <Grid item xs={10} style={styles.detailItemStyle}>
                                    <Typography variant="h5">
                                        {tvShowsDetailsData?.seasons[0].name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {tvShowsDetailsData?.seasons[0].episode_count}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>}
                    <Grid container>
                        <Link href={"/tv/" + id + "/seasons"} underline="none" sx={{ paddingInline: 3 }}>
                            <h3 className='semi-heading-style'> View All Seasons </h3>
                        </Link>
                    </Grid>
                    <h2> Social </h2>
                    {tvShowsReviewsData?.results === [] ?
                        <Typography variant="body1">
                            We don't have any reviews for this tv show. Would you like to write one?
                        </Typography> :
                        <Grid container sx={{ paddingInline: "20px", paddingBottom: "20px" }}>
                            <Grid container sx={{ paddingInline: "30px", boxShadow: 2, borderRadius: 2 }}>
                                <Grid item xs={1}>
                                    <div style={styles.reviewDivStyle}>
                                        <div style={styles.reviewerNameStyle}>
                                            <Typography variant="h5">
                                                {tvShowsReviewsData?.results[0].author.substring(0, 1)}
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={11} style={styles.detailItemStyle}>
                                    <Typography variant="h5">
                                        A review by {tvShowsReviewsData?.results[0].author}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'gray', fontSize: 12 }}>
                                        Written by {tvShowsReviewsData?.results[0].author} on {tvShowsReviewsData?.results[0].created_at.substring(0, 10)}
                                    </Typography>
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {tvShowsReviewsData?.results[0].content}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>}
                    <Link href={"/tv/" + id + "/reviews"} underline="none" sx={{ paddingInline: 3 }}>
                        {tvShowsReviewsData?.results.length > 1 ?
                            <h3 className='semi-heading-style'> Read All Reviews </h3> : ""}
                    </Link>
                    <Grid container>
                        <h2 className='recommendations-div-style'> Recommendations </h2>
                        <ImageList
                            sx={{
                                gridAutoFlow: "column",
                                justifyContent: 'space-between',
                                alignItems: 'space-between',
                                paddingInline: '20px'
                            }}
                        >
                            {tvShowsRecommendationsData?.results.map((item) => (
                                <ImageListItem style={styles.recommendationsContainer}>
                                    <a href={"/tv/" + item.id}>
                                        <img src={`${POSTER_IMAGE_BASE_URL}${item.poster_path}`} alt='' style={styles.recommendationItemStyle} />
                                    </a>
                                    <div className='recommendations-paragraph-style'>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {Math.round(item.vote_average / 0.1)}%
                                        </div>
                                    </div>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
                <Grid container style={{ width: '25%' }}>
                    <Grid item sx={{ paddingInline: '20px' }}>
                        <h4> Status </h4>
                        <p> {tvShowsDetailsData?.status} </p>
                        <h4> Original Language </h4>
                        <p> {tvShowsDetailsData?.original_language} </p>
                        <h4> Network </h4>
                        <img src={`${POSTER_IMAGE_BASE_URL}${tvShowsDetailsData?.networks[0].logo_path}`} alt=''
                                        style={styles.networkImageStyle} />
                        <h4> Revenue </h4>
                        {/* <p> ${tvShowsDetailsData?.revenue}.00 </p> */}
                    </Grid>
                    <Grid item sx={{ paddingInline: '20px' }}>
                        <h4> Keywords </h4>
                        {tvShowsKeywordsData?.results?.length >= 1 ?
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[0].name} />
                                <KeywordButton name={tvShowsKeywordsData?.results[1].name} />
                            </div> :
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[0].name} />
                            </div>
                        }
                        {tvShowsKeywordsData?.results?.length >= 3 ?
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[2].name} />
                                <KeywordButton name={tvShowsKeywordsData?.results[3].name} />
                            </div> :
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[2].name} />
                            </div>
                        }
                        {/* {tvShowsKeywordsData?.results?.length >= 5 ?
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[4].name} />
                                <KeywordButton name={tvShowsKeywordsData?.results[5].name} />
                            </div> :
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[4].name} />
                            </div>
                        } */}
                        {/* {tvShowsKeywordsData?.results?.length >= 7 ?
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[6].name} />
                                <KeywordButton name={tvShowsKeywordsData?.results[7].name} />
                            </div> :
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[6].name} />
                            </div>
                        }
                        {tvShowsKeywordsData?.results?.length >= 9 ?
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[8].name} />
                                <KeywordButton name={tvShowsKeywordsData?.results[9].name} />
                            </div> :
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[8].name} />
                            </div>
                        }
                        {tvShowsKeywordsData?.results?.length >= 11 ?
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[10].name} />
                                <KeywordButton name={tvShowsKeywordsData?.results[11].name} />
                            </div> :
                            <div className='genre-section-style'>
                                <KeywordButton name={tvShowsKeywordsData?.results[10].name} />
                            </div>
                        } */}
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
        background: Colors.blackColor,
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
        paddingInline: 50
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
    posterImageStyle: {
        height: 200,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    networkImageStyle: {
        height: 50,
        objectFit: 'fit'
    },
}