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
  GET_TOP_RATED_TV_SHOWS_FAILED,
  GET_TV_SHOWS_DETAILS_SUCCESS,
  GET_TV_SHOWS_DETAILS_REQUESTED,
  GET_TV_SHOWS_DETAILS_FAILED,
  GET_TV_SHOWS_CREDITS_REQUESTED,
  GET_TV_SHOWS_CREDITS_SUCCESS,
  GET_TV_SHOWS_CREDITS_FAILED,
  GET_TV_SHOWS_KEYWORDS_REQUESTED,
  GET_TV_SHOWS_KEYWORDS_SUCCESS,
  GET_TV_SHOWS_KEYWORDS_FAILED,
  GET_TV_SHOWS_SEASON_DETAILS_REQUESTED,
  GET_TV_SHOWS_SEASON_DETAILS_SUCCESS,
  GET_TV_SHOWS_SEASON_DETAILS_FAILED,
  GET_TV_SHOWS_SEASON_EPISODE_IMAGES_REQUESTED,
  GET_TV_SHOWS_SEASON_EPISODE_IMAGES_SUCCESS,
  GET_TV_SHOWS_SEASON_EPISODE_IMAGES_FAILED,
  GET_TV_SHOWS_SEASON_REVIEWS_REQUESTED,
  GET_TV_SHOWS_SEASON_REVIEWS_SUCCESS,
  GET_TV_SHOWS_SEASON_REVIEWS_FAILED,
  GET_TV_SHOWS_SEASON_RECOMMENDATIONS_REQUESTED,
  GET_TV_SHOWS_SEASON_RECOMMENDATIONS_SUCCESS,
  GET_TV_SHOWS_SEASON_RECOMMENDATIONS_FAILED
} from "../Actions/actionTypes";
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  popularTVShows: [],
  airingTodayTVShows: [],
  onAirTVShows: [],
  topRatedTVShows: [],
  tvShowsDetailsData: null,
  tvShowsCreditsData: null,
  tvShowsKeywordsData: null,
  tvShowsSeasonDetailsData: null,
  tvShowsSeasonRecommendationsData: null,
  tvShowsSeasonReviewsData: null,
  tvShowsSeasonEpisodeImagesData: [],
  error: null,
});

export const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_TV_SHOWS_REQUESTED || GET_AIRING_TODAY_TV_SHOWS_REQUESTED ||
      GET_ON_AIR_TV_SHOWS_REQUESTED || GET_TOP_RATED_TV_SHOWS_REQUESTED ||
      GET_TV_SHOWS_DETAILS_REQUESTED || GET_TV_SHOWS_CREDITS_REQUESTED ||
      GET_TV_SHOWS_KEYWORDS_REQUESTED || GET_TV_SHOWS_SEASON_DETAILS_REQUESTED || 
      GET_TV_SHOWS_SEASON_RECOMMENDATIONS_REQUESTED ||
      GET_TV_SHOWS_SEASON_REVIEWS_REQUESTED || GET_TV_SHOWS_SEASON_EPISODE_IMAGES_REQUESTED:
      return state.set('loading', true)
    case GET_POPULAR_TV_SHOWS_SUCCESS:
      return state.set('popularTVShows', action.popularTVShows)
    case GET_AIRING_TODAY_TV_SHOWS_SUCCESS:
      return state.set('airingTodayTVShows', action.airingTodayTVShows)
    case GET_ON_AIR_TV_SHOWS_SUCCESS:
      return state.set('onAirTVShows', action.onAirTVShows)
    case GET_TOP_RATED_TV_SHOWS_SUCCESS:
      return state.set('topRatedTVShows', action.topRatedTVShows)
    case GET_TV_SHOWS_DETAILS_SUCCESS:
      return state.set('loading', false).set('tvShowsDetailsData', action.tvShowsDetailsData)
    case GET_TV_SHOWS_CREDITS_SUCCESS:
      return state.set('loading', false).set('tvShowsCreditsData', action.tvShowsCreditsData)
    case GET_TV_SHOWS_KEYWORDS_SUCCESS:
      return state.set('loading', false).set('tvShowsKeywordsData', action.tvShowsKeywordsData)
    case GET_TV_SHOWS_SEASON_DETAILS_SUCCESS:
      return state.set('loading', false).set('tvShowsSeasonDetailsData', action.tvShowsSeasonDetailsData)
    case GET_TV_SHOWS_SEASON_RECOMMENDATIONS_SUCCESS:
      return state.set('loading', false).set('tvShowsSeasonRecommendationsData', action.tvShowsSeasonRecommendationsData)  
    case GET_TV_SHOWS_SEASON_REVIEWS_SUCCESS:
      return state.set('loading', false).set('tvShowsSeasonReviewsData', action.tvShowsSeasonReviewsData)
    case GET_TV_SHOWS_SEASON_EPISODE_IMAGES_SUCCESS:
      return state.set('loading', false).set('tvShowsSeasonEpisodeImagesData', action.tvShowsSeasonEpisodeImagesData)
    case GET_POPULAR_TV_SHOWS_FAILED || GET_AIRING_TODAY_TV_SHOWS_FAILED ||
      GET_ON_AIR_TV_SHOWS_FAILED || GET_TOP_RATED_TV_SHOWS_FAILED ||
      GET_TV_SHOWS_DETAILS_FAILED || GET_TV_SHOWS_CREDITS_FAILED ||
      GET_TV_SHOWS_KEYWORDS_FAILED || GET_TV_SHOWS_SEASON_DETAILS_FAILED || 
      GET_TV_SHOWS_SEASON_RECOMMENDATIONS_FAILED ||
      GET_TV_SHOWS_SEASON_REVIEWS_FAILED || GET_TV_SHOWS_SEASON_EPISODE_IMAGES_FAILED:
      return state.set('loading', false).set('error', action.message)
    default:
      return state;
  }
}
