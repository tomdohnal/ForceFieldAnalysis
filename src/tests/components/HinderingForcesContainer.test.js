import React from 'react';
import { shallow } from 'enzyme';

import HinderingForcesContainer from '../../components/HinderingForcesContainer';

describe('HinderingForcesContainer', () => {
  it('renders correctly', () => {
    const tree = shallow(<HinderingForcesContainer text="Create Hindering Force" />);

    expect(tree).toMatchSnapshot();
  });
});
