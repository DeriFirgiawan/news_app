import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@Config/Redux';
import {name as appName} from './app.json';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
