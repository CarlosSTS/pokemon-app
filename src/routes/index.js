import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavgation from './stack.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavgation />
    </NavigationContainer>
  );
};

export default Routes;
