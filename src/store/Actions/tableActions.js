import { ADD_ITEM_TO_LIST, EDIT_ITEM, REMOVE_ITEM_FROM_LIST } from "./actionTypes";

export const addItemToList = (item) => {
    return {
          type: ADD_ITEM_TO_LIST,
          payload: item
        };
  };
  
  export const editItem = (item) => {
    return {
          type: EDIT_ITEM,
          payload: item
        };
  };
  
  export const removeItemFromList = (id) => {
    return {
          type: REMOVE_ITEM_FROM_LIST,
          payload: id
        };
  };