import { GET_SEARCH_COLLECTION_REQUESTED, GET_SEARCH_COMPANIES_REQUESTED, GET_SEARCH_KEYWORDS_REQUESTED, GET_SEARCH_MOVIES_REQUESTED, GET_SEARCH_PEOPLE_REQUESTED, GET_SEARCH_TV_SHOWS_REQUESTED } from "./actionTypes";

export function fetchSearchMovies(query) {
    return {
      type: GET_SEARCH_MOVIES_REQUESTED,
      payload: query
    }
}

export function fetchSearchTVShows(query) {
    return {
      type: GET_SEARCH_TV_SHOWS_REQUESTED,
      payload: query
    }
}

export function fetchSearchPeople(query) {
    return {
      type: GET_SEARCH_PEOPLE_REQUESTED,
      payload: query
    }
}

export function fetchSearchCollection(query) {
    return {
      type: GET_SEARCH_COLLECTION_REQUESTED,
      payload: query
    }
}

export function fetchSearchCompanies(query) {
    return {
      type: GET_SEARCH_COMPANIES_REQUESTED,
      payload: query
    }
}

export function fetchSearchKeywords(query) {
    return {
      type: GET_SEARCH_KEYWORDS_REQUESTED,
      payload: query
    }
}
