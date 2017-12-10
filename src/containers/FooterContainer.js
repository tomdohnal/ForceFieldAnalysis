// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { type Force } from '../ducks/forces';
import { type ReduxState } from '../redux';
import Footer from '../components/Footer';

type Props = {
  drivingForcesCount: number,
  hinderingForcesCount: number,
}

export const FooterContainer = ({
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
    centerText = 'No way! Keep status quo...';
  }

  return (
    <Footer
      drivingForcesCount={drivingForcesCount}
      hinderingForcesCount={hinderingForcesCount}
      centerText={centerText}
    />
  );
};


export const mapStateToProps = (state: ReduxState) => {
  const countForcesTotal = (driving: boolean) => (total: number, force: Force) => {
    if (force.driving === driving) {
      return total + force.strength;
    }

    return total;
  };

  return {
    drivingForcesCount: _.size(state.forces) ?
      _.reduce(state.forces, countForcesTotal(true), 0) : 0,
    hinderingForcesCount: _.size(state.forces) ?
      _.reduce(state.forces, countForcesTotal(false), 0) : 0,
  };
};

export default connect(mapStateToProps)(FooterContainer);
