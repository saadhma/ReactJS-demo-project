import { call, put, takeEvery } from 'redux-saga/effects';
import { STREAMMING_MOVIES_URL, FREE_MOVIES_URL, TRENDING_MOVIES_URL, POPULAR_MOVIES_URL, API_KEY, NOW_PLAYING_MOVIES_URL, UPCOMING_MOVIES_URL, TOP_RATED_MOVIES_URL, MOVIE_DETAILS_URL } from '../../constants/Constants';

const streammingMoviesUrl = `${STREAMMING_MOVIES_URL}?api_key=${API_KEY}&language=en-US`;
const freeMoviesUrl = `${FREE_MOVIES_URL}?api_key=${API_KEY}&language=en-US`;
const trendingMoviesUrl = `${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;
const popularMoviesUrl = `${POPULAR_MOVIES_URL}?api_key=${API_KEY}`;
const nowPlayingMoviesUrl = `${NOW_PLAYING_MOVIES_URL}?api_key=${API_KEY}`;
const upcomingMoviesUrl = `${UPCOMING_MOVIES_URL}?api_key=${API_KEY}`;
const topRatedMoviesUrl = `${TOP_RATED_MOVIES_URL}?api_key=${API_KEY}`;

async function getStreammingMovies() {
    try {
        const response = await fetch(streammingMoviesUrl, {
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

async function getFreeMovies() {
    try {
        const response = await fetch(freeMoviesUrl, {
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

async function getTrendingMovies() {
    try {
        const response = await fetch(trendingMoviesUrl, {
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

async function getPopularMovies() {
    try {
        const response = await fetch(popularMoviesUrl, {
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

async function getNowPlayingMovies() {
    try {
        const response = await fetch(nowPlayingMoviesUrl, {
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

async function getUpcomingMovies() {
    try {
        const response = await fetch(upcomingMoviesUrl, {
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

async function getTopRatedMovies() {
    try {
        const response = await fetch(topRatedMoviesUrl, {
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

async function getMovieDetails(id) {
    const moviesDetailsUrl = `${MOVIE_DETAILS_URL}${id.payload}?api_key=${API_KEY}`;
    try {
        const response = await fetch(moviesDetailsUrl, {
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

async function getMovieCredits(id) {
    const moviesDetailsUrl = `${MOVIE_DETAILS_URL}${id.payload}/credits?api_key=${API_KEY}`;
    try {
        const response = await fetch(moviesDetailsUrl, {
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

async function getMovieKeywords(id) {
    const movieKeywordsUrl = `${MOVIE_DETAILS_URL}${id.payload}/keywords?api_key=${API_KEY}`;
    try {
        const response = await fetch(movieKeywordsUrl, {
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

async function getMovieReviews(id) {
    const movieReviewsUrl = `${MOVIE_DETAILS_URL}${id.payload}/reviews?api_key=${API_KEY}`;
    try {
        const response = await fetch(movieReviewsUrl, {
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

async function getMovieRecommendations(id) {
    const movieRecommendationsUrl = `${MOVIE_DETAILS_URL}${id.payload}/recommendations?api_key=${API_KEY}`;
    try {
        const response = await fetch(movieRecommendationsUrl, {
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

function* fetchMoviesData() {
    try {
        const streammingMovies = yield call(getStreammingMovies);
        const freeMovies = yield call(getFreeMovies);
        const trendingMovies = yield call(getTrendingMovies);
        yield put({ type: 'GET_MOVIES_SUCCESS', movies: streammingMovies, freeMovies: freeMovies, trendingMovies: trendingMovies });
    } catch (e) {
        yield put({ type: 'GET_MOVIES_FAILED', message: e.message });
    }
}

function* fetchPopularMoviesData() {
    try {
        const popularMoviesData = yield call(getPopularMovies);
        yield put({ type: 'GET_POPULAR_MOVIES_SUCCESS', popularMovies: popularMoviesData });
    } catch (e) {
        yield put({ type: 'GET_POPULAR_MOVIES_FAILED', message: e.message });
    }
}

function* fetchNowPlayingMoviesData() {
    try {
        const nowPlayingMoviesData = yield call(getNowPlayingMovies);
        yield put({ type: 'GET_NOW_PLAYING_MOVIES_SUCCESS', nowPlayingMovies: nowPlayingMoviesData });
    } catch (e) {
        yield put({ type: 'GET_NOW_PLAYING_MOVIES_FAILED', message: e.message });
    }
}

function* fetchUpcomingMoviesData() {
    try {
        const upcomingMoviesData = yield call(getUpcomingMovies);
        yield put({ type: 'GET_UPCOMING_MOVIES_SUCCESS', upcomingMovies: upcomingMoviesData });
    } catch (e) {
        yield put({ type: 'GET_UPCOMING_MOVIES_FAILED', message: e.message });
    }
}

function* fetchTopRatedMoviesData() {
    try {
        const topRatedMoviesData = yield call(getTopRatedMovies);
        yield put({ type: 'GET_TOP_RATED_MOVIES_SUCCESS', topRatedMovies: topRatedMoviesData });
    } catch (e) {
        yield put({ type: 'GET_TOP_RATED_MOVIES_FAILED', message: e.message });
    }
}

function* fetchMovieDetailsData(id) {
    try {
        const movieDetailsData = yield call(getMovieDetails, id);
        yield put({ type: 'GET_MOVIE_DETAILS_SUCCESS', movieDetailsData: movieDetailsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_MOVIE_DETAILS_FAILED', message: e.message });
    }
}

function* fetchMovieCreditsData(id) {
    try {
        const movieCreditsData = yield call(getMovieCredits, id);
        yield put({ type: 'GET_MOVIE_CREDITS_SUCCESS', movieCreditsData: movieCreditsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_MOVIE_CREDITS_FAILED', message: e.message });
    }
}

function* fetchMovieKeywordsData(id) {
    try {
        const movieKeywordsData = yield call(getMovieKeywords, id);
        yield put({ type: 'GET_MOVIE_KEYWORDS_SUCCESS', movieKeywordsData: movieKeywordsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_MOVIE_KEYWORDS_FAILED', message: e.message });
    }
}

function* fetchMovieReviewsData(id) {
    try {
        const movieReviewsData = yield call(getMovieReviews, id);
        yield put({ type: 'GET_MOVIE_REVIEWS_SUCCESS', movieReviewsData: movieReviewsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_MOVIE_REVIEWS_FAILED', message: e.message });
    }
}

function* fetchMovieRecommendationsData(id) {
    try {
        const movieRecommendationsData = yield call(getMovieRecommendations, id);
        yield put({ type: 'GET_MOVIE_RECOMMENDATIONS_SUCCESS', movieRecommendationsData: movieRecommendationsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_MOVIE_RECOMMENDATIONS_FAILED', message: e.message });
    }
}

function* moviesSaga() {
    yield takeEvery('GET_MOVIES_REQUESTED', fetchMoviesData);
    yield takeEvery('GET_POPULAR_MOVIES_REQUESTED', fetchPopularMoviesData);
    yield takeEvery('GET_NOW_PLAYING_MOVIES_REQUESTED', fetchNowPlayingMoviesData);
    yield takeEvery('GET_UPCOMING_MOVIES_REQUESTED', fetchUpcomingMoviesData);
    yield takeEvery('GET_TOP_RATED_MOVIES_REQUESTED', fetchTopRatedMoviesData);
    yield takeEvery('GET_MOVIE_DETAILS_REQUESTED', fetchMovieDetailsData);
    yield takeEvery('GET_MOVIE_CREDITS_REQUESTED', fetchMovieCreditsData);
    yield takeEvery('GET_MOVIE_KEYWORDS_REQUESTED', fetchMovieKeywordsData);
    yield takeEvery('GET_MOVIE_REVIEWS_REQUESTED', fetchMovieReviewsData);
    yield takeEvery('GET_MOVIE_RECOMMENDATIONS_REQUESTED', fetchMovieRecommendationsData);
}

export default moviesSaga;