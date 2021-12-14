import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

function dummyReducer (state = {}, action) {
  return state;
}

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))

const store = createStore(dummyReducer, middleware)

export default store
