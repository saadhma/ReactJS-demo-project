import React, { useEffect, useState } from 'react';
import './SearchScreen.css';
import { HeaderComponent } from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../../constants/Colors';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { fetchSearchCollection, fetchSearchCompanies, fetchSearchKeywords, fetchSearchMovies, fetchSearchPeople, fetchSearchTVShows } from '../../store/Actions/searchActions';
import { POSTER_IMAGE_BASE_URL } from '../../constants/Constants';
import PersonImage from '../../assets/person-img.svg';
import PosterImage from '../../assets/posterImage.svg';

export default function SearchScreen() {

    const [options, setOptions] = useState([
        { id: "1", name: "Movies", selected: true },
        { id: "2", name: "People", selected: false },
        { id: "3", name: "Keywords", selected: false },
        { id: "4", name: "TV Shows", selected: false },
        { id: "5", name: "Collections", selected: false },
        { id: "6", name: "Companies", selected: false }
    ]);

    const [selectedId, setSelectedId] = useState("1");

    const dispatch = useDispatch();
    const searchMoviesData = useSelector(state => state.searchReducer?.get('searchMoviesList'));
    const searchTVShowsData = useSelector(state => state.searchReducer?.get('searchTVShowsList'));
    const searchPeopleData = useSelector(state => state.searchReducer?.get('searchPeopleList'));
    const searchCollectionData = useSelector(state => state.searchReducer?.get('searchCollectionList'));
    const searchCompaniesData = useSelector(state => state.searchReducer?.get('searchCompaniesList'));
    const searchKeywordsData = useSelector(state => state.searchReducer?.get('searchKeywordsList'));

    useEffect(() => {
        dispatch(fetchSearchMovies("1899"));
        dispatch(fetchSearchTVShows("1899"));
        dispatch(fetchSearchPeople("black adam"));
        dispatch(fetchSearchCollection("18"));
        dispatch(fetchSearchCompanies("18"));
        dispatch(fetchSearchKeywords("18"));
    }, [dispatch]);

    console.log("search movies data", searchMoviesData);
    console.log("search tv shows data", searchTVShowsData);
    console.log("search people data", searchPeopleData);
    console.log("search collection data", searchCollectionData);
    console.log("search companies data", searchCompaniesData);
    console.log("search keywords data", searchKeywordsData);

    return (
        <React.Fragment>
            <HeaderComponent />
            <TextField
                id="standard-basic" variant="standard"
                placeholder='Search for a movie, tv show, person...'
                prefix=''
                sx={{ paddingTop: '75px', width: '100%' }}
                InputProps={{
                    sx: { height: 40, paddingInline: '40px' },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: Colors.blackColor }} />
                        </InputAdornment>
                    ),
                }}
            />
            <Grid container style={styles.container}>
                <Grid item xs={2.5}>
                    <div className="div-style">
                        <Box
                            sx={{
                                background: Colors.blueColor, color: Colors.whiteColor,
                                paddingInline: '25px', paddingBlock: '15px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'
                            }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                Search Results
                            </Typography>
                        </Box>
                        <Box sx={{ color: Colors.blackColor, paddingBlock: '15px', }}>
                            {options.map((item) => (
                                <div className='benefit-section'
                                    style={{
                                        color: Colors.blackColor,
                                        background: item.selected ? Colors.greyColor : Colors.whiteColor,
                                    }}
                                    onClick={() => {
                                        setSelectedId(item.id)
                                        setOptions(
                                            options
                                                .map((todo) => (
                                                    todo.id === item.id
                                                        ? { ...todo, selected: true }
                                                        : { ...todo, selected: false }
                                                )
                                                ));
                                    }}>
                                    {item.name}
                                    <div className='item-section'>
                                        {item.id === "1" ?
                                            searchMoviesData?.results?.length :
                                            item.id === "2" ?
                                                searchPeopleData?.results?.length :
                                                item.id === "3" ?
                                                    searchKeywordsData?.results?.length :
                                                    item.id === "4" ?
                                                        searchTVShowsData?.results?.length :
                                                        item.id === "5" ?
                                                            searchCollectionData?.results?.length :
                                                            searchCompaniesData?.results?.length
                                        }
                                    </div>
                                </div>
                            ))}
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={9.5}>
                    {selectedId === "1" ?
                        <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                            {
                                searchMoviesData?.results?.length === 0 ?
                                    <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                        There are no movies that matched your query.
                                    </Typography> :
                                    searchMoviesData?.results?.map((item) => (
                                        <Grid container sx={{ height: "150px", paddingRight: "20px", marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
                                            <Grid item xs={1.5}>
                                                <img src={`${POSTER_IMAGE_BASE_URL}${item?.poster_path}`} alt=''
                                                    style={styles.imageStyle} />
                                            </Grid>
                                            <Grid item xs={10.5} style={styles.detailItemStyle}>
                                                <Typography variant="h6" style={styles.headingTextStyle}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="h7" style={styles.subHeadingTextStyle}>
                                                    {item.release_date}
                                                </Typography>
                                                <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                    {item.overview?.length > 225 ? `${item.overview?.substring(0, 225)}......` : item.overview}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))
                            }
                        </Grid> :
                        selectedId === "2" ?
                            <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                                {
                                    searchPeopleData?.results?.length === 0 ?
                                        <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                            There is no data that matched your query.
                                        </Typography> :
                                        searchPeopleData?.results?.map((item) => (
                                            <Grid container sx={{ height: "150px", paddingRight: "20px", marginBlock: "10px" }}>
                                                <Grid item xs={2}>
                                                    <img src={PersonImage} alt=''
                                                        style={styles.imageStyle} />
                                                </Grid>
                                                <Grid item xs={10} style={styles.detailItemStyle}>
                                                    <Typography variant="h6" style={styles.headingTextStyle}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="h7">
                                                        {item.known_for_department}
                                                    </Typography>
                                                    <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                        {item.known_for?.length > 0 ? `${item.known_for[0].title}` : ""}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        ))
                                }
                            </Grid> :
                            selectedId === "3" ?
                                <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                                    {
                                        searchKeywordsData?.results?.length === 0 ?
                                            <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                There is no data that matched your query.
                                            </Typography> :
                                            searchKeywordsData?.results?.map((item) => (
                                                <Grid container sx={{ paddingLeft: "20px", marginBlock: "10px" }}>
                                                    <Grid item>
                                                        <Typography variant="body1">
                                                            {item.name}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            ))
                                    }
                                </Grid> :
                                selectedId === "4" ?
                                    <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                                        {
                                            searchTVShowsData?.results?.length === 0 ?
                                                <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                    There are no movies that matched your query.
                                                </Typography> :
                                                searchTVShowsData?.results?.map((item) => (
                                                    <Grid container sx={{ height: "150px", paddingRight: "20px", marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
                                                        <Grid item xs={1.5}>
                                                            <img src={`${POSTER_IMAGE_BASE_URL}${item?.poster_path}`} alt=''
                                                                style={styles.imageStyle} />
                                                        </Grid>
                                                        <Grid item xs={10.5} style={styles.detailItemStyle}>
                                                            <Typography variant="h6" style={styles.headingTextStyle}>
                                                                {item.name}
                                                            </Typography>
                                                            <Typography variant="h7" style={styles.subHeadingTextStyle}>
                                                                {item.first_air_date}
                                                            </Typography>
                                                            <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                                {item.overview?.length > 225 ? `${item.overview?.substring(0, 225)}......` : item.overview}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                ))
                                        }
                                    </Grid> :
                                    selectedId === "5" ?
                                        <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                                            {
                                                searchCollectionData?.results?.length === 0 ?
                                                    <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                        There are no movies that matched your query.
                                                    </Typography> :
                                                    searchCollectionData?.results?.map((item) => (
                                                        <Grid container sx={{ height: "150px", paddingRight: "20px", marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
                                                            <Grid item xs={2}>
                                                                <img src={item.poster_path === null ? PosterImage : `${POSTER_IMAGE_BASE_URL}${item?.poster_path}`} alt=''
                                                                    style={styles.posterImageStyle} />
                                                            </Grid>
                                                            <Grid item xs={10} style={styles.collectionDetailItemStyle}>
                                                                <Typography variant="h6" style={styles.headingTextStyle}>
                                                                    {item.name}
                                                                </Typography>
                                                                {item.overview === "" ? null :
                                                                    <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                                        {item.overview?.length > 225 ? `${item.overview?.substring(0, 225)}......` : item.overview}
                                                                    </Typography>
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                    ))
                                            }
                                        </Grid> :
                                        selectedId === "6" ?
                                            <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                                                {
                                                    searchCompaniesData?.results?.length === 0 ?
                                                        <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                            There is no data that matched your query.
                                                        </Typography> :
                                                        searchCompaniesData?.results?.map((item) => (
                                                            <div>
                                                                <Grid container sx={{ paddingLeft: "35px", marginBlock: "10px" }}>
                                                                    <Grid item>
                                                                        <Typography variant="body1">
                                                                            {item.name}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                                <div className='spacer-style'>
                                                                    <div className='line-style' /></div>
                                                                <div></div>
                                                            </div>
                                                        ))
                                                }
                                            </Grid> :
                                            <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                                                <Typography variant="body1" sx={{ paddingBlock: "15px" }}>
                                                    There is no data that matched your query.
                                                </Typography>
                                            </Grid>}
                </Grid>
            </Grid>
        </React.Fragment >
    );
}

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        paddingBlock: 40,
        paddingInline: 40
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
    detailItemStyle: {
        paddingBlock: 15,
        paddingRight: 10,
    },
    collectionDetailItemStyle: {
        paddingBlock: 30,
        paddingRight: 10,
    },
    textStyle: {
        fontWeight: 'bold',
        color: Colors.whiteColor,
    },
    headingTextStyle: {
        fontWeight: 'bold',
        color: Colors.blackColor,
    },
    subHeadingTextStyle: {
        color: '#bdbdbd',
    },
    paragraphStyle: {
        fontWeight: 'normal',
        color: Colors.whiteColor
    },
    imageStyle: {
        height: 150,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    posterImageStyle: {
        height: 150,
        backgroundColor: Colors.greyColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
}