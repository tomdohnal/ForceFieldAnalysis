import React from 'react';
import { shallow } from 'enzyme';

import AboutBox from '../../components/AboutBox';

describe('AboutBox', () => {
  const onCloseLinkClick = jest.fn();
  const ShallowAboutBox = shallow(<AboutBox onCloseLinkClick={onCloseLinkClick} />);

  it('renders correctly', () => {
    expect(ShallowAboutBox).toMatchSnapshot();
  });

  it('triggers onCloseLinkClick after the link is clicked', () => {
    ShallowAboutBox.find('[clickable=true]').simulate('click');

    expect(onCloseLinkClick).toBeCalled();
  });
});
