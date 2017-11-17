// @flow
import React, { Component } from 'react';
import { Form, Input, Button, Icon, Divider } from 'semantic-ui-react';
import EditIcon from 'react-icons/lib/ti/edit';
import { connect } from 'react-redux';

import { MAX_STRENGTH, MIN_STRENGTH } from '../constants/index';
import { COLORS } from '../constants/styles';
import { type Force, deleteForce, setForceName, increaseForce, decreaseForce } from '../ducks/forces';
import { Text, Box } from '../components/common/index';
import { Rectangle, Triangle } from '../components/svg/index';
import TextBubble from '../components/TextBubble';

type Props = {
  color: string,
  force: Force,
  deleteForce: (id: string) => void,
  setForceName: (id: string, name: string) => void,
  increaseForce: (id: string) => void,
  decreaseForce: (id: string) => void,
}

type State = {
  editArrow: boolean,
}

class Arrow extends Component<Props, State> {
  state = {
    editArrow: false,
  };

  onDeleteArrowIconClick = () => {
    this.props.deleteForce(this.props.force.id);
  };

  onIncreaseArrowIconClick = () => {
    if (this.props.force.strength !== MAX_STRENGTH) {
      this.props.increaseForce(this.props.force.id);
    }
  };

  onDecreaseArrowIconClick = () => {
    if (this.props.force.strength !== MIN_STRENGTH) {
      this.props.decreaseForce(this.props.force.id);
    }
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
              <Text fontSize="15px">{name}</Text>
              <EditIcon
                size="18"
                style={{ verticalAlign: 'top', marginLeft: '4px', cursor: 'pointer' }}
                onClick={this.onEditArrowNameClick}
              />
            </Box>
          }
        </TextBubble>
        <Box position="relative">
          <Icon
            name="delete"
            size="big"
            style={{
              position: 'absolute',
              top: 'calc(50% - 14px)',
              color: COLORS.RED,
              cursor: 'pointer',
              [driving ? 'right' : 'left']: `${arrowWidth}px`,
            }}
            onClick={this.onDeleteArrowIconClick}
          />
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
          <Box
            position="absolute"
            top={`${arrowHeight - ((arrowHeight - rectangleHeight) / 2)}px`}
            right={driving && `${triangleWidth}px`}
            left={!driving && `${triangleWidth}px`}
          >
            <Icon
              name="plus"
              size="large"
              disabled={strength === MAX_STRENGTH}
              style={{ cursor: `${strength < MAX_STRENGTH ? 'pointer' : 'initial'}` }}
              onClick={this.onIncreaseArrowIconClick}
            />
            <Text fontSize="18px">{strength}</Text>
            <Icon
              name="minus"
              size="large"
              disabled={strength === MIN_STRENGTH}
              style={{ cursor: `${strength > MIN_STRENGTH ? 'pointer' : 'initial'}` }}
              onClick={this.onDecreaseArrowIconClick}
            />
          </Box>
        </Box>
        <Divider hidden />
      </Box>
    );
  }
}

const actionCreators = { deleteForce, setForceName, increaseForce, decreaseForce };

export default connect(undefined, actionCreators)(Arrow);
