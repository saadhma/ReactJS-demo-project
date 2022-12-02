import React, { useEffect } from 'react';
import './TVShowReviewsScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import GradeIcon from '@mui/icons-material/Grade';
import { fetchTVShowsDetails, fetchTVShowsSeasonReviews } from '../../../store/Actions/tvShowsActions';

export default function TVShowReviewsScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));
    const tvShowsReviewsData = useSelector(state => state.tvShowsReducer?.get('tvShowsSeasonReviewsData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));
        dispatch(fetchTVShowsSeasonReviews(`${id}`));
    }, [dispatch]);

    console.log("details data", tvShowsDetailsData);
    console.log("reviews data", tvShowsReviewsData);

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
                        {tvShowsDetailsData?.name} {tvShowsDetailsData?.first_air_date.substring()}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        {tvShowsDetailsData?.release_date}
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        Back to main
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={styles.sectionContainer}>
                <Grid container style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
                    <Button variant="outlined" style={styles.buttonStyle}
                        startIcon={<EditIcon />}>
                        WRITE REVIEW
                    </Button>
                </Grid>
                <Grid container style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                    <Grid container sx={{ paddingInline: "20px" }}>
                        {tvShowsReviewsData?.results?.map((reviewItem) => (
                            <Grid container sx={{ paddingInline: "30px", marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
                                <Grid item xs={1}>
                                    <div style={styles.reviewDivStyle}>
                                        <div style={styles.reviewerNameStyle}>
                                            <Typography variant="h5">
                                                {reviewItem.author.substring(0, 1)}
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={11} style={styles.detailItemStyle}>
                                    <div className='div-rating-style'>
                                        <Typography variant="h5" style={styles.headingTextStyle}>
                                            A review by {reviewItem.author}
                                        </Typography>
                                        {reviewItem.author_details.rating === null ? "" :
                                            <Button variant="contained"
                                                startIcon={<GradeIcon />}
                                                style={styles.ratingButtonStyle}>
                                                {reviewItem.author_details.rating < 1 ? `${reviewItem.author_details.rating}` :
                                                    `${reviewItem.author_details.rating}.0`}</Button>}
                                    </div>
                                    <div class="headline">
                                        <p>Written by </p>
                                        <h1>{reviewItem.author} </h1>
                                        <p>on {reviewItem.created_at.substring(0, 10)}</p>
                                    </div>
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {reviewItem.content}
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
        borderRadius: 10
    },
    imageItemStyle: {
        paddingInline: 50,
        paddingBlock: 30
    },
    detailItemStyle: {
        paddingBlock: 30,
        paddingRight: 50,
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
}