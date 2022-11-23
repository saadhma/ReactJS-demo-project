import { call, put, takeEvery } from 'redux-saga/effects';
import { SEARCH_MOVIES_URL, API_KEY, SEARCH_TV_SHOWS_URL, SEARCH_PEOPLE_URL, SEARCH_COLLECTION_URL, SEARCH_COMPANIES_URL, SEARCH_KEYWORDS_URL } from '../../constants/Constants';

const searchMoviesUrl = `${SEARCH_MOVIES_URL}?api_key=${API_KEY}`;
const searchTVShowsUrl = `${SEARCH_TV_SHOWS_URL}?api_key=${API_KEY}`;
const searchPeopleUrl = `${SEARCH_PEOPLE_URL}?api_key=${API_KEY}`;
const searchCollectionUrl = `${SEARCH_COLLECTION_URL}?api_key=${API_KEY}`;
const searchCompaniesUrl = `${SEARCH_COMPANIES_URL}?api_key=${API_KEY}`;
const searchKeywordsUrl = `${SEARCH_KEYWORDS_URL}?api_key=${API_KEY}`;

async function getSearchMovies(qurey) {
    const url = `${searchMoviesUrl}&query=${qurey.payload}&page=1&include_adult=false`;
    try {
        const response = await fetch(url, {
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

async function getSearchTVShows(qurey) {
    const url = `${searchTVShowsUrl}&query=${qurey.payload}&page=1&include_adult=false`;
    try {
        const response = await fetch(url, {
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

async function getSearchPeople(qurey) {
    const url = `${searchPeopleUrl}&query=${qurey.payload}&page=1&include_adult=false`;
    try {
        const response = await fetch(url, {
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

async function getSearchCollection(qurey) {
    const url = `${searchCollectionUrl}&query=${qurey.payload}&page=1&include_adult=false`;
    try {
        const response = await fetch(url, {
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

async function getSearchCompanies(qurey) {
    const url = `${searchCompaniesUrl}&query=${qurey.payload}&page=1&include_adult=false`;
    try {
        const response = await fetch(url, {
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

async function getSearchKeywords(qurey) {
    const url = `${searchKeywordsUrl}&query=${qurey.payload}&page=1&include_adult=false`;
    try {
        const response = await fetch(url, {
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

function* fetchSearchMoviesData(qurey) {
    try {
        const searchMoviesListData = yield call(getSearchMovies, qurey);
        yield put({ type: 'GET_SEARCH_MOVIES_SUCCESS', searchMoviesList: searchMoviesListData });
    } catch (e) {
        yield put({ type: 'GET_SEARCH_MOVIES_FAILED', message: e.message });
    }
}

function* fetchSearchTVShowsData(qurey) {
    try {
        const searchTVShowsListData = yield call(getSearchTVShows, qurey);
        yield put({ type: 'GET_SEARCH_TV_SHOWS_SUCCESS', searchTVShowsList: searchTVShowsListData });
    } catch (e) {
        yield put({ type: 'GET_SEARCH_TV_SHOWS_FAILED', message: e.message });
    }
}

function* fetchSearchPeopleData(qurey) {
    try {
        const searchPeopleListData = yield call(getSearchPeople, qurey);
        yield put({ type: 'GET_SEARCH_PEOPLE_SUCCESS', searchPeopleList: searchPeopleListData});
    } catch (e) {
        yield put({ type: 'GET_SEARCH_PEOPLE_FAILED', message: e.message });
    }
}

function* fetchSearchCollectionData(qurey) {
    try {
        const searchCollectionListData = yield call(getSearchCollection, qurey);
        yield put({ type: 'GET_SEARCH_COLLECTION_SUCCESS', searchCollectionList: searchCollectionListData});
    } catch (e) {
        yield put({ type: 'GET_SEARCH_COLLECTION_FAILED', message: e.message });
    }
}

function* fetchSearchCompaniesData(qurey) {
    try {
        const searchCompaniesListData = yield call(getSearchCompanies, qurey);
        yield put({ type: 'GET_SEARCH_COMPANIES_SUCCESS', searchCompaniesList: searchCompaniesListData});
    } catch (e) {
        yield put({ type: 'GET_SEARCH_COMPANIES_FAILED', message: e.message });
    }
}

function* fetchSearchKeywordsData(qurey) {
    try {
        const searchKeywordsListData = yield call(getSearchKeywords, qurey);
        yield put({ type: 'GET_SEARCH_KEYWORDS_SUCCESS', searchKeywordsList: searchKeywordsListData});
    } catch (e) {
        yield put({ type: 'GET_SEARCH_KEYWORDS_FAILED', message: e.message });
    }
}

function* searchSaga() {
    yield takeEvery('GET_SEARCH_MOVIES_REQUESTED', fetchSearchMoviesData);
    yield takeEvery('GET_SEARCH_TV_SHOWS_REQUESTED', fetchSearchTVShowsData);
    yield takeEvery('GET_SEARCH_PEOPLE_REQUESTED', fetchSearchPeopleData);
    yield takeEvery('GET_SEARCH_COLLECTION_REQUESTED', fetchSearchCollectionData);
    yield takeEvery('GET_SEARCH_COMPANIES_REQUESTED', fetchSearchCompaniesData);
    yield takeEvery('GET_SEARCH_KEYWORDS_REQUESTED', fetchSearchKeywordsData);
}

export default searchSaga;