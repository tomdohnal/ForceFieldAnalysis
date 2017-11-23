import reducer, {
  ADD_FORCE, DELETE_FORCE, SET_FORCE_NAME, INCREASE_FORCE, DECREASE_FORCE,
  addForce, addDrivingForce, addHinderingForce,
  deleteForce, setForceName, increaseForce, decreaseForce,
} from '../../ducks/forces';

describe('forces', () => {
  describe('action creators', () => {
    test('addForce action creator creates the correct driving action', () => {
      const expectedAction = {
        type: ADD_FORCE,
        payload: {
          name: 'force name',
          strength: 4,
          driving: true,
        },
      };

      const receivedAction = addForce('force name', 4, true);

      expect(receivedAction).toMatchObject(expectedAction);

      // since the force id is randomly generated, we can't check its exact value
      // therefore we only check whether it exists
      expect(Object.prototype.hasOwnProperty.call(receivedAction.payload, 'id')).toBeTruthy();
    });

    test('addForce action creator creates the correct hindering action', () => {
      const expectedAction = {
        type: ADD_FORCE,
        payload: {
          name: 'force name',
          strength: 4,
          driving: false,
        },
      };

      const receivedAction = addForce('force name', 4, false);

      expect(receivedAction).toMatchObject(expectedAction);

      // since the force id is randomly generated, we can't check its exact value
      // therefore we only check whether it exists
      expect(Object.prototype.hasOwnProperty.call(receivedAction.payload, 'id')).toBeTruthy();
    });

    test('addDrivingForce acts as addForce with driving true', () => {
      const addDrivingForceAction = addDrivingForce('force name', 5);
      addDrivingForceAction.payload.id = null;

      const addForceAction = addForce('force name', 5, true);
      addForceAction.payload.id = null;

      expect(addDrivingForceAction).toEqual(addForceAction);
    });

    test('addHinderingForce acts as addForce with driving true', () => {
      const addDrivingForceAction = addHinderingForce('force name', 5);
      addDrivingForceAction.payload.id = null;

      const addForceAction = addForce('force name', 5, false);
      addForceAction.payload.id = null;

      expect(addDrivingForceAction).toEqual(addForceAction);
    });

    test('deleteForce action creator returns the correct action', () => {
      const expectedAction = {
        type: DELETE_FORCE,
        payload: {
          id: '123',
        },
      };

      expect(deleteForce('123')).toEqual(expectedAction);
    });

    test('setForceName action creator returns the correct action', () => {
      const expectedAction = {
        type: SET_FORCE_NAME,
        payload: {
          id: '123',
          name: 'force name',
        },
      };

      expect(setForceName('123', 'force name')).toEqual(expectedAction);
    });

    test('increaseForce action creator returns the correct action', () => {
      const expectedAction = {
        type: INCREASE_FORCE,
        payload: {
          id: '123',
        },
      };

      expect(increaseForce('123')).toEqual(expectedAction);
    });

    test('decreaseForce action creator returns the correct action', () => {
      const expectedAction = {
        type: DECREASE_FORCE,
        payload: {
          id: '123',
        },
      };

      expect(decreaseForce('123')).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    it('handles ADD_FORCE action when there are no forces set', () => {
      const addForceAction = {
        type: ADD_FORCE,
        payload: {
          id: '123',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      const currentState = {};

      const expectedState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      expect(reducer(currentState, addForceAction)).toEqual(expectedState);
    });

    it('handles ADD_FORCE action when there are some forces set', () => {
      const addForceAction = {
        type: ADD_FORCE,
        payload: {
          id: '123',
          name: 'another force name',
          strength: 5,
          driving: true,
        },
      };

      const currentState = {
        321: {
          id: '321',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      const expectedState = {
        321: {
          id: '321',
          name: 'force name',
          strength: 5,
          driving: true,
        },
        123: {
          id: '123',
          name: 'another force name',
          strength: 5,
          driving: true,
        },
      };

      expect(reducer(currentState, addForceAction)).toEqual(expectedState);
    });

    it('handles SET_FORCE_NAME action', () => {
      const setForceNameAction = {
        type: SET_FORCE_NAME,
        payload: {
          id: '123',
          name: 'new force name',
        },
      };

      const currentState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      const expectedState = {
        123: {
          id: '123',
          name: 'new force name',
          strength: 5,
          driving: true,
        },
      };

      expect(reducer(currentState, setForceNameAction)).toEqual(expectedState);
    });

    it('handles DELETE_FORCE action', () => {
      const deleteForceAction = {
        type: DELETE_FORCE,
        payload: {
          id: '123',
        },
      };

      const currentState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 5,
          driving: true,
        },
        321: {
          id: '321',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      const expectedState = {
        321: {
          id: '321',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      expect(reducer(currentState, deleteForceAction)).toEqual(expectedState);
    });

    it('handles INCREASE_FORCE action', () => {
      const increaseForceAction = {
        type: INCREASE_FORCE,
        payload: {
          id: '123',
        },
      };

      const currentState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      const expectedState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 6,
          driving: true,
        },
      };

      expect(reducer(currentState, increaseForceAction)).toEqual(expectedState);
    });

    it('handles DECREASE_FORCE action', () => {
      const increaseForceAction = {
        type: DECREASE_FORCE,
        payload: {
          id: '123',
        },
      };

      const currentState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 5,
          driving: true,
        },
      };

      const expectedState = {
        123: {
          id: '123',
          name: 'force name',
          strength: 4,
          driving: true,
        },
      };

      expect(reducer(currentState, increaseForceAction)).toEqual(expectedState);
    });
  });
});
