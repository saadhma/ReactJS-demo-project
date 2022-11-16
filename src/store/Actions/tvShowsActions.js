import { GET_AIRING_TODAY_TV_SHOWS_REQUESTED, GET_ON_AIR_TV_SHOWS_REQUESTED, GET_POPULAR_TV_SHOWS_REQUESTED, GET_TOP_RATED_TV_SHOWS_REQUESTED } from "./actionTypes";

export function fetchPopularTVShows() {
    return {
        type: GET_POPULAR_TV_SHOWS_REQUESTED,
    }
}

export function fetchAiringTodayTVShows() {
    return {
        type: GET_AIRING_TODAY_TV_SHOWS_REQUESTED,
    }
}

export function fetchOnAirTVShows() {
    return {
        type: GET_ON_AIR_TV_SHOWS_REQUESTED,
    }
}

export function fetchTopRatedTVShows() {
    return {
        type: GET_TOP_RATED_TV_SHOWS_REQUESTED,
    }
}