const initialState = {
  usersList: [],
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {

    case "GET_USERS":
      return {
        ...state,
        usersList: action.payload,
      };

    case "EDIT_ITEM":
      const updatedItem = action.payload;
      const updatedItems = state.usersList.map((item) => {
        if (item.id === updatedItem.id) {
          item.date = updatedItem.date;
          item.description = updatedItem.description;
          return updatedItem;
        }
        return item;
      });
      return {
        ...state,
        usersList: updatedItems,
      };

    case "REMOVE_ITEM_FROM_LIST":
      return {
        ...state,
        usersList: state.usersList.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
};