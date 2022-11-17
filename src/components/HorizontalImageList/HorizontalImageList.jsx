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
        <ImageListItem 
        sx={{minWidth: (theme) => theme.spacing(4)}}
        style={styles.container}>
          <a href={"/movie/" + movieItem.id}>
          <img src={`${POSTER_IMAGE_BASE_URL}${movieItem.poster_path || movieItem.profile_path}`} alt='' style={styles.imageItemStyle} />
          </a>
          <div className="percentage-div-style">
            <div class="circle">
              <p>{Math.round(movieItem.vote_average / 0.1)}%</p>
              <div class="inner-circle">
                <CircularProgres variant="determinate" value={Math.round(movieItem.vote_average / 0.1)} style={{ color: Colors.lightGreenColor }} />
              </div>
            </div>
          </div> 
          <ImageListItemBar
            className="img-style"
            title={movieItem.title || movieItem.name}
            subtitle={movieItem.release_date || movieItem.character}
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
    cursor: 'pointer'
  },
  progressStyle: {
    margin: 2,
  },
}