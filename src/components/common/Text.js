// @flow
import { createComponent } from 'react-fela';

const text = ({ fontSize, marginTop, color, fontWeight, position, top, right, bottom, left, float, clickable }) => ({
  color,
  fontSize,
  marginTop,
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
