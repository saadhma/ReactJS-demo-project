import React, { useEffect } from 'react';
import './PopularPeopleScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import FooterComponent from '../../../components/Footer/Footer';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from '@mui/material/Typography';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { fetchPopularPeople } from '../../../store/Actions/peopleActions';

export default function PopularPeopleScreen() {

    const dispatch = useDispatch();
    const popularPeopleData = useSelector(state => state.peopleReducer?.get('popularPeopleData'));

    useEffect(() => {
        dispatch(fetchPopularPeople());
    }, [dispatch]);

    console.log("people data", popularPeopleData)

    return (
        <React.Fragment>
            <HeaderComponent />
            <Typography variant="h5" style={styles.container}>
                Popular People
            </Typography>
            <ImageList sx={{
                gridAutoFlow: "row",
                paddingBottom: '30px',
                paddingInline: '40px',
            }}
                cols={5} rowHeight={200}>
                {popularPeopleData?.results?.map((item) => (
                    <div className="movie-box">
                        <ImageListItem key={item.img}>
                            <a href={"/person/" + item.id}>
                                <img
                                    src={`${POSTER_IMAGE_BASE_URL}${item.profile_path}`}
                                    style={styles.imageItemStyle}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </a>
                            <div className="title-style">
                                {item.name}
                            </div>
                            <div className="subtitle-style">
                                {item.known_for_department}
                            </div>
                        </ImageListItem>
                    </div>
                ))}
            </ImageList>
            <FooterComponent />
        </React.Fragment>
    );
}

const styles = {
    container: {
        paddingTop: 75,
        paddingBottom: 25,
        paddingInline: 50,
        fontWeight: 'bold'
    },
    parentGrid: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingInline: 30
    },
    imageItemStyle: {
        width: "100%",
        height: 230,
        borderRadius: 5,
        objectFit: 'cover'
    },
    progressStyle: {
        margin: 2,
    },
}
