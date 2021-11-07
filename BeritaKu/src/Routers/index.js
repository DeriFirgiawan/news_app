import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from './Main';
import { Auth } from '@View/';
import { AuthRegister } from '@View/Auth';
import { DetailNews } from '@View/Home';
import PlanView from '@View/Plan';
import SuccessRegister from '@View/SuccessRegister';

const Stack = createStackNavigator();
export const Routers = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={Main} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="AuthRegister" options={{ headerShown: true, title: 'Daftar' }} component={AuthRegister} />
      <Stack.Screen name="ChosePlan" options={{ headerShown: true, title: ''}} component={PlanView} />
      <Stack.Screen name="DetailNews" options={{ headerShown: true, title: '' }} component={DetailNews} />
      <Stack.Screen name="Success" component={SuccessRegister} />
    </Stack.Navigator>
  );
};
