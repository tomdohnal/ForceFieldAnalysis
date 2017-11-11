// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Select, Label } from 'semantic-ui-react';

import DrivingForceArrow from '../components/DrivingForceArrow';
import HinderingForceArrow from '../components/HinderingForceArrow';
import { Box } from '../components/common';
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

  onNewForceStrengthDropdownChange = (e, data) => {
    this.setState({
      newForceStrength: data.value,
    });
  };

  onNewForceButtonClick = () => {
    if (!this.state.newForceName) {
      this.setState({
        newForceError: true,
        newForceErrorText: 'Enter the description for the force.',
      });
    } else {
      this.props.addForce(this.state.newForceName, this.state.newForceStrength);

      this.setState(this.defaultState);
    }
  };

  getStrengthOptions() {
    let options = [];

    for (let i = 1; i <= 8; i += 1) {
      options = [...options, { key: i, text: i, value: i }];
    }

    return options;
  }

  renderForces() {
    return this.props.forces.map((force) => {
      if (this.props.driving) {
        return <DrivingForceArrow strength={force.strength} key={force.id} />;
      }
      return <HinderingForceArrow strength={force.strength} key={force.id} />;
    });
  }

  render() {
    return (
      <Box padding="0 16px">
        {this.renderForces()}
        <Form>
          <Form.Group inline>
            <Form.Field>
              <label>Force name:</label>
              {this.state.newForceError ? <Label basic color="red" pointing="below">{this.state.newForceErrorText}</Label> : ''}
              <Input
                onChange={this.onNewForceInputChange}
                value={this.state.newForceName}
                error={this.state.newForceError}
              />
            </Form.Field>
            <Form.Field>
              <label>Force strength</label>
              <Select
                compact
                labeled
                onChange={this.onNewForceStrengthDropdownChange}
                options={this.getStrengthOptions()}
                value={this.state.newForceStrength}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <Button onClick={this.onNewForceButtonClick}>{this.props.submitButtonText}</Button>
          </Form.Field>
        </Form>
      </Box>
    );
  }
}

const mapStateToProps = (state: ReduxState, ownProps: Props) => ({
  forces: state.forces.filter(force => force.driving === ownProps.driving),
});

const mapDispatchToProps = (dispatch, ownProps: Props) => ({
  addForce: (name: string, strength: number) => (
    ownProps.driving ?
      dispatch(addDrivingForce(name, strength)) :
      dispatch(addHinderingForce(name, strength))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForcesContainer);
