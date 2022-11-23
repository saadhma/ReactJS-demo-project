import {
    GET_SEARCH_MOVIES_REQUESTED,
    GET_SEARCH_MOVIES_SUCCESS,
    GET_SEARCH_MOVIES_FAILED,
    GET_SEARCH_TV_SHOWS_REQUESTED,
    GET_SEARCH_TV_SHOWS_SUCCESS,
    GET_SEARCH_TV_SHOWS_FAILED,
    GET_SEARCH_PEOPLE_REQUESTED,
    GET_SEARCH_PEOPLE_SUCCESS,
    GET_SEARCH_PEOPLE_FAILED,
    GET_SEARCH_COLLECTION_REQUESTED,
    GET_SEARCH_COLLECTION_SUCCESS,
    GET_SEARCH_COLLECTION_FAILED,
    GET_SEARCH_COMPANIES_REQUESTED,
    GET_SEARCH_COMPANIES_SUCCESS,
    GET_SEARCH_COMPANIES_FAILED,
    GET_SEARCH_KEYWORDS_REQUESTED,
    GET_SEARCH_KEYWORDS_SUCCESS,
    GET_SEARCH_KEYWORDS_FAILED,
} from "../Actions/actionTypes";
import { fromJS } from 'immutable';

const initialState = fromJS({
    loading: false,
    searchMoviesList: [],
    searchTVShowsList: [],
    searchPeopleList: [],
    searchCollectionList: [],
    searchCompaniesList: [],
    searchKeywordsList: [],
    error: null,
});

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_MOVIES_REQUESTED || GET_SEARCH_TV_SHOWS_REQUESTED ||
            GET_SEARCH_PEOPLE_REQUESTED || GET_SEARCH_COLLECTION_REQUESTED ||
            GET_SEARCH_COMPANIES_REQUESTED || GET_SEARCH_KEYWORDS_REQUESTED:
            return state.set('loading', true)
        case GET_SEARCH_MOVIES_SUCCESS:
            return state.set('searchMoviesList', action.searchMoviesList)
        case GET_SEARCH_TV_SHOWS_SUCCESS:
            return state.set('searchTVShowsList', action.searchTVShowsList)
        case GET_SEARCH_PEOPLE_SUCCESS:
            return state.set('searchPeopleList', action.searchPeopleList)
        case GET_SEARCH_COLLECTION_SUCCESS:
            return state.set('searchCollectionList', action.searchCollectionList)
        case GET_SEARCH_COMPANIES_SUCCESS:
            return state.set('searchCompaniesList', action.searchCompaniesList)
        case GET_SEARCH_KEYWORDS_SUCCESS:
            return state.set('searchKeywordsList', action.searchKeywordsList)
        case GET_SEARCH_MOVIES_FAILED || GET_SEARCH_TV_SHOWS_FAILED ||
            GET_SEARCH_PEOPLE_FAILED || GET_SEARCH_COLLECTION_FAILED || 
            GET_SEARCH_COMPANIES_FAILED || GET_SEARCH_KEYWORDS_FAILED:
            return state.set('loading', false).set('error', action.message)
        default:
            return state;
    }
}
