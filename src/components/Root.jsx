import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'app/store';
import configureSocket from 'app/services/socket';
import theme from 'styles/theme';
import App from './App';

export const socket = configureSocket(store.dispatch);

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
