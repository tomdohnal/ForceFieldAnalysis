import { combineReducers } from 'redux';

import forcesReducer from '../ducks/forces';

const rootReducer = combineReducers({
  forces: forcesReducer,
});

export default rootReducer;
