import reducer, {
  SET_CHANGE_NAME, SET_CHANGE_DESCRIPTION,
  setChangeName, setChangeDescription,
} from '../../ducks/change';

describe('change', () => {
  test('setNameChange action creator returns correct action', () => {
    expect(setChangeName('change name'))
      .toEqual({
        type: SET_CHANGE_NAME,
        payload: {
          name: 'change name',
        },
      });
  });

  test('setChangeDescription action creator returns correct action', () => {
    expect(setChangeDescription('change description'))
      .toEqual({
        type: SET_CHANGE_DESCRIPTION,
        payload: {
          description: 'change description',
        },
      });
  });

  test('reducer handles SET_CHANGE_NAME action when there is no name set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_NAME,
      payload: {
        name: 'change name',
      },
    };

    const currentState = {};

    const expectedState = { name: 'change name' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_NAME action when there is a name set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_NAME,
      payload: {
        name: 'new change name',
      },
    };

    const currentState = { name: 'old change name' };

    const expectedState = { name: 'new change name' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_NAME action when there is no name set and a description set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_NAME,
      payload: {
        name: 'change name',
      },
    };

    const currentState = { description: 'change description' };

    const expectedState = { description: 'change description', name: 'change name' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_NAME action when there is a name set and a description set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_NAME,
      payload: {
        name: 'new change name',
      },
    };

    const currentState = { description: 'change description', name: 'old change name' };

    const expectedState = { description: 'change description', name: 'new change name' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_DESCRIPTION action when there is no description set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_DESCRIPTION,
      payload: {
        description: 'change description',
      },
    };

    const currentState = {};

    const expectedState = { description: 'change description' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_DESCRIPTION action when there is a description set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_DESCRIPTION,
      payload: {
        description: 'new change description',
      },
    };

    const currentState = { description: 'old description' };

    const expectedState = { description: 'new change description' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_DESCRIPTION action when there is no description set and a name set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_DESCRIPTION,
      payload: {
        description: 'change description',
      },
    };

    const currentState = { name: 'change name' };

    const expectedState = { description: 'change description', name: 'change name' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });

  test('reducer handles SET_CHANGE_DESCRIPTION action when there is a description set and a name set', () => {
    const setChangeNameAction = {
      type: SET_CHANGE_DESCRIPTION,
      payload: {
        description: 'new change description',
      },
    };

    const currentState = { name: 'change name', description: 'old change description' };

    const expectedState = { description: 'new change description', name: 'change name' };

    expect(reducer(currentState, setChangeNameAction)).toEqual(expectedState);
  });
});
