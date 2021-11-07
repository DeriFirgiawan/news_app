/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Hero from '@Assets/Images/hero_sucess_register.svg';
import { GlobalStyles } from '@Constant/style';
import { Typography } from '@Components/Common';

export const SuccessRegisterLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 2000);
  }, []);
  return (
    <View style={[GlobalStyles.Wrapper, GlobalStyles.CenterdContent, GlobalStyles.Container]}>
      <Typography type="SemiBold" size={24} classes={{ paddingBottom: 16 }} color="#222222">Hero Berhasil Register</Typography>
      <Hero />
    </View>
  );
};

export default SuccessRegisterLayout;
