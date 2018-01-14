// @flow
import { createReducer } from '../helpers';

export const SWITCH_TO_EDIT_MODE: string = 'MODES/SWITCH_TO_EDIT_MODE';
export const SWITCH_TO_COMPLETE_MODE: string = 'MODES/SWITCH_TO_COMPLETE_MODE';

export const EDIT_MODE = 'EDIT_MODE';
export const COMPLETE_MODE = 'COMPLETE_MODE';

export type Mode = typeof EDIT_MODE | typeof COMPLETE_MODE;

export type SwitchToEditModeAction = {
  type: typeof SWITCH_TO_EDIT_MODE,
  payload: {
    mode: typeof EDIT_MODE,
  }
}

export type SwitchToCompleteModeAction = {
  type: typeof SWITCH_TO_COMPLETE_MODE,
  payload: {
    mode: typeof COMPLETE_MODE,
  }
}

export const switchToEditMode = (): SwitchToEditModeAction => ({
  type: SWITCH_TO_EDIT_MODE,
  payload: {
    mode: EDIT_MODE,
  },
});

export const switchToCompleteMode = (): SwitchToCompleteModeAction => ({
  type: SWITCH_TO_COMPLETE_MODE,
  payload: {
    mode: COMPLETE_MODE,
  },
});

export default createReducer(EDIT_MODE, {
  [SWITCH_TO_EDIT_MODE]: (state: Mode, action: SwitchToEditModeAction) => (
    action.payload.mode
  ),
  [SWITCH_TO_COMPLETE_MODE]: (state: Mode, action: SwitchToCompleteModeAction) => (
    action.payload.mode
  ),
});
