// @flow
import React from 'react';
import { Divider } from 'semantic-ui-react';

import { Box, Text } from './common';
import { COLORS } from '../constants/styles';

type Props = {
  onCloseLinkClick: ()=>void,
}

const AboutBox = ({
  onCloseLinkClick,
}: Props) => (
  <Box
    position="absolute"
    zIndex="999"
    backgroundColor={COLORS.WHITE}
    width="500px"
    right="30px"
    padding="16px"
    textAlign="initial"
    border={`2px ${COLORS.BLUE} solid`}
  >
    <Text
      onClick={onCloseLinkClick}
      position="absolute"
      right="16px"
      top="8px"
      clickable
    >Close
    </Text>
    <Text fontSize="32px" marginTop="16px">What is Force Field Analysis?</Text>
    <Divider hidden />
    <Text fontSize="18px">Force Field Analysis is a decision-making tool. Originally created in 1940s by psychologist Kurt Lewin, it is widely used in business for making decisions. The idea behind it is to create driving forces that are driving your change and hindering forces that are hindering your change. You can attribute different strengths to each of the forces. Once you&#39;ve done with that, you can compare the sum of your driving forces and your hindering forces and decide if you should or shouldn&#39;t go for the change!</Text>
  </Box>
);

export default AboutBox;
