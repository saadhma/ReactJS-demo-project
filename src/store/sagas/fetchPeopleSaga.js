import { call, put, takeEvery } from 'redux-saga/effects';
import { API_KEY, SEARCH_PERSON_DETAILS_URL, SEARCH_POPULAR_PEOPLE_URL } from '../../constants/Constants';

const popularPeopleUrl = `${SEARCH_POPULAR_PEOPLE_URL}?api_key=${API_KEY}`;

async function getPopularPeople() {
    try {
        const response = await fetch(popularPeopleUrl, {
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

async function getPersonDetails(id) {
    const personDetailsUrl = `${SEARCH_PERSON_DETAILS_URL}${id.payload}?api_key=${API_KEY}`;
    try {
        const response = await fetch(personDetailsUrl, {
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

async function getPersonCareerDetails(id) {
    const personCareerDetailsUrl = `${SEARCH_PERSON_DETAILS_URL}${id.payload}/movie_credits?api_key=${API_KEY}`;
    try {
        const response = await fetch(personCareerDetailsUrl, {
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

async function getPersonCombinedCredits(id) {
    const personCombinedCreditsUrl = `${SEARCH_PERSON_DETAILS_URL}${id.payload}/tv_credits?api_key=${API_KEY}&language=en-US`;
    try {
        const response = await fetch(personCombinedCreditsUrl, {
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

function* fetchPopularPeopleData() {
    try {
        const popularPeopleData = yield call(getPopularPeople);
        yield put({ type: 'GET_POPULAR_PEOPLE_SUCCESS', popularPeopleData: popularPeopleData });
    } catch (e) {
        yield put({ type: 'GET_POPULAR_PEOPLE_FAILED', message: e.message });
    }
}

function* fetchPersonDetailsData(id) {
    try {
        const personDetailsData = yield call(getPersonDetails, id);
        yield put({ type: 'GET_PERSON_DETAILS_SUCCESS', personDetailsData: personDetailsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_PERSON_DETAILS_FAILED', message: e.message });
    }
}

function* fetchPersonCareerData(id) {
    try {
        const personCareerDetailsData = yield call(getPersonCareerDetails, id);
        yield put({ type: 'GET_PERSON_CAREER_DETAILS_SUCCESS', personCareerDetailsData: personCareerDetailsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_PERSON_CAREER_DETAILS_FAILED', message: e.message });
    }
}

function* fetchPersonCombinedCreditsData(id) {
    try {
        const personCombinedCreditsData = yield call(getPersonCombinedCredits, id);
        yield put({ type: 'GET_PERSON_COMBINED_CREDITS_SUCCESS', personCombinedCreditsData: personCombinedCreditsData });
    } catch (e) {
        console.log(e.message);
        yield put({ type: 'GET_PERSON_COMBINED_CREDITS_FAILED', message: e.message });
    }
}

function* peopleSaga() {
    yield takeEvery('GET_POPULAR_PEOPLE_REQUESTED', fetchPopularPeopleData);
    yield takeEvery('GET_PERSON_DETAILS_REQUESTED', fetchPersonDetailsData);
    yield takeEvery('GET_PERSON_CAREER_DETAILS_REQUESTED', fetchPersonCareerData);
    yield takeEvery('GET_PERSON_COMBINED_CREDITS_REQUESTED', fetchPersonCombinedCreditsData);
}

export default peopleSaga;