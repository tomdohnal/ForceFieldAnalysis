// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';

import DrivingForceArrow from '../components/DrivingForceArrow';
import HinderingForceArrow from '../components/HinderingForceArrow';
import { addDrivingForce, addHinderingForce, type Forces } from '../ducks/forces';
import { State as ReduxState } from '../redux';

type State = {
  newForceName: string,
  newForceError: boolean,
  newForceErrorText: string,
};

type Props = {
  driving: boolean,
  submitButtonText: string,
  forces: Forces,
  addForce: (name: string, strength: number) => void,
};

class ForcesContainer extends Component<Props, State> {
  state = {
    newForceName: '',
    newForceError: false,
    newForceErrorText: '',
  };

  onNewForceInputChange = (e) => {
    this.setState({
      newForceName: e.target.value,
      newForceError: false,
      newForceErrorText: '',
    });
  };

  onNewForceButtonClick = () => {
    if (!this.state.newForceName) {
      this.setState({
        newForceError: true,
        newForceErrorText: 'Enter the description for the force.',
      });
    } else {
      this.setState({
        newForceName: '',
      });

      this.props.addForce(this.state.newForceName, 2);
    }
  };

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
      <div>
        {this.renderForces()}
        <Input
          onChange={this.onNewForceInputChange}
          value={this.state.newForceName}
          error={this.state.newForceError}
        />
        <Button onClick={this.onNewForceButtonClick}>{this.props.submitButtonText}</Button>
        <span>{this.state.newForceErrorText}</span>
      </div>
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
