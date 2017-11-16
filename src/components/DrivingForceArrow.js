// @flow
import React from 'react';

import { type Force } from '../ducks/forces';
import { COLORS } from '../constants/styles';
import Arrow from '../containers/Arrow';

type Props = {
  force: Force
}

const DrivingForceArrow = ({
  force
}: Props) => (
  <Arrow
    force={force}
    color={COLORS.GREEN}
  />
);

export default DrivingForceArrow;
