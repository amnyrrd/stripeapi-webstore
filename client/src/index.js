import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
