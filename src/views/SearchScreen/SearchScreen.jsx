import React, { useEffect } from 'react';
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

export default function SearchScreen() {

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
        dispatch(fetchSearchPeople("1899"));
        dispatch(fetchSearchCollection("1899"));
        dispatch(fetchSearchCompanies("1899"));
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
                                paddingInline: '25px', paddingBlock: '15px', borderRadius: '10px'
                            }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                Search Results
                            </Typography>
                        </Box>
                        <Box sx={{ color: Colors.blackColor, paddingBlock: '15px', }}>
                            <OptionSection title={"Movies"} count={searchMoviesData?.results?.length} />
                            <OptionSection title={"TV Shows"} count={searchTVShowsData?.results?.length} />
                            <OptionSection title={"People"} count={searchPeopleData?.results?.length} />
                            <OptionSection title={"Collections"} count={searchCollectionData?.results?.length} />
                            <OptionSection title={"Companies"} count={searchCompaniesData?.results?.length} />
                            <OptionSection title={"Keywords"} count={searchKeywordsData?.results?.length} />
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={9.5}>
                    <Grid container style={{ display: 'flex', flexDirection: 'column', paddingLeft: "30px" }}>
                        {searchMoviesData?.results?.map((item) => (
                            <Grid container sx={{ paddingRight: "20px", marginBlock: "10px", boxShadow: 2, borderRadius: 2 }}>
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
                                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                                        {item.overview}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    );
}

function OptionSection({ title, count }) {
    return (
        <div className='benefit-section'>
            {title}
            <div className='item-section'>
                {count}
            </div>
        </div>
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
        paddingBlock: 20,
        paddingRight: 20,
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
        borderRadius: 10,
    },
}