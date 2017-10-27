import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';

const HelpingForceArrow = ({ strength }) => (
  <Arrow
    strength={strength}
    color="#A5BB2B"
  />
);

HelpingForceArrow.propTypes = {
  strength: PropTypes.number.isRequired,
};

export default HelpingForceArrow;
