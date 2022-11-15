import { call, put, takeEvery } from 'redux-saga/effects';
import { STREAMMING_MOVIES_URL, FREE_MOVIES_URL, TRENDING_MOVIES_URL, POPULAR_MOVIES_URL, API_KEY } from '../../constants/Constants';

const streammingMoviesUrl = `${STREAMMING_MOVIES_URL}?api_key=${API_KEY}&language=en-US`;
const freeMoviesUrl = `${FREE_MOVIES_URL}?api_key=${API_KEY}&language=en-US`;
const trendingMoviesUrl = `${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;
const popularMoviesUrl = `${POPULAR_MOVIES_URL}?api_key=${API_KEY}`;

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

async function popularMovies() {
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

function* fetchMoviesData() {
   try {
      const streammingMovies = yield call(getStreammingMovies);
      const freeMovies = yield call(getFreeMovies);
      const trendingMovies = yield call(getTrendingMovies);
      yield put({type: 'GET_MOVIES_SUCCESS', movies: streammingMovies, freeMovies: freeMovies, trendingMovies: trendingMovies});
   } catch (e) {
      yield put({type: 'GET_MOVIES_FAILED', message: e.message});
   }
}

function* fetchPopularMoviesData() {
   try {
      const popularMoviesData = yield call(popularMovies);
      yield put({type: 'GET_POPULAR_MOVIES_SUCCESS', popularMovies: popularMoviesData});
   } catch (e) {
      yield put({type: 'GET_POPULAR_MOVIES_FAILED', message: e.message});
   }
}

function* removeUserFromList(id) {
    try {
       yield put({type: 'REMOVE_A_USER', action: id});
    } catch (e) {
       console.log(e);
    }
 }

function* moviesSaga() {
   yield takeEvery('GET_MOVIES_REQUESTED', fetchMoviesData);
   yield takeEvery('GET_POPULAR_MOVIES_REQUESTED', fetchPopularMoviesData);
   yield takeEvery('REMOVE_A_USER', removeUserFromList);
}

export default moviesSaga;