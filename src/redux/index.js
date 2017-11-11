// @flow
import { combineReducers } from 'redux';

import forcesReducer, { type Forces } from '../ducks/forces';

const rootReducer = combineReducers({
  forces: forcesReducer,
});

export type ReduxState = {
  forces: Forces,
}

export default rootReducer;
