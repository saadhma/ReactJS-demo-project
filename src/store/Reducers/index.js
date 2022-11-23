import { combineReducers } from "redux";
import { moviesReducer } from "./MoviesReducer";
import { tvShowsReducer } from "./TVShowsReducer";
import { searchReducer } from "./SearchReducer";

const reducers = combineReducers({
  moviesReducer,
  tvShowsReducer,
  searchReducer,
});

export default reducers;