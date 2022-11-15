import * as React from "react";
import './StandardImageList.css';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Colors } from '../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from "../../constants/Constants";
import CircularProgres from '@mui/material/CircularProgress';

export default function StandardImageList({ dataList }) {
    return (
        <ImageList sx={{
            gridAutoFlow: "row",
            paddingBottom: '10px',
            paddingInline: '25px',
            gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)",
        }}
            cols={5} rowHeight={300}>
            {dataList?.map((item) => (
                <div className="movie-box">
                    <ImageListItem style={styles.container} key={item.img}>
                        <img
                            src={`${POSTER_IMAGE_BASE_URL}${item.poster_path}`}
                            style={styles.imageItemStyle}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <div className="percentage-div-style">
                            <div class="circle">
                                <p>75%</p>
                                <div class="inner-circle">
                                    <CircularProgres variant="determinate" value={75} style={{ color: Colors.lightGreenColor }} />
                                </div>
                            </div>
                        </div>
                        <ImageListItemBar
                            className="img-style"
                            title={item.title}
                            subtitle={item.release_date}
                            position="below"
                        />
                    </ImageListItem>
                </div>
            ))}
        </ImageList>
    )
}

const styles = {
    container: {
        color: Colors.headerColor,
    },
    imageItemStyle: {
        height: 50,
        borderRadius: 5,
    },
    progressStyle: {
        margin: 2,
    },
}