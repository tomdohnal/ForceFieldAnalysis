// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Box } from './components/common';
import Header from './containers/Header';
import MainContainer from './components/MainContainer';
import FooterContainer from './containers/FooterContainer';
import { FOOTER_HEIGHT } from './constants/styles';
import { changeScale, type ChangeScaleAction } from './ducks/scale';

type Props = {
  changeScale: (window: { innerHeight: number, innerWidth: number }) => ChangeScaleAction,
}

class App extends Component<Props> {
  componentDidMount() {
    window.addEventListener('resize', () => { this.props.changeScale(window); });
  }

  render() {
    return (
      <Box height={`calc(100% - ${FOOTER_HEIGHT})`} overflowX="hidden" overflowY="scroll">
        <Header />
        <MainContainer />
        <FooterContainer />
      </Box>
    );
  }
}

export default connect(undefined, { changeScale })(App);
