import * as React from "react";
import './HorizontalImageList.css';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CircularProgres from '@mui/material/CircularProgress';
import bannerImage from '../../assets/banner.jpeg';
import { Colors } from '../../constants/Colors';

const images = [
  {
    thumbnail: {
      uri: "https://lorempixel.com/200/200/animals",
      name: "Peaky Blinders"
    }
  },
  { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "The Devil's Hour" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "Spider-Man No Way Home" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "Hotel Transylvania: Transformania" } },
  {
    thumbnail: { uri: "https://lorempixel.com/200/200/nature", name: "SPY x FAMILY" }
  },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Hellhole" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Breaking Bad" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Manifest" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "The Stranger" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Beyond the Universe" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "The Vampire Diaries" } }
];

export default function HorizontalImageList() {
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
      {images.map((image) => (
        <ImageListItem style={styles.container}>
          <img src={bannerImage} alt='' style={styles.imageItemStyle} />
          <div className="percentage-div-style">
              <div class="circle">
                <p>75%</p>
              <div class="inner-circle">
              <CircularProgres variant="determinate" value={75} style={{color: Colors.lightGreenColor}}/>
              </div>
            </div>
          </div>
          <ImageListItemBar
            className="img-style"
            title={image.thumbnail.name}
            subtitle={'15 Dec 2021'}
            position="below"
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