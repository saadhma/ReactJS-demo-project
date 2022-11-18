import * as React from "react";
import './VerticalItemList.css';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { POSTER_IMAGE_BASE_URL } from "../../constants/Constants";
import { Grid } from "@mui/material";
import PersonImage from '../../assets/person-img.svg';

export default function VerticalItemList({ dataList }) {
    return (
        <ImageList
            sx={{
                gridAutoFlow: "row",
            }}
            cols={1} rowHeight={100}>
            {dataList?.map((item) => (
                <ImageListItem style={styles.container}>
                    <Grid container style={{ width: '20%' }}>
                        <Grid item>
                            <img src={item.profile_path === null ? PersonImage : `${POSTER_IMAGE_BASE_URL}${item.profile_path}`} alt='' style={styles.imageItemStyle} />
                        </Grid>
                    </Grid>
                    <Grid container style={{ width: '70%' }}>
                        <div>
                            <div className="title-style"> {item.name} </div>
                            <div className="subtitle-style"> {item.character || item.department} </div>
                        </div>
                    </Grid>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageItemStyle: {
        width: 100,
        height: 100,
        borderRadius: 10,
        cursor: 'pointer',
    },
}