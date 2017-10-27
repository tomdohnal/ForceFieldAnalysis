import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';

const DrivingForceArrow = ({ strength }) => (
  <Arrow
    strength={strength}
    color="#A5BB2B"
  />
);

DrivingForceArrow.propTypes = {
  strength: PropTypes.number.isRequired,
};

export default DrivingForceArrow;
