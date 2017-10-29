// @flow
import React from 'react';

import Arrow from './Arrow';

type Props = {
  strength: number,
}

const HinderingForceArrow = ({
  strength,
}: Props) => (
  <Arrow
    left
    strength={strength}
    color="#E74C3C"
  />
);

export default HinderingForceArrow;
