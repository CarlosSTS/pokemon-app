import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {colors} from './src/common/colors';

import Routes from './src/routes';
import './src/config/reactotron';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.blueLight}
        barStyle={'light-content'}
        translucent={false}
      />
      <Routes />
    </>
  );
}
