import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import screenOptions from '../constants/screenOpitons';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const {Navigator, Screen} = createStackNavigator();

const HomeStackRoutes = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Pokémons',
        }}
      />
      <Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detalhes do pokémon',
        }}
      />
    </Navigator>
  );
};
export default HomeStackRoutes;
