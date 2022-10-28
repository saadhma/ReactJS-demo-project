import { GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED, REMOVE_A_USER } from "../Actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    case REMOVE_A_USER:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload)
      }

    default:
      return state
  }
}
