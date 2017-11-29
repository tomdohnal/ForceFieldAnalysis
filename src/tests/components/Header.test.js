import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = shallow(<Header />);

    expect(tree).toMatchSnapshot();
  });
});
