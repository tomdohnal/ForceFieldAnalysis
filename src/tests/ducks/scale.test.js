import reducer, { changeScale, CHANGE_SCALE } from '../../ducks/scale';

describe('mode', () => {
  jest.useFakeTimers();

  describe('action creators', () => {
    test('changeScale returns correct action', () => {
      expect(changeScale({ innerHeight: 1080, innerWidth: 1920 })).toEqual({
        type: CHANGE_SCALE,
        payload: {
          height: 1,
          width: 1,
        },
      });
    });
  });

  describe('reducer', () => {
    it('handles CHANGE_SCALE action', () => {
      const changeScaleAction = {
        type: CHANGE_SCALE,
        payload: {
          height: 0.5,
          width: 0.5,
        },
      };

      expect(reducer({}, changeScaleAction)).toEqual({
        height: 0.5,
        width: 0.5,
      });
    });
  });
});
