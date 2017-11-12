// @flow
import React from 'react';

import { COLORS } from '../constants/styles';
import Arrow from './Arrow';

type Props = {
  strength: number,
  name: string,
}

const DrivingForceArrow = ({
  strength, name,
}: Props) => (
  <Arrow
    strength={strength}
    color={COLORS.GREEN}
    name={name}
  />
);

export default DrivingForceArrow;
