import { createStore, applyMiddleware,compose } from "redux";
import reducer from "./reducer/reducers";
import { thunk } from 'redux-thunk';

const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(
    reducer,applyMiddleware(thunk)
);

export default store;