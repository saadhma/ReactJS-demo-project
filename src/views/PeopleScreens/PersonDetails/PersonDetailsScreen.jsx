import React, { useEffect } from 'react';
import './PersonDetailsScreen.css';
import { HeaderComponent } from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Colors } from '../../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from '../../../constants/Constants';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonWithPopUpMenu from '../../../components/PopUpMenu/PopUpMenu.tsx';
import { fetchPersonCareerDetails, fetchPersonCombinedCredits, fetchPersonDetails } from '../../../store/Actions/peopleActions';

export default function PersonDetailsScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const personDetailsData = useSelector(state => state.peopleReducer?.get('personDetailsData'));
    const personCareerDetailsData = useSelector(state => state.peopleReducer?.get('personCareerDetailsData'));
    const personCombinedCreditsData = useSelector(state => state.peopleReducer?.get('personCareerDetailsData'));

    useEffect(() => {
        dispatch(fetchPersonDetails(`${id}`));
        dispatch(fetchPersonCareerDetails(`${id}`));
        dispatch(fetchPersonCombinedCredits(`${id}`));
    }, [dispatch]);

    console.log("person details data", personDetailsData);
    console.log("person career details data", personCareerDetailsData);
    console.log("person combined credits data", personCombinedCreditsData);

    return (
        <React.Fragment>
            <HeaderComponent />
            <Grid container style={styles.banner1Container}>
                <ButtonWithPopUpMenu items={8} buttonName={'Overview'} />
                <ButtonWithPopUpMenu items={4} buttonName={'Media'} />
                <ButtonWithPopUpMenu items={2} buttonName={'Fandom'} />
                <ButtonWithPopUpMenu items={3} buttonName={'Share'} />
            </Grid>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={styles.banner2Container}>
                <Grid item xs={2.5} style={styles.imageItemStyle}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src={`${POSTER_IMAGE_BASE_URL}${personDetailsData?.profile_path}`} alt=''
                            style={styles.imageStyle} />
                        <Typography variant="h6" sx={{ paddingBlock: "10px" }}>
                            Personal Info
                        </Typography>
                        <Typography variant="h7" sx={{ paddingBlock: "5px", fontWeight: 'bold' }}>
                            Known For
                        </Typography>
                        <Typography variant="h7">
                            {personDetailsData?.known_for_department}
                        </Typography>
                        <Typography variant="h7" sx={{ paddingTop: "20px", paddingBottom: "5px", fontWeight: 'bold' }}>
                            Gender
                        </Typography>
                        <Typography variant="h7">
                            {personDetailsData?.gender === 2 ? "Male" : "Female"}
                        </Typography>
                        <Typography variant="h7" sx={{ paddingTop: "20px", paddingBottom: "5px", fontWeight: 'bold' }}>
                            Birthdate
                        </Typography>
                        <Typography variant="h7">
                            {personDetailsData?.birthday}
                        </Typography>
                        <Typography variant="h7" sx={{ paddingTop: "20px", paddingBottom: "5px", fontWeight: 'bold' }}>
                            Place of Birth
                        </Typography>
                        <Typography variant="h7">
                            {personDetailsData?.place_of_birth}
                        </Typography>
                        <Typography variant="h7" sx={{ paddingTop: "20px", paddingBottom: "5px", fontWeight: 'bold' }}>
                            Also Known As
                        </Typography>
                        {personDetailsData?.also_known_as.map((item) => (
                            <Typography variant="body1" style={styles.paragraphStyle}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={9.5} style={styles.detailItemStyle}>
                    <Typography variant="h4" sx={{ paddingBlock: "10px", fontWeight: 'bold' }}>
                        {personDetailsData?.name}
                    </Typography>
                    <Typography variant="h5" sx={{ paddingBlock: "10px" }}>
                        Biography
                    </Typography>
                    <Typography variant="body1" sx={{ paddingBlock: "10px" }}>
                        {personDetailsData?.biography}
                    </Typography>
                    <Typography variant="h5" sx={{ paddingBlock: "10px" }}>
                        Acting
                    </Typography>
                    <CareerSection dataList={personCareerDetailsData} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

function CareerSection({ dataList }) {
    return (
        <Grid>
            {dataList?.cast.map((item) => (
                <Typography variant="body1">
                    <div class="headline">
                        <h1>{item.original_title} </h1>
                        <p>as {item.character} </p>
                    </div>
                </Typography>
            ))}
        </Grid>
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
        display: 'flex',
    },
    imageStyle: {
        height: "60%",
        borderRadius: 10,
    },
    imageItemStyle: {
        paddingInline: 30,
        paddingBlock: 30
    },
    detailItemStyle: {
        paddingBlock: 30,
        paddingRight: 50,
    },
    paragraphStyle: {
        fontWeight: 'normal',
        color: Colors.blackColor
    },
    posterItemStyle: {
        height: 250,
        borderRadius: 10,
        cursor: 'pointer',
    },
    careerSectionStyle: {
        paddingBlock: 10,
    },
}