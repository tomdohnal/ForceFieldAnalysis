import React from 'react';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterContainer from './containers/FooterContainer';
import { FOOTER_HEIGHT } from './constants/styles';

const App = () => (
  <div style={{ height: `calc(100% - ${FOOTER_HEIGHT})` }}>
    <Header />
    <MainContainer />
    <FooterContainer />
  </div>
);

export default App;
