import React from 'react';
import { shallow } from 'enzyme';

import { store } from '../../redux/index';
import { setChangeName, setChangeDescription } from '../../ducks/change';
import { ChangeContainer, mapStateToProps } from '../../containers/ChangeContainer';

describe('ChangeContainer', () => {
  describe('rendering', () => {
    it('renders correctly with no change name and description', () => {
      const tree = shallow(<ChangeContainer
        change={{
          name: '',
          description: '',
        }}
      />);

      expect(tree).toMatchSnapshot();
    });

    it('renders correctly with change name and description', () => {
      const tree = shallow(
        <ChangeContainer
          change={{
            name: 'change name',
            description: 'change description',
          }}
        />,
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    let ShallowChangeContainer;

    // in order for the component's state to reinitialize before every test,
    // we create a new component before each test
    beforeEach(() => {
      ShallowChangeContainer = shallow(
        <ChangeContainer
          change={{
            name: 'change name',
            description: 'change description',
          }}
          setChangeName={jest.fn()}
          setChangeDescription={jest.fn()}
        />,
      );
    });

    it('submits name form', () => {
      ShallowChangeContainer.instance().onNameFormSubmit();

      expect(ShallowChangeContainer.state('editChangeName')).toBeFalsy();
    });

    it('enables you to edit the name', () => {
      ShallowChangeContainer.instance().onEditNameClick();

      expect(ShallowChangeContainer.state('editChangeName')).toBeTruthy();
    });

    it('submits description form', () => {
      ShallowChangeContainer.instance().onDescriptionFormSubmit();

      expect(ShallowChangeContainer.state('editChangeDescription')).toBeFalsy();
    });

    it('closes the description form on No Description Button click', () => {
      const mockEvent = { preventDefault() {} };

      ShallowChangeContainer.instance().onNoDescriptionButtonClick(mockEvent);

      expect(ShallowChangeContainer.state('editChangeDescription')).toBeFalsy();
    });

    it('clears the description from on No Description Button click', () => {
      const mockEvent = { preventDefault() {} };

      ShallowChangeContainer.instance().onNoDescriptionButtonClick(mockEvent);

      expect(ShallowChangeContainer.instance().props.setChangeDescription).toBeCalledWith('');
    });

    it('enables you to edit the description', () => {
      ShallowChangeContainer.instance().onEditDescriptionClick();

      expect(ShallowChangeContainer.state('editChangeDescription')).toBeTruthy();
    });

    it('calls the setChangeName actions creator when onNameChange is called', () => {
      ShallowChangeContainer.instance().onNameChange({}, { value: 'change name' });

      expect(ShallowChangeContainer.instance().props.setChangeName).toBeCalledWith('change name');
    });

    it('calls the setChangeDescription actions creator when onDescriptionChange is called', () => {
      ShallowChangeContainer.instance().onDescriptionChange({}, { value: 'change description' });

      expect(ShallowChangeContainer.instance().props.setChangeDescription).toBeCalledWith('change description');
    });
  });

  describe('mapStateToProps', () => {
    it('returns the change', () => {
      store.dispatch(setChangeName('change name'));
      store.dispatch(setChangeDescription('change description'));

      const change = mapStateToProps(store.getState());

      expect(change).toEqual({ change: { name: 'change name', description: 'change description' } });
    });
  });
});
