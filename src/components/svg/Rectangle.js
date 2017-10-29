// @flow
import React from 'react';

type Props = {
  width: number,
  height: number,
  x: number,
  y: number,
  color: number,
}

const Rectangle = ({
  width, height, x, y, color,
}: Props) => (
  <rect x={x} y={y} width={width} height={height} fill={color} />
);

export { Rectangle };
