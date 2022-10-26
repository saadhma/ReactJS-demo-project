import { ADD_ITEM_TO_LIST, EDIT_ITEM, REMOVE_ITEM_FROM_LIST } from "./actionTypes";

export const addItemToList = (item) => async (dispatch) => {
    return dispatch({
          type: ADD_ITEM_TO_LIST,
          payload: item
        });
  };
  
  export const editItem = (item) => async (dispatch) => {
    return dispatch({
          type: EDIT_ITEM,
          payload: item
        });
  };
  
  export const removeItemFromList = (id) => async (dispatch) => {
    return dispatch({
          type: REMOVE_ITEM_FROM_LIST,
          payload: id
        });
  };