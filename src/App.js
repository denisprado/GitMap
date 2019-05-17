import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <ToastContainer autoClose={3000} />
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
