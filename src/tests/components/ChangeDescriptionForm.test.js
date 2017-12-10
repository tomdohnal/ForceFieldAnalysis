import React from 'react';
import { shallow } from 'enzyme';

import ChangeDescriptionForm from '../../components/ChangeDescriptionForm';

describe('ChangeDescriptionForm', () => {
  const onSubmit = jest.fn();
  const onInputChange = jest.fn();

  const ShallowChangeDescriptionForm = shallow(
    <ChangeDescriptionForm
      inputValue="the description of the force"
      onSubmit={onSubmit}
      onInputChange={onInputChange}
    />,
  );

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(ShallowChangeDescriptionForm).toMatchSnapshot();
    });
  });

  describe('functions triggering', () => {
    it('fires onSubmit function when the form is submitted', () => {
      ShallowChangeDescriptionForm.dive().find('form').simulate('submit');

      expect(onSubmit).toBeCalled();
    });

    it('fires onInputChange event when the input is changed', () => {
      ShallowChangeDescriptionForm.find('TextArea').dive().find('textarea').simulate('change');

      expect(onInputChange).toBeCalled();
    });
  });
});
