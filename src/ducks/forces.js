// @flow
import shortid from 'shortid';
import _ from 'lodash';

import { createReducer } from '../helpers';

export const ADD_FORCE: string = 'FORCES/ADD_FORCE';
export const DELETE_FORCE: string = 'FORCES/DELETE_FORCE';
export const SET_FORCE_NAME = 'FORCES/SET_FORCE_NAME';
export const INCREASE_FORCE = 'FORCES/INCREASE_FORCE';
export const DECREASE_FORCE = 'FORCES/DECREASE_FORCE';

export type Force = {
  id: string,
  driving: boolean,
  name: string,
  strength: number,
}

export type Forces = {
  [id: string]: Force,
};

type AddForceAction = {
  type: typeof ADD_FORCE,
  payload: Force,
}

type SetForceNameAction = {
  type: typeof SET_FORCE_NAME,
  payload: {
    id: string,
    name: string,
  }
}

type DeleteForceAction = {
  type: typeof DELETE_FORCE,
  payload: {
    id: string,
  }
}

type IncreaseForceAction = {
  type: typeof INCREASE_FORCE,
  payload: {
    id: string,
  }
}

type DecreaseForceAction = {
  type: typeof DECREASE_FORCE,
  payload: {
    id: string,
  }
}

const addForce = (name: string, strength: number, driving: boolean): AddForceAction => ({
  type: ADD_FORCE,
  payload: {
    id: shortid.generate(),
    driving,
    name,
    strength,
  },
});

export const addDrivingForce = (name: string, strength: number): AddForceAction => (
  addForce(name, strength, true)
);

export const addHinderingForce = (name: string, strength: number): AddForceAction => (
  addForce(name, strength, false)
);

export const deleteForce = (id: string): DeleteForceAction => ({
  type: DELETE_FORCE,
  payload: { id },
});

export const setForceName = (id: string, name: string): SetForceNameAction => ({
  type: SET_FORCE_NAME,
  payload: { id, name },
});

export const increaseForce = (id: string): IncreaseForceAction => ({
  type: INCREASE_FORCE,
  payload: { id },
});

export const decreaseForce = (id: string): DecreaseForceAction => ({
  type: DECREASE_FORCE,
  payload: { id },
});

export default createReducer({}, {
  [ADD_FORCE]: (state: Forces, action: DeleteForceAction) => ({
    ...state, [action.payload.id]: action.payload,
  }),
  [SET_FORCE_NAME]: (state: Forces, action: SetForceNameAction) => ({
    ...state,
    [action.payload.id]: { ...state[action.payload.id], name: action.payload.name },
  }),
  [DELETE_FORCE]: (state: Forces, action: DeleteForceAction) => (
    _.omit(state, action.payload.id)
  ),
  [INCREASE_FORCE]: (state: Forces, action: IncreaseForceAction) => ({
    ...state,
    [action.payload.id]:
      { ...state[action.payload.id], strength: state[action.payload.id].strength + 1 },
  }),
  [DECREASE_FORCE]: (state: Forces, action: DecreaseForceAction) => ({
    ...state,
    [action.payload.id]:
      { ...state[action.payload.id], strength: state[action.payload.id].strength - 1 },
  }),
});
