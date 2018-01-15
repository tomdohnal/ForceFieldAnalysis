import React from 'react';
import { shallow } from 'enzyme';

import { Arrow, mapStateToProps } from '../../containers/Arrow';
import { mockShallowComponentMethod } from '../helpers';
import { MAX_STRENGTH, MIN_STRENGTH } from '../../constants';
import { COMPLETE_MODE, EDIT_MODE, switchToEditMode } from '../../ducks/mode';
import { changeScale } from '../../ducks/scale';
import { store } from '../../redux';

describe('Arrow', () => {
  const deleteForce = jest.fn();
  const setForceName = jest.fn();
  const increaseForce = jest.fn();
  const decreaseForce = jest.fn();

  const ShallowArrow = shallow(
    <Arrow
      color="#FFF"
      force={{
        id: '123',
        driving: true,
        strength: 5,
        name: 'the name of the force',
      }}
      deleteForce={deleteForce}
      setForceName={setForceName}
      increaseForce={increaseForce}
      decreaseForce={decreaseForce}
      appMode={EDIT_MODE}
      windowScale={{ height: 1, width: 1 }}
    />,
  );

  describe('rendering', () => {
    it('renders driving arrow correctly', () => {
      expect(ShallowArrow).toMatchSnapshot();
    });

    it('renders hindering arrow correctly', () => {
      const ShallowArrow = shallow(
        <Arrow
          color="#FFF"
          force={{
            id: '123',
            driving: true,
            strength: 5,
            name: 'the name of the force',
          }}
          deleteForce={deleteForce}
          setForceName={setForceName}
          increaseForce={increaseForce}
          decreaseForce={decreaseForce}
          appMode={EDIT_MODE}
          windowScale={{ height: 1, width: 1 }}
        />,
      );

      expect(ShallowArrow).toMatchSnapshot();
    });

    it('renders correctly arrow in complete mode', () => {
      const ShallowArrow = shallow(
        <Arrow
          color="#FFF"
          force={{
            id: '123',
            driving: true,
            strength: 5,
            name: 'the name of the force',
          }}
          deleteForce={deleteForce}
          setForceName={setForceName}
          increaseForce={increaseForce}
          decreaseForce={decreaseForce}
          appMode={COMPLETE_MODE}
          windowScale={{ height: 1, width: 1 }}
        />,
      );

      expect(ShallowArrow).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('calls deleteForce action creator when onDeleteArrowIconClick is called', () => {
      ShallowArrow.instance().onDeleteArrowIconClick();

      expect(deleteForce).toBeCalled();
    });

    it('doesn\'t call increaseForce action creator when onIncreaseArrowIconClick is called and it would exceed the max strength', () => {
      ShallowArrow.instance().props.force.strength = MAX_STRENGTH;
      ShallowArrow.instance().onIncreaseArrowIconClick();

      expect(increaseForce).toHaveBeenCalledTimes(0);
    });

    it('calls increaseForce action creator when onIncreaseArrowIconClick is called', () => {
      ShallowArrow.instance().props.force.strength = MIN_STRENGTH;
      ShallowArrow.instance().onIncreaseArrowIconClick();

      expect(increaseForce).toBeCalled();
    });

    it('doesn\'t call decreaseForce action creator when onDecreaseArrowIconClick is called and it would exceed the max strength', () => {
      ShallowArrow.instance().props.force.strength = MIN_STRENGTH;
      ShallowArrow.instance().onIncreaseArrowIconClick();

      expect(decreaseForce).toHaveBeenCalledTimes(0);
    });

    it('calls decreaseForce action creator when onDecreaseArrowIconClick is called', () => {
      ShallowArrow.instance().props.force.strength = MAX_STRENGTH;
      ShallowArrow.instance().onIncreaseArrowIconClick();

      expect(increaseForce).toBeCalled();
    });

    it('calls setForceName action creator when onEditArrowInputChange is called', () => {
      ShallowArrow.instance().onEditArrowInputChange({}, { value: 'some some' });

      expect(setForceName).toBeCalled();
    });

    it('sets edit mode to true when onEditArrowNameClick is called', () => {
      ShallowArrow.instance().state.editArrow = false;

      ShallowArrow.instance().onEditArrowNameClick();

      expect(ShallowArrow.state().editArrow).toBeTruthy();
    });

    it('sets edit mode to false when onEditArrowNameFormSubmit is called', () => {
      ShallowArrow.instance().state.editArrow = true;

      ShallowArrow.instance().onEditArrowNameFormSubmit();

      expect(ShallowArrow.state().editArrow).toBeFalsy();
    });
  });

  describe('method triggering', () => {
    it('calls onEditArrowNameFormSubmit when the form is submitted', () => {
      // in order for the form to show, we have to set component's state and update it
      ShallowArrow.instance().state.editArrow = true;
      ShallowArrow.instance().forceUpdate();
      ShallowArrow.update();

      mockShallowComponentMethod(ShallowArrow, 'onEditArrowNameFormSubmit');

      ShallowArrow.find('Form').dive().find('form').simulate('submit');

      expect(ShallowArrow.instance().onEditArrowNameFormSubmit).toBeCalled();
    });

    it('calls onEditArrowInputChange when the form input is changed', () => {
      // in order for the form to show, we have to set component's state and update it
      ShallowArrow.instance().state.editArrow = true;
      ShallowArrow.instance().forceUpdate();
      ShallowArrow.update();

      mockShallowComponentMethod(ShallowArrow, 'onEditArrowInputChange');

      ShallowArrow.find('Input').dive().find('input').simulate('change');

      expect(ShallowArrow.instance().onEditArrowInputChange).toBeCalled();
    });

    it('calls onEditArrowNameClick when the edit arrow icon is clicked', () => {
      // in order for the form NOT to show, we have to set component's state and update it
      ShallowArrow.instance().state.editArrow = false;
      ShallowArrow.instance().forceUpdate();
      ShallowArrow.update();

      mockShallowComponentMethod(ShallowArrow, 'onEditArrowNameClick');

      ShallowArrow.find('TiEdit').dive().find('IconBase').dive().find('svg').simulate('click');

      expect(ShallowArrow.instance().onEditArrowNameClick).toBeCalled();
    });

    it('calls onDeleteArrowIconClick when the delete icon is clicked', () => {
      mockShallowComponentMethod(ShallowArrow, 'onDeleteArrowIconClick');

      ShallowArrow.find('Icon[name="delete"]').dive().find('i').simulate('click');

      expect(ShallowArrow.instance().onDeleteArrowIconClick).toBeCalled();
    });

    it('calls onIncreaseArrowIconClick when the increase icon is clicked', () => {
      mockShallowComponentMethod(ShallowArrow, 'onIncreaseArrowIconClick');

      ShallowArrow.find('Icon[name="plus"]').dive().find('i').simulate('click');

      expect(ShallowArrow.instance().onIncreaseArrowIconClick).toBeCalled();
    });

    it('calls onDecreaseArrowIconClick when the decrease icon is clicked', () => {
      mockShallowComponentMethod(ShallowArrow, 'onDecreaseArrowIconClick');

      ShallowArrow.find('Icon[name="minus"]').dive().find('i').simulate('click');

      expect(ShallowArrow.instance().onDecreaseArrowIconClick).toBeCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('maps mode to appMode prop', () => {
      store.dispatch(switchToEditMode());

      store.dispatch(changeScale({ innerHeight: 1080, innerWidth: 1920 }));

      const props = mapStateToProps(store.getState());

      expect(props).toEqual({ appMode: EDIT_MODE, windowScale: { height: 1, width: 1 } });
    });
  });
});
