import { call, put, takeEvery } from 'redux-saga/effects';
import { POPULAR_TV_SHOWS_URL, API_KEY, AIRING_TODAY_TV_SHOWS_URL, ON_AIR_TV_SHOWS_URL, TOP_RATED_TV_SHOWS_URL, TV_SHOWS_DETAILS_URL } from '../../constants/Constants';

const popularTVShowsUrl = `${POPULAR_TV_SHOWS_URL}?api_key=${API_KEY}`;
const airingTodayTVShowsUrl = `${AIRING_TODAY_TV_SHOWS_URL}?api_key=${API_KEY}`;
const onAirTVShowsUrl = `${ON_AIR_TV_SHOWS_URL}?api_key=${API_KEY}`;
const topRatedTVShowsUrl = `${TOP_RATED_TV_SHOWS_URL}?api_key=${API_KEY}`;

async function getPopularTVShows() {
    try {
        const response = await fetch(popularTVShowsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getAiringTodayTVShows() {
    try {
        const response = await fetch(airingTodayTVShowsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getOnAirTVShows() {
    try {
        const response = await fetch(onAirTVShowsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTopRatedTVShows() {
    try {
        const response = await fetch(topRatedTVShowsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTVShowsDetails(id) {
    const tvShowsDetailsUrl = `${TV_SHOWS_DETAILS_URL}${id.payload}?api_key=${API_KEY}`;
    try {
        const response = await fetch(tvShowsDetailsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTVShowsCredits(id) {
    const tvShowsCreditsUrl = `${TV_SHOWS_DETAILS_URL}${id.payload}/aggregate_credits?api_key=${API_KEY}`;
    try {
        const response = await fetch(tvShowsCreditsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTVShowsKeywords(id) {
    const tvShowsKeywordsUrl = `${TV_SHOWS_DETAILS_URL}${id.payload}/keywords?api_key=${API_KEY}`;
    try {
        const response = await fetch(tvShowsKeywordsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTVShowsSeasonDetails(id, seasonNumber) {
    const tvShowsSeasonDetailsUrl = `${TV_SHOWS_DETAILS_URL}${id.payload.id}/season/${id.payload.seasonNumber}?api_key=${API_KEY}`;
    try {
        const response = await fetch(tvShowsSeasonDetailsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTVShowsSeasonReviews(id) {
    const tvShowsSeasonReviewsUrl = `${TV_SHOWS_DETAILS_URL}${id.payload}/reviews?api_key=${API_KEY}`;
    try {
        const response = await fetch(tvShowsSeasonReviewsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getTVShowsSeasonEpisodeImages(id, seasonNumber, episodes) {
    const tvShowsSeasonEpisodeImagesUrl = `${TV_SHOWS_DETAILS_URL}${id.payload.id}/season/${id.payload.seasonNumber}/episode/${episodes}/images?api_key=${API_KEY}`;
    try {
        const response = await fetch(tvShowsSeasonEpisodeImagesUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

function* fetchPopularTVShowsData() {
    try {
        const popularTVShowsData = yield call(getPopularTVShows);
        yield put({ type: 'GET_POPULAR_TV_SHOWS_SUCCESS', popularTVShows: popularTVShowsData });
    } catch (e) {
        yield put({ type: 'GET_POPULAR_TV_SHOWS_FAILED', message: e.message });
    }
}

function* fetchAiringTodayTVShowsData() {
    try {
        const airingTodayTVShowsData = yield call(getAiringTodayTVShows);
        yield put({ type: 'GET_AIRING_TODAY_TV_SHOWS_SUCCESS', airingTodayTVShows: airingTodayTVShowsData });
    } catch (e) {
        yield put({ type: 'GET_AIRING_TODAY_TV_SHOWS_FAILED', message: e.message });
    }
}

function* fetchOnAirTVShowsData() {
    try {
        const onAirTVShowsData = yield call(getOnAirTVShows);
        yield put({ type: 'GET_ON_AIR_TV_SHOWS_SUCCESS', onAirTVShows: onAirTVShowsData });
    } catch (e) {
        yield put({ type: 'GET_ON_AIR_TV_SHOWS_FAILED', message: e.message });
    }
}

function* fetchTopRatedTVShowsData() {
    try {
        const topRatedTVShowsData = yield call(getTopRatedTVShows);
        yield put({ type: 'GET_TOP_RATED_TV_SHOWS_SUCCESS', topRatedTVShows: topRatedTVShowsData });
    } catch (e) {
        yield put({ type: 'GET_TOP_RATED_TV_SHOWS_FAILED', message: e.message });
    }
}

function* fetchTVShowsDetailsData(id) {
    try {
        const tvShowsDetailsData = yield call(getTVShowsDetails, id);
        yield put({ type: 'GET_TV_SHOWS_DETAILS_SUCCESS', tvShowsDetailsData: tvShowsDetailsData });
    } catch (e) {
        yield put({ type: 'GET_TV_SHOWS_DETAILS_FAILED', message: e.message });
    }
}

function* fetchTVShowsCreditsData(id) {
    try {
        const tvShowsCreditsData = yield call(getTVShowsCredits, id);
        yield put({ type: 'GET_TV_SHOWS_CREDITS_SUCCESS', tvShowsCreditsData: tvShowsCreditsData });
    } catch (e) {
        yield put({ type: 'GET_TV_SHOWS_CREDITS_FAILED', message: e.message });
    }
}

function* fetchTVShowsKeywordsData(id) {
    try {
        const tvShowsKeywordsData = yield call(getTVShowsKeywords, id);
        yield put({ type: 'GET_TV_SHOWS_KEYWORDS_SUCCESS', tvShowsKeywordsData: tvShowsKeywordsData });
    } catch (e) {
        yield put({ type: 'GET_TV_SHOWS_KEYWORDS_FAILED', message: e.message });
    }
}

function* fetchTVShowsSeasonDetailsData(id, seasonNumber) {
    try {
        const tvShowsSeasonDetailsData = yield call(getTVShowsSeasonDetails, id, seasonNumber);
        yield put({ type: 'GET_TV_SHOWS_SEASON_DETAILS_SUCCESS', tvShowsSeasonDetailsData: tvShowsSeasonDetailsData });
    } catch (e) {
        yield put({ type: 'GET_TV_SHOWS_SEASON_DETAILS_FAILED', message: e.message });
    }
}

function* fetchTVShowsSeasonReviewsData(id) {
    try {
        const tvShowsSeasonReviewsData = yield call(getTVShowsSeasonReviews, id);
        yield put({ type: 'GET_TV_SHOWS_SEASON_REVIEWS_SUCCESS', tvShowsSeasonReviewsData: tvShowsSeasonReviewsData });
    } catch (e) {
        yield put({ type: 'GET_TV_SHOWS_SEASON_REVIEWS_FAILED', message: e.message });
    }
}

function* fetchTVShowsSeasonEpisodeImagesData(id, seasonNumber) {
    let finalImagesList = [];
    try {
        for (let i = 1; i <= id.payload.episodes; i++) {
            const tvShowsSeasonEpisodeImagesData = yield call(getTVShowsSeasonEpisodeImages, id, seasonNumber, i);
            finalImagesList.push(tvShowsSeasonEpisodeImagesData)
        }
        yield put({ type: 'GET_TV_SHOWS_SEASON_EPISODE_IMAGES_SUCCESS', tvShowsSeasonEpisodeImagesData: finalImagesList });
    } catch (e) {
        yield put({ type: 'GET_TV_SHOWS_SEASON_EPISODE_IMAGES_FAILED', message: e.message });
    }
}

function* tvShowsSaga() {
    yield takeEvery('GET_POPULAR_TV_SHOWS_REQUESTED', fetchPopularTVShowsData);
    yield takeEvery('GET_AIRING_TODAY_TV_SHOWS_REQUESTED', fetchAiringTodayTVShowsData);
    yield takeEvery('GET_ON_AIR_TV_SHOWS_REQUESTED', fetchOnAirTVShowsData);
    yield takeEvery('GET_TOP_RATED_TV_SHOWS_REQUESTED', fetchTopRatedTVShowsData);
    yield takeEvery('GET_TV_SHOWS_DETAILS_REQUESTED', fetchTVShowsDetailsData);
    yield takeEvery('GET_TV_SHOWS_CREDITS_REQUESTED', fetchTVShowsCreditsData);
    yield takeEvery('GET_TV_SHOWS_KEYWORDS_REQUESTED', fetchTVShowsKeywordsData);
    yield takeEvery('GET_TV_SHOWS_SEASON_DETAILS_REQUESTED', fetchTVShowsSeasonDetailsData);
    yield takeEvery('GET_TV_SHOWS_SEASON_REVIEWS_REQUESTED', fetchTVShowsSeasonReviewsData);
    yield takeEvery('GET_TV_SHOWS_SEASON_EPISODE_IMAGES_REQUESTED', fetchTVShowsSeasonEpisodeImagesData);
}

export default tvShowsSaga;