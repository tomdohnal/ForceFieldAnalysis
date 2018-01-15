import { createComponent } from 'react-fela';
import { EDIT_MODE } from '../ducks/mode';

const textBubbleStyles = ({ color, appMode }) => ({
  position: 'relative',
  textAlign: appMode === EDIT_MODE ? 'right' : 'center',
  display: 'inline-block',
  padding: '2px',
  border: `2px solid ${color}`,
  color: '#333',
  background: '#fff',
  minWidth: '80px',
  borderRadius: '3px',
});

export default createComponent(textBubbleStyles, 'span');
