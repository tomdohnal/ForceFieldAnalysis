// @flow
import { createComponent } from 'react-fela';

const text = ({ fontSize, color }) => ({
  color,
  fontSize,
});

export default createComponent(text, 'span');
