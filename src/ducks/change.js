// @flow
import { createReducer } from '../helpers';

export const SET_CHANGE_NAME: string = 'CHANGE/SET_CHANGE_NAME';
export const SET_CHANGE_DESCRIPTION: string = 'CHANGE/SET_CHANGE_DESCRIPTION';

export type Change = {
  name?: string,
  description?: string,
}

type SetChangeNameAction = {
  type: typeof SET_CHANGE_NAME,
  payload: Change,
}

type SetChangeDescriptionAction = {
  type: typeof SET_CHANGE_DESCRIPTION,
  payload: Change,
}

export const setChangeName = (name: string): SetChangeNameAction => ({
  type: SET_CHANGE_NAME,
  payload: {
    name,
  },
});

export const setChangeDescription = (description: string): SetChangeDescriptionAction => ({
  type: SET_CHANGE_DESCRIPTION,
  payload: {
    description,
  },
});

export default createReducer({}, {
  [SET_CHANGE_NAME]: (state: Change, action: SetChangeNameAction) => ({
    ...state, name: action.payload.name,
  }),
  [SET_CHANGE_DESCRIPTION]: (state: Change, action: SetChangeDescriptionAction) => ({
    ...state, description: action.payload.description,
  }),
});
