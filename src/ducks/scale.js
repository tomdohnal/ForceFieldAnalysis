// @flow
import { createReducer } from '../helpers';

export const CHANGE_SCALE: string = 'SCALE/CHANGE_SCALE';

export type Scale = {
  height: number,
  width: number,
}

export type ChangeScaleAction = {
  type: typeof CHANGE_SCALE,
  payload: Scale
}

export const changeScale = (
  window: { innerHeight: number, innerWidth: number },
): ChangeScaleAction => ({
  type: CHANGE_SCALE,
  payload: {
    height: window.innerHeight / 1080,
    width: window.innerWidth / 1920,
  },
});

export default createReducer({
  height: window.innerHeight / 1080,
  width: window.innerWidth / 1920,
}, {
  [CHANGE_SCALE]: (state: Scale, action: ChangeScaleAction) => ({ ...action.payload }),
});

