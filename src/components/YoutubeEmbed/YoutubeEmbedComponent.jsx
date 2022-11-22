import React from "react";
import './YoutubeEmbedComponent.css';
import YouTube from 'react-youtube';

export default function YoutubeEmbedComponent({ videoLink }) {

  const opts = {
    height: '250',
    width: '350',
    playerVars: {
      autoplay: 0,
    },
  };

  return(
    <YouTube videoId={videoLink} opts={opts} />
  );
}