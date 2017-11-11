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
    color="#dc2f2f"
  />
);

export default HinderingForceArrow;
