// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Input, Button, Label, Icon } from 'semantic-ui-react';

import { MIN_STRENGTH, MAX_STRENGTH } from '../constants';
import { COLORS } from '../constants/styles';
import DrivingForceArrow from '../components/DrivingForceArrow';
import HinderingForceArrow from '../components/HinderingForceArrow';
import { Box, Text } from '../components/common';
import { addDrivingForce, addHinderingForce, type Forces } from '../ducks/forces';
import { type ReduxState } from '../redux';

type State = {
  newForceName: string,
  newForceError: boolean,
  newForceErrorText: string,
  newForceStrength: number,
};

type Props = {
  driving: boolean,
  submitButtonText: string,
  forces: Forces,
  addForce: (name: string, strength: number) => void,
};

class ForcesContainer extends Component<Props, State> {
  defaultState = {
    newForceName: '',
    newForceError: false,
    newForceErrorText: '',
    newForceStrength: 1,
  };

  state = this.defaultState;

  onNewForceInputChange = (e, data) => {
    this.setState({
      newForceName: data.value,
      newForceError: false,
      newForceErrorText: '',
    });
  };

  onIncreaseForceButtonClick = () => {
    if (this.state.newForceStrength !== MAX_STRENGTH) {
      this.setState(prevState => ({
        newForceStrength: prevState.newForceStrength + 1,
      }));
    }
  };

  onDecreaseForceButtonClick = () => {
    if (this.state.newForceStrength !== MIN_STRENGTH) {
      this.setState(prevState => ({
        newForceStrength: prevState.newForceStrength - 1,
      }));
    }
  };

  onNewForceButtonClick = () => {
    if (!this.state.newForceName) {
      this.setState({
        newForceError: true,
        newForceErrorText: 'Enter the description of the force.',
      });
    } else {
      this.props.addForce(this.state.newForceName, this.state.newForceStrength);

      this.setState(this.defaultState);
    }
  };

  renderForces() {
    return _.map(this.props.forces, (force) => {
      if (this.props.driving) {
        return (
          <Box key={force.id} >
            <DrivingForceArrow force={force} />
          </Box>
        );
      }
      return (
        <Box key={force.id} >
          <HinderingForceArrow force={force} />
        </Box>
      );
    });
  }

  render() {
    const { driving, submitButtonText } = this.props;

    return (
      <Box padding="0 16px">
        <Box textAlign={driving ? 'right' : 'left'}>{this.renderForces()}</Box>
        <Form>
          <Form.Field>
            <label>Force name:</label>
            <Input
              onChange={this.onNewForceInputChange}
              value={this.state.newForceName}
              error={this.state.newForceError}
            />
            {this.state.newForceError ? <Label basic color="red" pointing>{this.state.newForceErrorText}</Label> : ''}
          </Form.Field>
          <Form.Group inline>
            <label style={{ whiteSpace: 'nowrap' }}>Force strength:</label>
            <Button
              disabled={this.state.newForceStrength === MAX_STRENGTH}
              basic
              onClick={this.onIncreaseForceButtonClick}
              content="Increase"
              icon="plus"
              labelPosition="left"
              as="a"
            />
            <Text fontSize="24px" padding="0 12px">{this.state.newForceStrength}</Text>
            <Button
              disabled={this.state.newForceStrength === MIN_STRENGTH}
              basic
              onClick={this.onDecreaseForceButtonClick}
              content="decrease"
              icon="minus"
              labelPosition="right"
              as="a"
            />
            <Button
              fluid
              onClick={this.onNewForceButtonClick}
              style={{ color: COLORS.WHITE, background: driving ? COLORS.GREEN : COLORS.RED }}
            >
              {submitButtonText}
            </Button>
          </Form.Group>
          <Form.Field>

          </Form.Field>
        </Form>
      </Box>
    );
  }
}

const mapStateToProps = (state: ReduxState, ownProps: Props) => ({
  forces: _.filter(state.forces, force => force.driving === ownProps.driving),
});

const mapDispatchToProps = (dispatch, ownProps: Props) => ({
  addForce: (name: string, strength: number) => (
    ownProps.driving ?
      dispatch(addDrivingForce(name, strength)) :
      dispatch(addHinderingForce(name, strength))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForcesContainer);
