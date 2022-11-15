import { 
  GET_MOVIES_REQUESTED, GET_MOVIES_SUCCESS, GET_MOVIES_FAILED, 
  GET_POPULAR_MOVIES_REQUESTED, GET_POPULAR_MOVIES_SUCCESS, 
  GET_POPULAR_MOVIES_FAILED, REMOVE_A_USER } from "../Actions/actionTypes";
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  streammingMovies: [],
  freeMovies: [],
  trendingMovies: [],
  popularMovies: [],
  error: null,
});

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUESTED || GET_POPULAR_MOVIES_REQUESTED:
      return state.set('loading', true)
    case GET_MOVIES_SUCCESS:
      return state.set('loading', false).set('streammingMovies', action.movies).set('freeMovies', action.freeMovies)
        .set('trendingMovies', action.trendingMovies)
    case GET_POPULAR_MOVIES_SUCCESS:
      return state.set('popularMovies', action.popularMovies)
    case GET_MOVIES_FAILED || GET_POPULAR_MOVIES_FAILED:
      return state.set('loading', false).set('error', action.message)
    case REMOVE_A_USER:
      return state.update('movies', state.users.filter((item) => item.id !== action.payload))
    default:
      return state;
  }
}
