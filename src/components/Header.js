// @flow
import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import { Box, Text } from './common';
import { COLORS, HEADER_HEIGHT } from '../constants/styles';

type State = {
  showAbout: boolean,
}

class Header extends Component<any, State> {
  state = {
    showAbout: false,
  };

  onAboutLinkClick = () => {
    this.setState({ showAbout: true });
  };

  onCloseAboutLinkClick = () => {
    this.setState({ showAbout: false });
  };

  render() {
    return (
      <Box height={HEADER_HEIGHT} paddingTop="16px" textAlign="center" position="relative">
        <Text fontSize="24px">Force Field Analysis Tool</Text>
        {this.state.showAbout ?
          <Box
            position="absolute"
            zIndex="999"
            backgroundColor={COLORS.WHITE}
            width="500px"
            right="16px"
            padding="16px"
            textAlign="initial"
            border={`2px ${COLORS.BLUE} solid`
            }
          >
            <Text
              onClick={this.onCloseAboutLinkClick}
              position="absolute"
              right="16px"
              top="8px"
              clickable
            >Close
            </Text>
            <Text fontSize="32px" marginTop="16px">What is Force Field Analysis?</Text>
            <Divider hidden />
            <Text fontSize="18px">Force Field Analysis is a decision-making tool. Originally created in 1940s by psychologist Kurt Lewin, it is widely used in business for making decisions. The idea is to create driving (also called helping) forces that are driving change and hindering (also called resisting) forces that are hindering change. You can attribute different strengths to each force. Once you've done with that, you can compare the sum of your driving forces and your hindering forces and decide if you should go or not go for change!</Text>
          </Box>
          :
          <Text
            onClick={this.onAboutLinkClick}
            position="absolute"
            right="20px"
            clickable
          >About
          </Text>
        }
      </Box>
    );
  }
}

export default Header;
