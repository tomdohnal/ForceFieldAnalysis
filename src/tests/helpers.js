export const mockShallowComponentMethod = (shallowComponent, methodName) => {
  shallowComponent.instance()[methodName] = jest.fn();

  shallowComponent.instance().forceUpdate();
  shallowComponent.update();
};
