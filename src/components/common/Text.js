// @flow
import { createComponent } from 'react-fela';

const text = ({ fontSize, color, position, top, right, bottom, left }) => ({
  color,
  fontSize,
  position,
  top,
  right,
  bottom,
  left,
});

const Text = createComponent(text, 'span');

export { Text };
