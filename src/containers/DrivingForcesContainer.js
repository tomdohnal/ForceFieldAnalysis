// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';

import DrivingForceArrow from '../components/DrivingForceArrow';
import { addDrivingForce, type Forces } from '../ducks/forces';

type State = {
  newDrivingForceName: string,
  newDrivingForceError: boolean,
  newDrivingForceErrorText: string,
};

type Props = {
  forces: Forces,
  addDrivingForce: (name: string, strength: number) => void,
};

class DrivingForcesContainer extends Component<Props, State> {
  state = {
    newDrivingForceName: '',
    newDrivingForceError: false,
    newDrivingForceErrorText: '',
  };

  onNewDrivingForceInputChange = (e) => {
    this.setState({
      newDrivingForceName: e.target.value,
      newDrivingForceError: false,
      newDrivingForceErrorText: '',
    });
  };

  onNewDrivingForceButtonClick = () => {
    if (!this.state.newDrivingForceName) {
      this.setState({
        newDrivingForceError: true,
        newDrivingForceErrorText: 'Enter the description for the force.',
      });
    } else {
      this.setState({
        newDrivingForceName: '',
      });

      this.props.addDrivingForce(this.state.newDrivingForceName, 2);
    }
  };

  renderForces() {
    return this.props.forces.map(force => (
      <DrivingForceArrow strength={force.strength} key={force.id} />));
  }

  render() {
    return (
      <div>
        {this.renderForces()}
        <Input
          onChange={this.onNewDrivingForceInputChange}
          value={this.state.newDrivingForceName}
          error={this.state.newDrivingForceError}
        />
        <Button onClick={this.onNewDrivingForceButtonClick}>New driving force</Button>
        <span>{this.state.newDrivingForceErrorText}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forces: state.forces.filter(force => force.driving === true),
});

export default connect(mapStateToProps, { addDrivingForce })(DrivingForcesContainer);
