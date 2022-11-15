import { combineReducers } from "redux";
import { moviesReducer } from "./MoviesReducer";


const reducers = combineReducers({
  moviesReducer,
  //other reducers come here...
});

export default reducers;