import React from 'react';
import { shallow } from 'enzyme';

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

beforeEach(() => {
  ShallowForm.setState(ShallowForm.instance().defaultState);
});

describe('NewForceForm', () => {
  it('renders correctly', () => {
    const tree = ShallowForm.dive();

    expect(tree).toMatchSnapshot();
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

  it('updates state when input changes', () => {
    const input = ShallowForm.find('Input').dive().find('input');

    input.simulate('change', { target: { value: 'the name' } });

    expect(ShallowForm.state('newForceName')).toBe('the name');
  });

  it('does throw an error when submitting without name', () => {
    ShallowForm.instance().onNewForceButtonClick();

    expect(ShallowForm.state('newForceError')).toBeTruthy();
  });

  it('triggers onFormSubmit when submitted', () => {
    const tree = ShallowForm.dive();

    tree.find('form').simulate('submit', { preventDefault: onFormSubmit });

    expect(onFormSubmit).toHaveBeenCalled();
  });
});
