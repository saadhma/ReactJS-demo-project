import { GET_USERS, REMOVE_ITEM_FROM_LIST } from "./actionTypes";
import axios from 'axios';

export const GetUsers = () => {
      return dispatch => {
          axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
              dispatch({
                  type: GET_USERS,
                  payload: res.data
              });
          })
      };
  };

export const removeItemFromList = (id) => async (dispatch) => {
    return dispatch({
          type: REMOVE_ITEM_FROM_LIST,
          payload: id
        });
  };