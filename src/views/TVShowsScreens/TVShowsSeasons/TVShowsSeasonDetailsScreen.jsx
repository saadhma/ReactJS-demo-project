import React, { useEffect } from 'react';
import './TVShowsSeasonDetailsScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';
import { fetchTVShowsDetails, fetchTVShowsSeasonDetails, fetchTVShowsSeasonEpisodeImages } from '../../../store/Actions/tvShowsActions';
import PosterImage from '../../../assets/posterImage.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import VerticalItemList from '../../../components/VerticalItemList/VerticalItemList';

export default function TVShowsSeasonDetailsScreen() {


    const dispatch = useDispatch();
    const { id, index } = useParams();

    const tvShowsDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsDetailsData'));
    const tvShowsSeasonDetailsData = useSelector(state => state.tvShowsReducer?.get('tvShowsSeasonDetailsData'));
    const tvShowsSeasonEpisodeImagesData = useSelector(state => state.tvShowsReducer?.get('tvShowsSeasonEpisodeImagesData'));

    useEffect(() => {
        dispatch(fetchTVShowsDetails(`${id}`));
        dispatch(fetchTVShowsSeasonDetails(id, index));
        if (tvShowsDetailsData?.seasons.length > 0) {
            dispatch(fetchTVShowsSeasonEpisodeImages(id, index, `${tvShowsDetailsData?.seasons[index]?.episode_count}`));
        }
    }, [dispatch]);

    console.log("details data", tvShowsDetailsData);
    console.log("season details data", tvShowsSeasonDetailsData);
    console.log("season images data", tvShowsSeasonEpisodeImagesData);

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
                    <img src={`${POSTER_IMAGE_BASE_URL}${tvShowsSeasonDetailsData?.poster_path}`} alt=''
                        style={styles.imageStyle} />
                </Grid>
                <Grid item xs={10} style={styles.bannerDetailItemStyle}>
                    <Typography variant="h4" style={styles.textStyle}>
                        {tvShowsSeasonDetailsData?.name} ({tvShowsSeasonDetailsData?.air_date.substring(0,4)})
                    </Typography>
                    <Typography variant="body1" style={styles.paragraphStyle}>
                        Back to season list
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={styles.sectionContainer}>
                <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6">
                        Episodes {tvShowsSeasonDetailsData?.episodes?.length}
                    </Typography>
                    {tvShowsSeasonDetailsData?.episodes?.map((item, episodeNumber) => (
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
                                    {episodeNumber + 1}) {item.name}
                                </Typography>
                                <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                    {item.overview}
                                </Typography>
                            </Grid>
                            <Accordion
                                sx={{ width: '100%' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container sx={{ paddingInline: '20px' }} justify="space-around" spacing={25}>
                                        <Grid item xs>
                                            <Typography variant="body1" className='txt-options'>
                                                Videos
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body1" className='txt-options'>
                                                Images
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body1" className='txt-options'>
                                                Changes
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body1" className='txt-options'>
                                                Report
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body1" className='txt-options'>
                                                Edit
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{
                                        paddingInline: '10px', paddingBlock: '30px',
                                        width: '100%', display: 'flex', flexDirection: 'row'
                                    }}>
                                        <Grid item xs>
                                            <div class="headline">
                                                <h1>Crew </h1>
                                                <p>{item.crew.length}</p>
                                            </div>
                                            <div class="headline">
                                                <h1>{item.crew[0].job}: </h1>
                                                <p>{item.crew[0].original_name}</p>
                                            </div>
                                            <div class="headline">
                                                <h1>{item.crew[1].job}: </h1>
                                                <p>{item.crew[1].original_name}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body1" className='txt-options'>
                                                Full Cast & Crew
                                            </Typography>
                                        </Grid>
                                        <Grid container style={{ display: 'flex', flexDirection: 'row', paddingInline: '50px', paddingBlock: '25px', }}>
                                            <Grid container style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                                <div class="headline">
                                                    <h1>Guest Stars </h1>
                                                    <p>{item.guest_stars.length}</p>
                                                </div>
                                                <VerticalItemList dataList={item.guest_stars.slice(0, item.guest_stars.length / 2)} />
                                            </Grid>
                                            <Grid container style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                                <VerticalItemList dataList={item.guest_stars.slice(item.guest_stars.length / 2, item.guest_stars.length)} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ paddingInline: '10px' }}>
                                        <Grid item xs>
                                            <div class="headline">
                                                <h1>Episode Images </h1>
                                                <p>{tvShowsSeasonEpisodeImagesData[episodeNumber]?.stills?.length}</p>
                                            </div>
                                            <ImageList
                                                sx={{
                                                    gridAutoFlow: "column",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'space-between',
                                                }}>
                                                {tvShowsSeasonEpisodeImagesData[episodeNumber]?.stills.map((item) => (
                                                    <ImageListItem style={styles.stillImageContainer}>
                                                        <a href={"/"}>
                                                            <img src={`${POSTER_IMAGE_BASE_URL}${item.file_path}`} alt='' style={styles.stillImageItemStyle} />
                                                        </a>
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
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
        borderRadius: 10
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
    stillImageContainer: {
        margin: 5
    },
    stillImageItemStyle: {
        width: 200,
        height: 150,
        cursor: 'pointer',
        objectFit: 'cover'
    },
}