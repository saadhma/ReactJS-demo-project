import { GET_MOVIES_REQUESTED, GET_POPULAR_MOVIES_REQUESTED, GET_NOW_PLAYING_MOVIES_REQUESTED, 
  GET_UPCOMING_MOVIES_REQUESTED, GET_TOP_RATED_MOVIES_REQUESTED } from "./actionTypes";

export function fetchMovies() {
    return {
      type: GET_MOVIES_REQUESTED,
    }
}

export function fetchPopularMovies() {
  return {
    type: GET_POPULAR_MOVIES_REQUESTED,
  }
}

export function fetchNowPlayingMovies() {
  return {
    type: GET_NOW_PLAYING_MOVIES_REQUESTED,
  }
}

export function fetchUpcomingMovies() {
  return {
    type: GET_UPCOMING_MOVIES_REQUESTED,
  }
}

export function fetchTopRatedMovies() {
  return {
    type: GET_TOP_RATED_MOVIES_REQUESTED,
  }
}