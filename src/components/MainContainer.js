import React from 'react';
import { Grid } from 'semantic-ui-react';

import DrivingForcesContainer from './DrivingForcesContainer';
import HinderingForcesContainer from './HinderingForcesContainer';
import ChangeContainer from '../containers/ChangeContainer';
import { HEADER_HEIGHT } from '../constants/styles';

const MainContainer = () => (
  <Grid style={{ minHeight: `calc(100% - ${HEADER_HEIGHT}`, margin: 0 }}>
    <Grid.Row style={{ padding: '8px 0px' }}>
      <Grid.Column width={6}>
        <DrivingForcesContainer />
      </Grid.Column>
      <Grid.Column width={4}>
        <ChangeContainer />
      </Grid.Column>
      <Grid.Column width={6}>
        <HinderingForcesContainer />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MainContainer;
