// @flow
import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import EditIcon from 'react-icons/lib/ti/edit';
import { connect } from 'react-redux';

import { type Force, setForceName } from '../ducks/forces';
import { Text, Box } from '../components/common/index';
import { Rectangle, Triangle } from '../components/svg/index';
import TextBubble from '../components/TextBubble';

type Props = {
  color: string,
  force: Force,
  setForceName: (id: string, name: string) => void,
}

type State = {
  editArrow: boolean,
}

class Arrow extends Component<Props, State> {
  state = {
    editArrow: false,
  };

  onEditArrowInputChange = (event, data) => {
    this.props.setForceName(this.props.force.id, data.value);
  };

  onEditArrowNameClick = () => {
    this.setState({ editArrow: true });
  };

  onEditArrowNameFormSubmit = () => {
    this.setState({ editArrow: false });
  };

  render() {
    const { force: { driving, strength, name }, color } = this.props;

    const arrowUnitWidth = 50;
    const arrowWidth = strength * arrowUnitWidth;
    const arrowHeight = 80;
    const rectangleHeight = arrowHeight - 40;
    const triangleWidth = 36;

    return (
      <Box>
        <TextBubble color={color} left={!driving}>
          {this.state.editArrow ?
            <Form onSubmit={this.onEditArrowNameFormSubmit}>
              <Input autoFocus size="small" value={name} onChange={this.onEditArrowInputChange} action>
                <input style={{ width: 'inherit' }} />
                <Button size="small">Save changes</Button>
              </Input>
            </Form>
            :
            <Box>
              <Text fontSize="18px">{name}</Text>
              <EditIcon
                size="18"
                style={{ verticalAlign: 'top', marginLeft: '4px', cursor: 'pointer' }}
                onClick={this.onEditArrowNameClick}
              />
            </Box>
          }
        </TextBubble>
        <Box>
          <svg height={arrowHeight} width={arrowWidth} viewBox={`0 0 ${arrowWidth} ${arrowHeight}`}>
            <Rectangle
              width={arrowWidth - triangleWidth}
              height={rectangleHeight}
              color={color}
              x={!driving ? triangleWidth : 0}
              y={(arrowHeight - rectangleHeight) / 2}
            />
            <Triangle
              width={triangleWidth}
              height={arrowHeight}
              x={`${!driving ? triangleWidth : arrowWidth - triangleWidth},0`}
              y={`${!driving ? triangleWidth : arrowWidth - triangleWidth},${arrowHeight}`}
              z={`${!driving ? 0 : arrowWidth},${arrowHeight / 2}`}
              color={color}
            />
          </svg>
        </Box>
      </Box>
    );
  }
}

export default connect(undefined, { setForceName })(Arrow);
