import { all } from 'redux-saga/effects'
import moviesSaga from './fetchMoviesSaga'

export default function* rootSaga() {
  yield all([
    moviesSaga(),
  ])
}