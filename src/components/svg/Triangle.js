/* eslint import/prefer-default-export: off */

import React from 'react';
import PropTypes from 'prop-types';

const Triangle = ({
  x, y, z, color,
}) => (
  <polygon points={`${x} ${y} ${z}`} fill={color} />
);

Triangle.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  z: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export { Triangle };
