// @flow
import React from 'react';

import { Rectangle, Triangle } from './svg';

type Props = {
  left?: boolean,
  color: string,
  strength: number,
}

const Arrow = ({
  left, color, strength,
}: Props) => {
  const arrowWidth = strength * 50;
  const arrowHeight = 120;
  const rectangleHeight = arrowHeight - 50;
  const triangleWidth = 36;

  return (
    <svg height={arrowHeight} width={arrowWidth} viewBox={`0 0 ${arrowWidth} ${arrowHeight}`}>
      <Rectangle
        width={arrowWidth - triangleWidth}
        height={rectangleHeight}
        color={color}
        x={left ? triangleWidth : 0}
        y={(arrowHeight - rectangleHeight) / 2}
      />
      <Triangle
        width={triangleWidth}
        height={arrowHeight}
        x={`${left ? triangleWidth : arrowWidth - triangleWidth},0`}
        y={`${left ? triangleWidth : arrowWidth - triangleWidth},${arrowHeight}`}
        z={`${left ? 0 : arrowWidth},${arrowHeight / 2}`}
        color={color}
      />
    </svg>
  );
};

export default Arrow;
