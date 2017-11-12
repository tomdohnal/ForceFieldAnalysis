import { createComponent } from 'react-fela';

const arrowMargin = 12;
const arrowHeight = 12;

const textBubbleStyles = ({ color, left }) => ({
  position: 'relative',
  display: 'inline-block',
  padding: '4px 12px',
  margin: '0 0 16px',
  border: `2px solid ${color}`,
  color: '#333',
  background: '#fff',
  minWidth: '100px',
  WebkitBorderRadius: '5px',
  MozBorderRadius: '5px',
  borderRadius: '5px',
  ':before': {
    content: '""',
    position: 'absolute',
    bottom: `-${arrowHeight}px`,
    left: left ? `${arrowMargin}px` : `calc(100% - ${arrowMargin + (arrowHeight * 2)}px)`,
    borderWidth: `${arrowHeight}px ${arrowHeight}px 0`,
    borderStyle: 'solid',
    borderColor: `${color} transparent`,
    display: 'block',
    width: '0',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    bottom: `-${arrowHeight - 3}px`,
    left: left ? `${arrowMargin + 3}px` : `calc(100% - ${arrowMargin + ((arrowHeight * 2) - 3)}px)`,
    borderWidth: `${arrowHeight - 3}px ${arrowHeight - 3}px 0`,
    borderStyle: 'solid',
    borderColor: '#fff transparent',
    display: 'block',
    width: '0',
  },
});

export default createComponent(textBubbleStyles, 'span');
