// @flow
import shortid from 'shortid';

export const ADD_DRIVING_FORCE: string = 'FORCES/ADD_DRIVING_FORCE';

export type Force = {
  id: string,
  driving: boolean,
  name: string,
  strength: number,
}

export type Forces = Array<Force>;

type ForceAction = {
  type: typeof ADD_DRIVING_FORCE,
  payload: Force,
}

export default (state: Forces = [], action: ForceAction): Forces => {
  switch (action.type) {
  case ADD_DRIVING_FORCE:
    return [...state, action.payload];
  default:
    return state;
  }
};

const addForce = (name: string, strength: number, driving: boolean): ForceAction => ({
  type: ADD_DRIVING_FORCE,
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
