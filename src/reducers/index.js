import { combineReducers } from 'redux';

import forcesReducer from './forcesReducer';

const rootReducer = combineReducers({
  forces: forcesReducer,
});

export default rootReducer;
