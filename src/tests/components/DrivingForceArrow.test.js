import React from 'react';
import { shallow } from 'enzyme';

import DrivingForceArrow from '../../components/DrivingForceArrow';

describe('DrivingForceArrow', () => {
  it('renders correctly with force prop', () => {
    const tree = shallow(<DrivingForceArrow force={5} />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with force and color prop', () => {
    const tree = shallow(<DrivingForceArrow force={5} color="#FFF" />);

    expect(tree).toMatchSnapshot();
  });
});
