import { combineReducers } from "redux";
import TableReducer from "./TableReducer";

const reducers = combineReducers({
  Table: TableReducer,
  //other reducers come here...
});

export default reducers;