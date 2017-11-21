import { createComponent } from 'react-fela';

const boxStyles = ({
  width,
  height,

  display,
  position,
  textAlign,

  top,
  right,
  bottom,
  left,

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  backgroundColor,
  color,

  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,

  overflow,
  overflowX,
  overflowY,

  zIndex,
}) => ({
  width,
  height,

  display,
  position,
  textAlign,

  top,
  right,
  bottom,
  left,

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  backgroundColor,
  color,

  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,

  overflow,
  overflowX,
  overflowY,

  zIndex,
});

const Box = createComponent(boxStyles);

export { Box };
