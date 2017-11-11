import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import 'semantic-ui-css/semantic.min.css';

import rootReducer from './redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

const renderer = createRenderer();

ReactDOM.render(<ReduxProvider store={store}>
  <FelaProvider renderer={renderer}>
    <App />
  </FelaProvider>
</ReduxProvider>, document.getElementById('root'));

registerServiceWorker();
