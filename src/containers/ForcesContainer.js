// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { COLORS } from '../constants/styles';
import DrivingForceArrow from '../components/DrivingForceArrow';
import HinderingForceArrow from '../components/HinderingForceArrow';
import { Box } from '../components/common';
import { addDrivingForce, addHinderingForce, type Forces } from '../ducks/forces';
import { type ReduxState } from '../redux';
import NewForceForm from '../components/NewForceForm';

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
  renderForces() {
    return _.map(this.props.forces, force => (
      <Box key={force.id} >
        {this.props.driving ?
          <DrivingForceArrow force={force} /> : <HinderingForceArrow force={force} />
        }
      </Box>
    ));
  }

  render() {
    const { driving, submitButtonText, addForce } = this.props;

    return (
      <Box>
        <Box textAlign={driving ? 'right' : 'left'}>{this.renderForces()}</Box>

        <NewForceForm
          submitButtonText={submitButtonText}
          submitButtonColor={driving ? COLORS.GREEN : COLORS.RED}
          onFormSubmit={addForce}
        />
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
