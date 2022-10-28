import { GET_USERS_REQUESTED, REMOVE_A_USER } from "./actionTypes";

export function getUsers() {
    return {
      type: GET_USERS_REQUESTED,
    }
  }

export function removeUser(id) {
    return {
      type: REMOVE_A_USER,
      payload: id
    }
  }