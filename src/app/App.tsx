import * as React from 'react';
import './App.css';

import ItemView from './catalog/screens/ItemView';

class App extends React.Component {
  public render() {
    return (
      <ItemView id="1840" />
    );
  }
}

export default App;
