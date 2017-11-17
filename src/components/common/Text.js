// @flow
import { createComponent } from 'react-fela';

const text = ({ fontSize, marginTop, padding, color, fontWeight, position, top, right, bottom, left, float, clickable }) => ({
  color,
  fontSize,
  marginTop,
  padding,
  fontWeight,
  position,
  top,
  right,
  bottom,
  left,
  float,
  cursor: clickable && 'pointer',
});

const Text = createComponent(text, 'span', ['onClick']);

export { Text };
