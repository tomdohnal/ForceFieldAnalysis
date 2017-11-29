import React from 'react';
import { shallow } from 'enzyme';

import DrivingForceArrow from '../../components/DrivingForceArrow';

describe('DrivingForceArrow', () => {
  it('renders correctly', () => {
    const tree = shallow(<DrivingForceArrow force={5} color="#FFF" />);

    expect(tree).toMatchSnapshot();
  });
});
