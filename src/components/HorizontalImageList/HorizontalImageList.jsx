import * as React from "react";
import './HorizontalImageList.css';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CircularProgres from '@mui/material/CircularProgress';
import { Colors } from '../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from "../../constants/Constants";

export default function HorizontalImageList({ moviesData }) {
  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, 1fr)",
        paddingBottom: '10px',
        paddingInline: '25px',
      }}
    >
      {moviesData?.map((movieItem) => (
        <ImageListItem style={styles.container}>
          <img src={`${POSTER_IMAGE_BASE_URL}${movieItem.poster_path}`} alt='' style={styles.imageItemStyle} />
          <div className="percentage-div-style">
            <div class="circle">
              <p>{Math.round(movieItem.vote_average/0.1)}%</p>
              <div class="inner-circle">
                <CircularProgres variant="determinate" value={75} style={{ color: Colors.lightGreenColor }} />
              </div>
            </div>
          </div>
          <ImageListItemBar
            className="img-style"
            title={movieItem.title}
            subtitle={movieItem.release_date}
            position="below"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const styles = {
  container: {
    margin: 8,
    color: Colors.headerColor
  },
  imageItemStyle: {
    height: 250,
    borderRadius: 10,
  },
  progressStyle: {
    margin: 2,
  },
}