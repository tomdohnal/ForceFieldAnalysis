import React from 'react';
import { shallow } from 'enzyme';

import { FooterContainer, mapStateToProps } from '../../containers/FooterContainer';
import { store, RESET_STATE } from '../../redux';
import { addDrivingForce, addHinderingForce } from '../../ducks/forces';

describe('FooterContainer', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <FooterContainer
        drivingForcesCount={0}
        hinderingForcesCount={0}
      />,
    ).dive();

    expect(tree).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    beforeEach(() => {
      store.dispatch({ type: RESET_STATE });
    });

    it('it counts driving forces correctly', () => {
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));

      const { drivingForcesCount } = mapStateToProps(store.getState());

      expect(drivingForcesCount).toBe(10);
    });

    it('it counts hindering forces correctly', () => {
      store.dispatch(addHinderingForce('force name', 5));
      store.dispatch(addHinderingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));
      store.dispatch(addDrivingForce('force name', 5));

      const { hinderingForcesCount } = mapStateToProps(store.getState());

      expect(hinderingForcesCount).toBe(10);
    });
  });
});
