import React from 'react';
import { shallow } from 'enzyme';

import DrivingForcesContainer from '../../components/DrivingForcesContainer';

describe('DrivingForcesContainer', () => {
  it('renders correctly', () => {
    const tree = shallow(<DrivingForcesContainer text="Create Driving Force" />);

    expect(tree).toMatchSnapshot();
  });
});
