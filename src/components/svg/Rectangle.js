/* eslint import/prefer-default-export: off */

import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({
  width, height, x, y, color,
}) => (
  <rect x={x} y={y} width={width} height={height} fill={color} />
);

Rectangle.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export { Rectangle };
