import * as React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './store'
import ItemView from './catalog/screens/ItemView';

const store = configureStore();

class App extends React.Component {
  public render() {
    return <Provider store={store}>
      <ItemView id="1840" />
    </Provider>
  }
}

export default App;
