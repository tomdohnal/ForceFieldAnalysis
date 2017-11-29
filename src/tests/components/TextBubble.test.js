import React from 'react';
import { shallow } from 'enzyme';

import TextBubble from '../../components/TextBubble';

describe('TextBubble', () => {
  it('renders correctly left TextBubble', () => {
    const tree = shallow(<TextBubble color="#FFF" left />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly right TextBubble', () => {
    const tree = shallow(<TextBubble color="#FFF" />);

    expect(tree).toMatchSnapshot();
  });
});