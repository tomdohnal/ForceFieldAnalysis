import React from 'react';
import PropTypes from 'prop-types';

import { Rectangle, Triangle } from './svg';

const Arrow = ({
  left, color, strength,
}) => {
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

Arrow.propTypes = {
  left: PropTypes.bool,
  color: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
};

Arrow.defaultProps = {
  left: false,
};

export default Arrow;
