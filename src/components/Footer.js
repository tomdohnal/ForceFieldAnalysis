// @flow
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { createComponent } from 'react-fela';

import { Text } from './common';
import { FOOTER_HEIGHT } from '../constants/styles';

const footerStyles = () => ({
  position: 'fixed',
  height: FOOTER_HEIGHT,
  width: '100%',
  background: '#268bd2',
  bottom: 0,
  padding: '0 16px',
  lineHeight: FOOTER_HEIGHT,
  zIndex: 999,
});

const StyledFooter = createComponent(footerStyles);

type Props = {
  drivingForcesCount: number,
  hinderingForcesCount: number,
  centerText: string,
};

const Footer = ({
  drivingForcesCount, hinderingForcesCount, centerText,
}: Props) => (
  <StyledFooter>
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
  </StyledFooter>
);

export default Footer;
