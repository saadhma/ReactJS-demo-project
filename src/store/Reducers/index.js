import { combineReducers } from "redux";
import { moviesReducer } from "./MoviesReducer";
import { tvShowsReducer } from "./TVShowsReducer";
import { searchReducer } from "./SearchReducer";
import { peopleReducer } from "./PeopleReducer";

const reducers = combineReducers({
  moviesReducer,
  tvShowsReducer,
  searchReducer,
  peopleReducer,
});

export default reducers;