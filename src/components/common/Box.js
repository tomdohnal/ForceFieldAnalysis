import { createComponent } from 'react-fela';

const boxStyles = ({ width, height, color, position, display, textAlign, padding, marginTop }) => ({
  width,
  height,
  backgroundColor: color,
  position,
  display,
  textAlign,
  padding,
  marginTop,
});

const Box = createComponent(boxStyles);

export { Box };
