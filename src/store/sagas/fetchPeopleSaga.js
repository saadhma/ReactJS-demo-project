import { call, put, takeEvery } from 'redux-saga/effects';
import { API_KEY, SEARCH_POPULAR_PEOPLE_URL } from '../../constants/Constants';

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

function* fetchPopularPeopleData() {
    try {
        const popularPeopleData = yield call(getPopularPeople);
        yield put({ type: 'GET_POPULAR_PEOPLE_SUCCESS', popularPeopleData: popularPeopleData });
    } catch (e) {
        yield put({ type: 'GET_POPULAR_PEOPLE_FAILED', message: e.message });
    }
}

function* peopleSaga() {
    console.log("saga1")
    yield takeEvery('GET_POPULAR_PEOPLE_REQUESTED', fetchPopularPeopleData);
}

export default peopleSaga;