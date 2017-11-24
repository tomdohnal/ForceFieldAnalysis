import React from 'react';
import { shallow } from 'enzyme';

import HinderingForceArrow from '../../components/HinderingForceArrow';

describe('HinderingForceArrow', () => {
  it('renders correctly with force prop', () => {
    const tree = shallow(<HinderingForceArrow force={5} />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with force and color prop', () => {
    const tree = shallow(<HinderingForceArrow force={5} color="#FFF" />);

    expect(tree).toMatchSnapshot();
  });
});
