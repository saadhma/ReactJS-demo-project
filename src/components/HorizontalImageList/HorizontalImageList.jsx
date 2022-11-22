import * as React from "react";
import './HorizontalImageList.css';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CircularProgres from '@mui/material/CircularProgress';
import { Colors } from '../../constants/Colors';
import { POSTER_IMAGE_BASE_URL } from "../../constants/Constants";
import PersonImage from '../../assets/person-img.svg';

export default function HorizontalImageList({ dataList, type }) {
  if (type === 'Characters') {
    return (
      <ImageList
        sx={{
          gridAutoFlow: "column",
          justifyContent: 'space-between',
          alignItems: 'space-between',
          paddingInline: '25px'
        }}
      >
        {dataList?.map((item) => (
          <ImageListItem style={styles.container}>
            <a href={"/movie/" + item.id}>
              <img src={item.profile_path === null ? PersonImage : `${POSTER_IMAGE_BASE_URL}${item.poster_path || item.profile_path || item.backdrop_path}`} alt='' style={styles.imageItemStyle} />
            </a>
            <div className="title-style">
              {item.title || item.name}
            </div>
            <div className="subtitle-style">
              {item.release_date || item.character || item.roles[0].character}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else if (type === 'TV Characters') {
    return (
      <ImageList
        sx={{
          gridAutoFlow: "column",
          justifyContent: 'space-between',
          alignItems: 'space-between',
          paddingInline: '25px'
        }}
      >
        {dataList?.map((item) => (
          <ImageListItem style={styles.container}>
            <a href={"/movie/" + item.id}>
              <img src={item.profile_path === null ? PersonImage : `${POSTER_IMAGE_BASE_URL}${item.poster_path || item.profile_path || item.backdrop_path}`} alt='' style={styles.imageItemStyle} />
            </a>
            <div className="title-style">
              {item.title || item.name}
            </div>
            <div className="subtitle-style">
              {item.release_date || item.character || item.roles[0].character}
            </div>
            <div className="semi-subtitle-style">
              {item.roles[0].episode_count} Episodes
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    return (
      <ImageList
        sx={{
          gridAutoFlow: "column",
          justifyContent: 'space-between',
          alignItems: 'space-between',
          paddingInline: '25px'
        }}
      >
        {dataList?.map((item) => (
          <ImageListItem style={styles.container}>
            <a href={"/movie/" + item.id}>
              <img src={`${POSTER_IMAGE_BASE_URL}${item.poster_path || item.profile_path}`} alt='' style={styles.imageItemStyle} />
            </a>
            <div className="percentage-div-style">
              <div class="circle">
                <p>{Math.round(item.vote_average / 0.1)}%</p>
                <div class="inner-circle">
                  <CircularProgres variant="determinate" value={Math.round(item.vote_average / 0.1)} style={{ color: Colors.lightGreenColor }} />
                </div>
              </div>
            </div>
            <div className="title-style">
              {item.title || item.name}
            </div>
            <div className="subtitle-style">
              {item.release_date || item.character}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
}

const styles = {
  container: {
    margin: 5,
  },
  imageItemStyle: {
    height: 250,
    borderRadius: 10,
    cursor: 'pointer',
  },
  progressStyle: {
    margin: 2,
  },
}