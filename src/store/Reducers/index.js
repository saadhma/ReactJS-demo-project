import { combineReducers } from "redux";
import { usersReducer } from "./TableReducer";


const reducers = combineReducers({
  usersReducer,
  //other reducers come here...
});

export default reducers;