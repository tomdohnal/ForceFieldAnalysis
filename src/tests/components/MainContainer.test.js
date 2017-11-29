import React from 'react';
import { shallow } from 'enzyme';

import MainContainer from '../../components/MainContainer';

describe('MainContainer', () => {
  it('renders correctly', () => {
    const tree = shallow(<MainContainer />);

    expect(tree).toMatchSnapshot();
  });
});
