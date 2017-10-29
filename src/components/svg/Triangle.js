// @flow
import React from 'react';

type Props = {
  x: string,
  y: string,
  z: string,
  color: string,
}

const Triangle = ({
  x, y, z, color,
}: Props) => (
  <polygon points={`${x} ${y} ${z}`} fill={color} />
);

export { Triangle };
