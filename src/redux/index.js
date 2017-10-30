import { combineReducers } from 'redux';

import forcesReducer, { Forces } from '../ducks/forces';

const rootReducer = combineReducers({
  forces: forcesReducer,
});

export type State = {
  forces: Forces,
}

export default rootReducer;
