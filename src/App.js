import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

console.tron.log('testando');
const App = () => (
  <div className="App">
    <GlobalStyle />
    <ToastContainer />
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
