// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { type Force } from '../ducks/forces';
import { type ReduxState } from '../redux';
import Footer from '../components/Footer';
import Text from '../components/Text';

type Props = {
  drivingForcesCount: number,
  hinderingForcesCount: number,
}

const FooterContainer = ({
  drivingForcesCount, hinderingForcesCount,
}: Props) => {
  let centerText: string = '';
  if (drivingForcesCount === 0 && hinderingForcesCount === 0) {
    centerText = 'Create some forces and start the analysis!';
  } else if (drivingForcesCount === hinderingForcesCount) {
    centerText = 'It\'s a tie!';
  } else if (drivingForcesCount > hinderingForcesCount) {
    centerText = 'Let\'s make the change happen!';
  } else {
    centerText = 'No way! Status quo wins...';
  }

  return (
    <Footer>
      <Grid>
        <Grid.Column width={6}>
          <Text fontSize="54px" color="#FFF">Driving forces: {drivingForcesCount}</Text>
        </Grid.Column>
        <Grid.Column width={4} textAlign="center">
          <Text fontSize="24px" color="#FFF">{centerText}</Text>
        </Grid.Column>
        <Grid.Column width={6} textAlign="right">
          <Text fontSize="54px" color="#FFF">Hindering forces: {hinderingForcesCount}</Text>
        </Grid.Column>
      </Grid>
    </Footer>
  );
};


const mapStateToProps = (state: ReduxState) => {
  const countForceTotal = (driving: boolean) => (total: number, force: Force) => {
    if (force.driving === driving) {
      return total + force.strength;
    }

    return total;
  };

  return {
    drivingForcesCount: state.forces.length ?
      state.forces.reduce(countForceTotal(true), 0) : 0,
    hinderingForcesCount: state.forces.length ?
      state.forces.reduce(countForceTotal(false), 0) : 0,
  };
};

export default connect(mapStateToProps)(FooterContainer);
