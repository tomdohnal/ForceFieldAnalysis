import React from 'react';

import HelpingForceArrow from './components/HelpingForceArrow';
import HinderingForceArrow from './components/HinderingForceArrow';

const App = () => (
  <div>
    <HelpingForceArrow strength={3} />
    <HinderingForceArrow strength={4} />
  </div>
);

export default App;
