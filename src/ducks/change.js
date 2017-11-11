// @flow

export const SET_CHANGE_NAME: string = 'CHANGE/SET_CHANGE_NAME';
export const SET_CHANGE_DESCRIPTION: string = 'CHANGE/SET_CHANGE_DESCRIPTION';

export type Change = {
  name?: string,
  description?: string,
}

type ChangeAction = {
  type: typeof SET_CHANGE_NAME | typeof SET_CHANGE_DESCRIPTION,
  payload: Change,
}

export default (state: Change = {}, action: ChangeAction): Change => {
  switch (action.type) {
  case SET_CHANGE_NAME:
    return { ...state, name: action.payload.name };
  case SET_CHANGE_DESCRIPTION:
    return { ...state, description: action.payload.description };
  default:
    return state;
  }
};

export const setChangeName = (name: string): ChangeAction => ({
  type: SET_CHANGE_NAME,
  payload: {
    name,
  },
});

export const setChangeDescription = (description: string): ChangeAction => ({
  type: SET_CHANGE_DESCRIPTION,
  payload: {
    description,
  },
});
