import { GET_MOVIES_REQUESTED, GET_POPULAR_MOVIES_REQUESTED, REMOVE_A_USER } from "./actionTypes";

export function fetchMovies() {
    return {
      type: GET_MOVIES_REQUESTED,
    }
}

export function fetchPopularMovies() {
  return {
    type: GET_POPULAR_MOVIES_REQUESTED,
  }
}

export function removeUser(id) {
    return {
      type: REMOVE_A_USER,
      payload: id
    }
  }