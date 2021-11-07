import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Feather';

// Screen
import { Home, Account } from '@View/';

const Tab = createMaterialBottomTabNavigator();

export const Main = () => {
  const styleBar = {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
  };
  return (
    <Tab.Navigator
      activeColor="#E41B13"
      barStyle={styleBar}
      inactiveColor="#AEB4BA"
      screenOptions={({route}) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Account':
              iconName = 'user';
              break;
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

