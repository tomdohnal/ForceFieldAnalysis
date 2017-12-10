import React from 'react';
import { shallow } from 'enzyme';

import ChangeNameForm from '../../components/ChangeNameForm';

describe('ChangeNameForm', () => {
  const onSubmit = jest.fn();
  const onInputChange = jest.fn();

  const ShallowChangeNameForm = shallow(
    <ChangeNameForm
      inputValue="the name of the force"
      onSubmit={onSubmit}
      onInputChange={onInputChange}
    />,
  );

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(ShallowChangeNameForm).toMatchSnapshot();
    });
  });

  describe('functions triggering', () => {
    it('fires onSubmit function when the form is submitted', () => {
      ShallowChangeNameForm.dive().find('form').simulate('submit');

      expect(onSubmit).toBeCalled();
    });

    it('fires onInputChange event when the input is changed', () => {
      ShallowChangeNameForm.find('Input').dive().find('input').simulate('change');

      expect(onInputChange).toBeCalled();
    });
  });
});
