import { 
    GET_POPULAR_TV_SHOWS_REQUESTED, 
    GET_POPULAR_TV_SHOWS_SUCCESS, 
    GET_POPULAR_TV_SHOWS_FAILED,
    GET_AIRING_TODAY_TV_SHOWS_REQUESTED,
    GET_AIRING_TODAY_TV_SHOWS_SUCCESS,
    GET_AIRING_TODAY_TV_SHOWS_FAILED,
    GET_ON_AIR_TV_SHOWS_REQUESTED,
    GET_ON_AIR_TV_SHOWS_FAILED,
    GET_ON_AIR_TV_SHOWS_SUCCESS,
    GET_TOP_RATED_TV_SHOWS_REQUESTED,
    GET_TOP_RATED_TV_SHOWS_SUCCESS,
    GET_TOP_RATED_TV_SHOWS_FAILED} from "../Actions/actionTypes";
  import { fromJS } from 'immutable';
  
  const initialState = fromJS({
    loading: false,
    popularTVShows: [],
    airingTodayTVShows: [],
    onAirTVShows: [],
    topRatedTVShows: [],
    error: null,
  });
  
  export const tvShowsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POPULAR_TV_SHOWS_REQUESTED || GET_AIRING_TODAY_TV_SHOWS_REQUESTED || GET_ON_AIR_TV_SHOWS_REQUESTED || GET_TOP_RATED_TV_SHOWS_REQUESTED:
        return state.set('loading', true)
      case GET_POPULAR_TV_SHOWS_SUCCESS:
        return state.set('popularTVShows', action.popularTVShows)
    case GET_AIRING_TODAY_TV_SHOWS_SUCCESS:
        return state.set('airingTodayTVShows', action.airingTodayTVShows)
    case GET_ON_AIR_TV_SHOWS_SUCCESS:
        return state.set('onAirTVShows', action.onAirTVShows)
    case GET_TOP_RATED_TV_SHOWS_SUCCESS:
        return state.set('topRatedTVShows', action.topRatedTVShows)        
      case GET_POPULAR_TV_SHOWS_FAILED || GET_AIRING_TODAY_TV_SHOWS_FAILED || GET_ON_AIR_TV_SHOWS_FAILED || GET_TOP_RATED_TV_SHOWS_FAILED:
        return state.set('loading', false).set('error', action.message)
      default:
        return state;
    }
  }
  