// @flow
import { combineReducers } from 'redux';

import forcesReducer, { type Forces } from '../ducks/forces';
import changeReducer, { type Change } from '../ducks/change';

const rootReducer = combineReducers({
  forces: forcesReducer,
  change: changeReducer,
});

export type ReduxState = {
  forces: Forces,
  change: Change,
}

export default rootReducer;
