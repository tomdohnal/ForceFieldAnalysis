import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';

const HinderingForceArrow = ({ strength }) => (
  <Arrow
    left
    strength={strength}
    color="#E74C3C"
  />
);

HinderingForceArrow.propTypes = {
  strength: PropTypes.number.isRequired,
};

export default HinderingForceArrow;
