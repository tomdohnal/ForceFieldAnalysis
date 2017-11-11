// @flow
import { createComponent } from 'react-fela';

const text = ({ fontSize, color }) => ({
  color,
  fontSize,
});

const Text = createComponent(text, 'span');

export { Text };
