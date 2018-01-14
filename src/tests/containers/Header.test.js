import React from 'react';
import { shallow } from 'enzyme';

import { Header, mapStateToProps } from '../../containers/Header';
import { EDIT_MODE, COMPLETE_MODE, switchToEditMode as switchToEditModeOriginal } from '../../ducks/mode';
import { mockShallowComponentMethod } from '../helpers';
import { store } from '../../redux';

describe('Header', () => {
  const resetState = jest.fn();
  const switchToCompleteMode = jest.fn();
  const switchToEditMode = jest.fn();

  const ShallowHeader = shallow(
    <Header
      appMode={EDIT_MODE}
      resetState={resetState}
      switchToCompleteMode={switchToCompleteMode}
      switchToEditMode={switchToEditMode}
    />,
  );

  describe('rendering', () => {
    it('renders correctly in edit mode', () => {
      ShallowHeader.setProps({ appMode: EDIT_MODE });

      expect(ShallowHeader).toMatchSnapshot();
    });

    it('renders correctly in complete mode', () => {
      ShallowHeader.setProps({ appMode: COMPLETE_MODE });

      expect(ShallowHeader).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('onResetButtonClick calls reset state prop', () => {
      ShallowHeader.instance().onResetButtonClick({});

      expect(resetState).toBeCalled();
    });

    it('onMakeDecisionButtonClick calls switchToCompleteMode', () => {
      ShallowHeader.instance().onMakeDecisionButtonClick({});

      expect(switchToCompleteMode).toBeCalled();
    });

    it('onEditForcesButtonClick calls switchToEditMode', () => {
      ShallowHeader.instance().onEditForcesButtonClick({});

      expect(switchToEditMode).toBeCalled();
    });

    it('onAboutLinkClick sets showAbout state to true', () => {
      ShallowHeader.setState({ showAbout: false });

      ShallowHeader.instance().onAboutLinkClick();

      expect(ShallowHeader.state().showAbout).toBeTruthy();
    });

    it('onCloseAboutLinkClick sets showAbout state to false', () => {
      ShallowHeader.setState({ showAbout: true });

      ShallowHeader.instance().onCloseAboutLinkClick();

      expect(ShallowHeader.state().showAbout).toBeFalsy();
    });
  });

  describe('method triggering', () => {
    it('calls onResetButtonClick when reset button is clicked', () => {
      mockShallowComponentMethod(ShallowHeader, 'onResetButtonClick');

      ShallowHeader.find('Button').at(0).simulate('click');

      expect(ShallowHeader.instance().onResetButtonClick).toBeCalled();
    });

    it('calls onAboutLinkClick when about is clicked', () => {
      mockShallowComponentMethod(ShallowHeader, 'onAboutLinkClick');

      ShallowHeader.find('text').at(1).simulate('click');

      expect(ShallowHeader.instance().onAboutLinkClick).toBeCalled();
    });

    it('calls onMakeDecisionButtonClick when the make decision button is clicked', () => {
      ShallowHeader.setProps({ appMode: EDIT_MODE });

      mockShallowComponentMethod(ShallowHeader, 'onMakeDecisionButtonClick');

      ShallowHeader.find('Button').at(1).simulate('click');

      expect(ShallowHeader.instance().onMakeDecisionButtonClick).toBeCalled();
    });

    it('calls onEditForcesButtonClick when the make decision button is clicked', () => {
      ShallowHeader.setProps({ appMode: COMPLETE_MODE });

      mockShallowComponentMethod(ShallowHeader, 'onEditForcesButtonClick');

      ShallowHeader.find('Button').at(1).simulate('click');

      expect(ShallowHeader.instance().onEditForcesButtonClick).toBeCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('picks mode from the global state and maps it to appMode', () => {
      store.dispatch(switchToEditModeOriginal());

      const props = mapStateToProps(store.getState());

      expect(props).toEqual({ appMode: EDIT_MODE });
    });
  });
});
