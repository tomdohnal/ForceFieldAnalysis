// @flow
import { type ReduxState } from './index';

const REDUX_STATE = 'REDUX_STATE';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(REDUX_STATE);

    if (serializedState === null || serializedState === undefined) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (reduxState: ReduxState) => {
  try {
    const serializedState = JSON.stringify(reduxState);

    return localStorage.setItem(REDUX_STATE, serializedState);
  } catch (e) {
    return undefined;
  }
};
