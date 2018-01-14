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
    <Text fontSize="18px">Force Field Analysis is a decision-making tool. Originally created in 1940s by psychologist Kurt Lewin, it is widely used in business for making decisions. The idea is to create driving (also called helping) forces that are driving change and hindering (also called resisting) forces that are hindering change. You can attribute different strengths to each force. Once you&#39;ve done with that, you can compare the sum of your driving forces and your hindering forces and decide if you should go or not go for change!</Text>
  </Box>
);

export default AboutBox;
