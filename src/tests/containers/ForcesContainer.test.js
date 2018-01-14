import React from 'react';
import { shallow } from 'enzyme';

import { ForcesContainer, mapStateToProps, mapDispatchToProps } from '../../containers/ForcesContainer';
import { addDrivingForce, addHinderingForce } from '../../ducks/forces';
import { store, RESET_STATE } from '../../redux';
import { COMPLETE_MODE, EDIT_MODE, switchToEditMode } from '../../ducks/mode';

describe('ForcesContainer', () => {
  const getSomeRandomForces = (driving) => {
    let forces = {};

    for (let i = 0; i < 10; i++) {
      const newForce = {
        id: i,
        driving,
        name: 'the name of the force',
        strength: i,
      };

      forces = { ...forces, [newForce.id]: newForce };
    }

    return forces;
  };

  const getSomeRandomDrivingForces = () => getSomeRandomForces(true);

  const getSomeRandomHinderingForces = () => getSomeRandomForces(false);

  describe('rendering', () => {
    it('renders driving forces correctly', () => {
      const ShallowForcesContainer = shallow(
        <ForcesContainer
          driving
          submitButtonText="submit driving force"
          forces={getSomeRandomDrivingForces()}
          appMode={EDIT_MODE}
        />,
      );

      expect(ShallowForcesContainer).toMatchSnapshot();
    });

    it('renders hindering forces correctly', () => {
      const ShallowForcesContainer = shallow(
        <ForcesContainer
          driving={false}
          submitButtonText="submit driving force"
          forces={getSomeRandomHinderingForces()}
          appMode={EDIT_MODE}
        />,
      );

      expect(ShallowForcesContainer).toMatchSnapshot();
    });

    it('renders correctly in complete mode', () => {
      const ShallowForcesContainer = shallow(
        <ForcesContainer
          driving={false}
          submitButtonText="submit driving force"
          forces={getSomeRandomHinderingForces()}
          appMode={COMPLETE_MODE}
        />,
      );

      expect(ShallowForcesContainer).toMatchSnapshot();
    });
  });

  describe('mapStateToPros', () => {
    beforeEach(() => {
      store.dispatch({ type: RESET_STATE });
    });

    it('return driving forces for a driving forces container', () => {
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));

      const props = mapStateToProps(store.getState(), { driving: true });

      expect(props.forces).toHaveLength(3);
    });

    it('return hindering forces for a hindering forces container', () => {
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));

      const props = mapStateToProps(store.getState(), { driving: false });

      expect(props.forces).toHaveLength(2);
    });

    it('maps global mode to appMode prop', () => {
      store.dispatch(switchToEditMode());

      const props = mapStateToProps(store.getState(), { driving: false });

      expect(props).toEqual({
        forces: [],
        appMode: EDIT_MODE,
      });
    });
  });

  describe('mapDispatchToProps', () => {
    beforeEach(() => {
      store.dispatch({ type: RESET_STATE });
    });

    it('assigns addDrivingForce action creator to addForce prop for a driving forces container', () => {
      const { addForce } = mapDispatchToProps(store.dispatch, { driving: true });

      addForce('force name', 5);

      const forceId = Object.keys(store.getState().forces)[0];

      expect(store.getState().forces[forceId].driving).toBeTruthy();
    });

    it('assigns addHinderingForce action creator to addForce prop for a hindering forces container', () => {
      const { addForce } = mapDispatchToProps(store.dispatch, { driving: false });

      addForce('force name', 5);

      const forceId = Object.keys(store.getState().forces)[0];

      expect(store.getState().forces[forceId].driving).toBeFalsy();
    });
  });
});
