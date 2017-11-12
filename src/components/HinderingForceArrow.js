// @flow
import React from 'react';

import { COLORS } from '../constants/styles';
import Arrow from './Arrow';

type Props = {
  strength: number,
  name: string,
}

const HinderingForceArrow = ({
  strength, name
}: Props) => (
  <Arrow
    left
    strength={strength}
    color={COLORS.RED}
    name={name}
  />
);

export default HinderingForceArrow;
