// @flow
import React from 'react';

import Arrow from './Arrow';

type Props = {
  strength: number,
}

const DrivingForceArrow = ({
  strength,
}: Props) => (
  <Arrow
    strength={strength}
    color="#859900"
  />
);

export default DrivingForceArrow;
