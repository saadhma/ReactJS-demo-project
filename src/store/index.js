import { createStore } from 'redux';
import reducers from "./Reducers";

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(reducers);

export default store;