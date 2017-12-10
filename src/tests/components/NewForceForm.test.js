import React from 'react';
import { shallow } from 'enzyme';

import { mockShallowComponentMethod } from '../helpers';
import NewForceForm from '../../components/NewForceForm';
import { MIN_STRENGTH, MAX_STRENGTH } from '../../constants/index';

const onFormSubmit = jest.fn();

const ShallowForm = shallow(
  <NewForceForm
    submitButtonColor="#FFF"
    submitButtonText="Submit Force"
    onFormSubmit={onFormSubmit}
  />,
);

describe('NewForceForm', () => {
  describe('rendering', () => {
    it('renders correctly', () => {
      const tree = ShallowForm.dive();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    beforeEach(() => {
      ShallowForm.setState(ShallowForm.instance().defaultState);
    });

    it('can increase force strength', () => {
      ShallowForm.instance().onIncreaseForceButtonClick();

      expect(ShallowForm.state('newForceStrength')).toBe(2);
    });

    it('has a max force strength limit', () => {
      ShallowForm.setState({ newForceStrength: MAX_STRENGTH });

      ShallowForm.instance().onIncreaseForceButtonClick();

      expect(ShallowForm.state('newForceStrength')).toBe(MAX_STRENGTH);
    });

    it('can decrease force strength', () => {
      ShallowForm.setState({ newForceStrength: MIN_STRENGTH + 1 });

      ShallowForm.instance().onDecreaseForceButtonClick();

      expect(ShallowForm.state('newForceStrength')).toBe(1);
    });

    it('has a min force strength limit', () => {
      ShallowForm.setState({ newForceStrength: MIN_STRENGTH });

      ShallowForm.instance().onDecreaseForceButtonClick();

      expect(ShallowForm.state('newForceStrength')).toBe(MIN_STRENGTH);
    });

    it('does throw an error when submitting without name', () => {
      ShallowForm.instance().onNewForceButtonClick();

      expect(ShallowForm.state('newForceError')).toBeTruthy();
    });
  });

  describe('method triggering', () => {
    it('triggers onNewForceInputChange when input is changed', () => {
      mockShallowComponentMethod(ShallowForm, 'onNewForceInputChange');

      ShallowForm.find('Input').dive().find('input').simulate('change');

      expect(ShallowForm.instance().onNewForceInputChange).toBeCalled();
    });

    it('triggers onIncreaseForceButtonClick when increase button clicked', () => {
      mockShallowComponentMethod(ShallowForm, 'onIncreaseForceButtonClick');

      ShallowForm.dive().find('Button[content="Increase"]').dive().find('a')
        .simulate('click');

      expect(ShallowForm.instance().onIncreaseForceButtonClick).toBeCalled();
    });

    it('triggers onDecreaseForceButtonClick when increase button clicked', () => {
      // can't test it due to a bug in semantic ui react
      // it throws TypeError: Cannot read property 'preventDefault' of undefined

      /* mockShallowComponentMethod(ShallowForm, 'onDecreaseForceButtonClick');

      ShallowForm.dive().find('Button[content="Decrease"]').dive().find('a')
        .simulate('click');

      expect(ShallowForm.instance().onDecreaseForceButtonClick).toBeCalled(); */
    });

    it('triggers onNewForceButtonClick when the new force button is clicked', () => {
      mockShallowComponentMethod(ShallowForm, 'onNewForceButtonClick');

      ShallowForm.dive().find('Button[as="button"]').dive().find('button')
        .simulate('click');

      expect(ShallowForm.instance().onNewForceButtonClick).toBeCalled();
    });
  });
});
