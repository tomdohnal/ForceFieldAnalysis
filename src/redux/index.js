// @flow
import { combineReducers, createStore } from 'redux';

import forcesReducer, { type Forces } from '../ducks/forces';
import changeReducer, { type Change } from '../ducks/change';

export type ReduxState = {
  forces: Forces,
  change: Change,
}

export const RESET_STATE = 'RESET_STATE';

const appReducer = combineReducers({
  forces: forcesReducer,
  change: changeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export const store = createStore(rootReducer);
