import React from 'react';

import DrivingForceArrow from './components/DrivingForceArrow';
import HinderingForceArrow from './components/HinderingForceArrow';

const App = () => (
  <div>
    <DrivingForceArrow strength={3} />
    <HinderingForceArrow strength={4} />
  </div>
);

export default App;
