import { all } from 'redux-saga/effects'
import moviesSaga from './fetchMoviesSaga'
import tvShowsSaga from './fetchTVShowsSaga'
import searchSaga from './searchSaga'

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    tvShowsSaga(),
    searchSaga(),
  ])
}