import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';
import result from './result'

const reducers = {
  routing: routerReducer,
  settings,requete:result
};

export default combineReducers(reducers);
