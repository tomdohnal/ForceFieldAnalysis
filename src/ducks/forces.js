// @flow
import shortid from 'shortid';
import _ from 'lodash';

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

type ForceAction = {
  type: typeof ADD_FORCE,
  payload: Force,
} | {
  type: typeof SET_FORCE_NAME,
  payload: {
    id: string,
    name: string,
  }
} | {
  type: typeof DELETE_FORCE,
  payload: {
    id: string,
  }
};

const addForce = (name: string, strength: number, driving: boolean): ForceAction => ({
  type: ADD_FORCE,
  payload: {
    id: shortid.generate(),
    driving,
    name,
    strength,
  },
});

export const addDrivingForce = (name: string, strength: number): ForceAction => (
  addForce(name, strength, true)
);

export const addHinderingForce = (name: string, strength: number): ForceAction => (
  addForce(name, strength, false)
);

export const deleteForce = (id: string): ForceAction => ({
  type: DELETE_FORCE,
  payload: { id },
});

export const setForceName = (id: string, name: string): ForceAction => ({
  type: SET_FORCE_NAME,
  payload: { id, name },
});

export const increaseForce = (id: string): ForceAction => ({
  type: INCREASE_FORCE,
  payload: { id },
});

export const decreaseForce = (id: string): ForceAction => ({
  type: DECREASE_FORCE,
  payload: { id },
});

export default (state: Forces = {}, action: ForceAction): Forces => {
  switch (action.type) {
  case ADD_FORCE:
    return { ...state, [action.payload.id]: action.payload };
  case SET_FORCE_NAME:
    return {
      ...state,
      [action.payload.id]: { ...state[action.payload.id], name: action.payload.name },
    };
  case DELETE_FORCE:
    return _.omit(state, action.payload.id);
  case DECREASE_FORCE:
    return {
      ...state,
      [action.payload.id]:
          { ...state[action.payload.id], strength: state[action.payload.id].strength - 1 },
    };
  case INCREASE_FORCE:
    return {
      ...state,
      [action.payload.id]:
          { ...state[action.payload.id], strength: state[action.payload.id].strength + 1 },
    };
  default:
    return state;
  }
};
