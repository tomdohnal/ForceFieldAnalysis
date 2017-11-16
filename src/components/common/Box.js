import { createComponent } from 'react-fela';

const boxStyles = ({
  width,
  height,
  color,
  position,
  top,
  right,
  bottom,
  left,
  display,
  textAlign,
  padding,
  paddingTop,
  marginTop,
  overflowX,
  overflowY,
}) => ({
  width,
  height,
  backgroundColor: color,
  position,
  top,
  right,
  bottom,
  left,
  display,
  textAlign,
  padding,
  paddingTop,
  marginTop,
  overflowX,
  overflowY,
});

const Box = createComponent(boxStyles);

export { Box };
