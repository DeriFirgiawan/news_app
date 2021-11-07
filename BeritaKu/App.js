import React from 'react';
import 'react-native-gesture-handler';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import { Routers } from '@Routers/';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Montserrat-Regular',
    },
  };
  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

export default App;
