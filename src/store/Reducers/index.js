import { combineReducers } from "redux";
import { moviesReducer } from "./MoviesReducer";
import { tvShowsReducer } from "./TVShowsReducer";

const reducers = combineReducers({
  moviesReducer,
  tvShowsReducer,
});

export default reducers;