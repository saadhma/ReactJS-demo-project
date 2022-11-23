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
  GET_MOVIE_CREDITS_FAILED,
  GET_MOVIE_KEYWORDS_REQUESTED,
  GET_MOVIE_KEYWORDS_SUCCESS,
  GET_MOVIE_KEYWORDS_FAILED,
  GET_MOVIE_REVIEWS_REQUESTED,
  GET_MOVIE_REVIEWS_SUCCESS,
  GET_MOVIE_REVIEWS_FAILED,
  GET_MOVIE_RECOMMENDATIONS_REQUESTED,
  GET_MOVIE_RECOMMENDATIONS_SUCCESS,
  GET_MOVIE_RECOMMENDATIONS_FAILED,
  GET_MOVIE_MEDIA_VIDEOS_REQUESTED,
  GET_MOVIE_MEDIA_VIDEOS_SUCCESS,
  GET_MOVIE_MEDIA_VIDEOS_FAILED} from "../Actions/actionTypes";
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
  movieKeywordsData: null,
  movieReviewsData: null,
  movieRecommendationsData: null,
  movieMediaVideosData: null,
  error: null,
});

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUESTED || GET_POPULAR_MOVIES_REQUESTED || GET_NOW_PLAYING_MOVIES_REQUESTED || 
    GET_UPCOMING_MOVIES_REQUESTED || GET_TOP_RATED_MOVIES_REQUESTED || GET_MOVIE_DETAILS_REQUESTED || 
    GET_MOVIE_CREDITS_REQUESTED || GET_MOVIE_KEYWORDS_REQUESTED || 
    GET_MOVIE_REVIEWS_REQUESTED || GET_MOVIE_RECOMMENDATIONS_REQUESTED || GET_MOVIE_MEDIA_VIDEOS_REQUESTED:
      return state.set('loading', true)
    case GET_MOVIES_SUCCESS:
      return state.set('loading', false).set('streammingMovies', action.movies).set('freeMovies', action.freeMovies)
        .set('trendingMovies', action.trendingMovies).set('nowPlayingMovies', action.nowPlayingMovies)
    case GET_POPULAR_MOVIES_SUCCESS:
      return state.set('popularMovies', action.popularMovies)
    case GET_NOW_PLAYING_MOVIES_SUCCESS:
      return state.set('nowPlayingMovies', action.nowPlayingMovies)
    case GET_UPCOMING_MOVIES_SUCCESS:
      return state.set('upcomingMovies', action.upcomingMovies)
    case GET_TOP_RATED_MOVIES_SUCCESS:
      return state.set('topRatedMovies', action.topRatedMovies)
    case GET_MOVIE_DETAILS_SUCCESS:
      return state.set('loading', false).set('movieDetailsData', action.movieDetailsData)
    case GET_MOVIE_CREDITS_SUCCESS:
      return state.set('loading', false).set('movieCreditsData', action.movieCreditsData)
    case GET_MOVIE_KEYWORDS_SUCCESS:
      return state.set('loading', false).set('movieKeywordsData', action.movieKeywordsData)
    case GET_MOVIE_REVIEWS_SUCCESS:
        return state.set('loading', false).set('movieReviewsData', action.movieReviewsData)
    case GET_MOVIE_RECOMMENDATIONS_SUCCESS:
        return state.set('loading', false).set('movieRecommendationsData', action.movieRecommendationsData)  
    case GET_MOVIE_MEDIA_VIDEOS_SUCCESS:
        return state.set('loading', false).set('movieMediaVideosData', action.movieMediaVideosData)  
    case GET_MOVIES_FAILED || GET_POPULAR_MOVIES_FAILED || GET_NOW_PLAYING_MOVIES_FAILED || 
    GET_UPCOMING_MOVIES_FAILED || GET_TOP_RATED_MOVIES_FAILED || GET_MOVIE_CREDITS_FAILED || 
    GET_MOVIE_KEYWORDS_FAILED || GET_MOVIE_REVIEWS_FAILED || GET_MOVIE_RECOMMENDATIONS_FAILED || GET_MOVIE_MEDIA_VIDEOS_FAILED:
      return state.set('loading', false).set('error', action.message)
    default:
      return state;
  }
}
