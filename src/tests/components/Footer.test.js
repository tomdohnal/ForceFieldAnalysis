import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = shallow(<Footer drivingForcesCount={5} hinderingForcesCount={5} centerText="It's a tie!" />);

    expect(tree).toMatchSnapshot();
  });
});
