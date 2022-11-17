import { 
  GET_MOVIES_REQUESTED, GET_MOVIES_SUCCESS, GET_MOVIES_FAILED, 
  GET_POPULAR_MOVIES_REQUESTED, GET_POPULAR_MOVIES_SUCCESS, 
  GET_POPULAR_MOVIES_FAILED, 
  GET_NOW_PLAYING_MOVIES_REQUESTED,
  GET_NOW_PLAYING_MOVIES_SUCCESS,
  GET_NOW_PLAYING_MOVIES_FAILED,
  GET_UPCOMING_MOVIES_REQUESTED,
  GET_UPCOMING_MOVIES_SUCCESS,
  GET_UPCOMING_MOVIES_FAILED,
  GET_TOP_RATED_MOVIES_REQUESTED,
  GET_TOP_RATED_MOVIES_FAILED,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS_REQUESTED,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_CREDITS_REQUESTED,
  GET_MOVIE_CREDITS_SUCCESS,
  GET_MOVIE_CREDITS_FAILED} from "../Actions/actionTypes";
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  streammingMovies: [],
  freeMovies: [],
  trendingMovies: [],
  popularMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  movieDetailsData: null,
  movieCreditsData: null,
  error: null,
});

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUESTED || GET_POPULAR_MOVIES_REQUESTED || GET_NOW_PLAYING_MOVIES_REQUESTED || 
    GET_UPCOMING_MOVIES_REQUESTED || GET_TOP_RATED_MOVIES_REQUESTED || GET_MOVIE_DETAILS_REQUESTED || GET_MOVIE_CREDITS_REQUESTED:
      return state.set('loading', true)
    case GET_MOVIES_SUCCESS:
      return state.set('loading', false).set('streammingMovies', action.movies).set('freeMovies', action.freeMovies)
        .set('trendingMovies', action.trendingMovies)
    case GET_POPULAR_MOVIES_SUCCESS:
      return state.set('popularMovies', action.popularMovies)
    case GET_NOW_PLAYING_MOVIES_SUCCESS:
      return state.set('nowPlayingMovies', action.nowPlayingMovies)
    case GET_UPCOMING_MOVIES_SUCCESS:
      return state.set('upcomingMovies', action.upcomingMovies)
    case GET_TOP_RATED_MOVIES_SUCCESS:
      return state.set('topRatedMovies', action.topRatedMovies)
    case GET_MOVIE_DETAILS_SUCCESS:
      return state.set('movieDetailsData', action.movieDetailsData)
    case GET_MOVIE_CREDITS_SUCCESS:
      return state.set('movieCreditsData', action.movieCreditsData)
    case GET_MOVIES_FAILED || GET_POPULAR_MOVIES_FAILED || GET_NOW_PLAYING_MOVIES_FAILED || 
    GET_UPCOMING_MOVIES_FAILED || GET_TOP_RATED_MOVIES_FAILED || GET_MOVIE_CREDITS_FAILED:
      return state.set('loading', false).set('error', action.message)
    default:
      return state;
  }
}
