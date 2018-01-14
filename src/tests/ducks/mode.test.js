import reducer, {
  switchToEditMode, switchToCompleteMode,
  SWITCH_TO_EDIT_MODE, EDIT_MODE, SWITCH_TO_COMPLETE_MODE, COMPLETE_MODE,
} from '../../ducks/mode';

describe('mode', () => {
  describe('action creators', () => {
    test('switchToEditMode returns correct action', () => {
      expect(switchToEditMode()).toEqual({
        type: SWITCH_TO_EDIT_MODE,
        payload: {
          mode: EDIT_MODE,
        },
      });
    });

    test('switchToCompleteMode returns correct action', () => {
      expect(switchToCompleteMode()).toEqual({
        type: SWITCH_TO_COMPLETE_MODE,
        payload: {
          mode: COMPLETE_MODE,
        },
      });
    });
  });

  describe('reducer', () => {
    it('handles SWITCH_TO_EDIT_MODE action', () => {
      const setChangeNameAction = {
        type: SWITCH_TO_EDIT_MODE,
        payload: {
          mode: EDIT_MODE,
        },
      };

      expect(reducer(COMPLETE_MODE, setChangeNameAction)).toEqual(EDIT_MODE);
    });

    it('handles SWITCH_TO_COMPLETE_MODE action', () => {
      const setChangeNameAction = {
        type: SWITCH_TO_COMPLETE_MODE,
        payload: {
          mode: COMPLETE_MODE,
        },
      };

      expect(reducer(EDIT_MODE, setChangeNameAction)).toEqual(COMPLETE_MODE);
    });
  });
});
