const initialState = {
  todoList: [],
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_ITEM_TO_LIST":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "EDIT_ITEM":
      const updatedItem = action.payload;
      const updatedItems = state.todoList.map((item) => {
        if (item.id === updatedItem.id) {
          item.date = updatedItem.date;
          item.description = updatedItem.description;
          return updatedItem;
        }
        return item;
      });
      return {
        ...state,
        todoList: updatedItems,
      };

    case "REMOVE_ITEM_FROM_LIST":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
};