import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { quoteReducer } from './quoteReducer';
export const store = createStore(quoteReducer, applyMiddleware(thunk));