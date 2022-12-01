import { GET_MOVIES_REQUESTED, GET_POPULAR_MOVIES_REQUESTED, GET_NOW_PLAYING_MOVIES_REQUESTED, 
  GET_UPCOMING_MOVIES_REQUESTED, GET_TOP_RATED_MOVIES_REQUESTED, GET_MOVIE_DETAILS_REQUESTED, 
  GET_MOVIE_CREDITS_REQUESTED, GET_MOVIE_KEYWORDS_REQUESTED, GET_MOVIE_REVIEWS_REQUESTED, GET_MOVIE_RECOMMENDATIONS_REQUESTED, GET_MOVIE_MEDIA_VIDEOS_REQUESTED, GET_MOVIE_ALTERNATIVE_TITLES_REQUESTED } from "./actionTypes";

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

export function fetchMovieDetails(id) {
  return {
    type: GET_MOVIE_DETAILS_REQUESTED,
    payload: id
  }
}

export function fetchMovieCredits(id) {
  return {
    type: GET_MOVIE_CREDITS_REQUESTED,
    payload: id
  }
}

export function fetchMovieKeywords(id) {
  return {
    type: GET_MOVIE_KEYWORDS_REQUESTED,
    payload: id
  }
}

export function fetchMovieReviews(id) {
  return {
    type: GET_MOVIE_REVIEWS_REQUESTED,
    payload: id
  }
}

export function fetchMovieRecommendations(id) {
  return {
    type: GET_MOVIE_RECOMMENDATIONS_REQUESTED,
    payload: id
  }
}

export function fetchMovieMediaVideos(id) {
  return {
    type: GET_MOVIE_MEDIA_VIDEOS_REQUESTED,
    payload: id
  }
}

export function fetchMovieAlternativeTitles(id) {
  return {
    type: GET_MOVIE_ALTERNATIVE_TITLES_REQUESTED,
    payload: id
  }
}