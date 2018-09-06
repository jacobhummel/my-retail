import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './my-retail/App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
