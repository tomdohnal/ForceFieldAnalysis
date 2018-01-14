// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';

import { Box, Text } from '../components/common/index';
import { COLORS, HEADER_HEIGHT } from '../constants/styles';
import AboutBox from '../components/AboutBox';
import { resetState, type ResetStateAction, type ReduxState } from '../redux';
import { switchToCompleteMode, switchToEditMode, type SwitchToCompleteModeAction, type SwitchToEditModeAction, type Mode, EDIT_MODE } from '../ducks/mode';

type Props = {
  resetState: () => ResetStateAction,
  switchToCompleteMode: () => SwitchToCompleteModeAction,
  switchToEditMode: () => SwitchToEditModeAction,
  appMode: Mode,
}

type State = {
  showAbout: boolean,
}

export class Header extends Component<Props, State> {
  state = {
    showAbout: false,
  };

  onResetButtonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.props.resetState();

    if (e.target instanceof HTMLButtonElement) {
      e.target.blur();
    }
  };

  onMakeDecisionButtonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.props.switchToCompleteMode();

    if (e.target instanceof HTMLButtonElement) {
      e.target.blur();
    }
  };

  onEditForcesButtonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.props.switchToEditMode();

    if (e.target instanceof HTMLButtonElement) {
      e.target.blur();
    }
  };

  onAboutLinkClick = () => {
    this.setState({ showAbout: true });
  };

  onCloseAboutLinkClick = () => {
    this.setState({ showAbout: false });
  };

  render() {
    return (
      <Box height={HEADER_HEIGHT} paddingTop="16px">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Box paddingLeft="16px">
                <Button
                  onClick={this.onResetButtonClick}
                  style={{ color: COLORS.WHITE, background: COLORS.RED }}
                >
                  Reset analysis
                </Button>
                {this.props.appMode === EDIT_MODE ?
                  <Button onClick={this.onMakeDecisionButtonClick}>Make decision</Button>
                  :
                  <Button onClick={this.onEditForcesButtonClick}>Edit forces</Button>
                }
              </Box>
            </Grid.Column>
            <Grid.Column>
              <Box textAlign="center">
                <Text fontSize="24px">Force Field Analysis Tool</Text>
              </Box>
            </Grid.Column>
            <Grid.Column floated="right">
              {this.state.showAbout ?
                <AboutBox onCloseLinkClick={this.onCloseAboutLinkClick} />
                :
                <Text
                  onClick={this.onAboutLinkClick}
                  position="absolute"
                  right="30px"
                  clickable
                >About
                </Text>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Box>
    );
  }
}

export const mapStateToProps = (state: ReduxState) => ({ appMode: state.mode });

export default connect(
  mapStateToProps, { resetState, switchToCompleteMode, switchToEditMode },
)(Header);
