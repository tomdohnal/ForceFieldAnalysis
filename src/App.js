import React from 'react';

import { Box } from './components/common';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterContainer from './containers/FooterContainer';
import { FOOTER_HEIGHT } from './constants/styles';

const App = () => (
  <Box height={`calc(100% - ${FOOTER_HEIGHT})`} overflowX="hidden" overflowY="scroll">
    <Header />
    <MainContainer />
    <FooterContainer />
  </Box>
);

export default App;
