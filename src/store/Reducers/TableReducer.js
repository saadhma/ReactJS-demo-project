import { GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED, REMOVE_A_USER } from "../Actions/actionTypes";
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  users: [],
  error: null,
});

export const usersReducer = (state = initialState, action) =>{
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return state.set('loading', true)
    case GET_USERS_SUCCESS:
      return state.set('loading', false).set('users', action.users)
    case GET_USERS_FAILED:
      return state.set('loading', false).set('error', action.message)
    case REMOVE_A_USER:
      console.log(state.users);
      return state.update('users', state.users.filter((item) => item.id !== action.payload))
    default:
      return state;
  }
}
