import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from "./Reducers";

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;