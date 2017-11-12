// @flow
import React from 'react';

import { Box } from './common';
import { Rectangle, Triangle } from './svg';
import TextBubble from './TextBubble';

type Props = {
  left?: boolean,
  color: string,
  strength: number,
  name: string,
}

const Arrow = ({
  left, color, strength, name,
}: Props) => {
  const arrowWidth = strength * 50;
  const arrowHeight = 100;
  const rectangleHeight = arrowHeight - 40;
  const triangleWidth = 36;

  return (
    <Box>
      <TextBubble color={color} left={left}>{name}</TextBubble>
      <Box>
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
      </Box>
    </Box>
  );
};

export default Arrow;
