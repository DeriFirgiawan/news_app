/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '@Constant/style';
import Form from '@Components/Auth/Form';
import HeroLogin from '@Assets/Images/hero_login.svg';
import { Button } from 'react-native-paper';
import { apiPostLogin } from '@Repository/AuthRepository';

export const AuthLayout = () => {
  const navigation = useNavigation();
  const [authModel, setAuthModel] = useState({
    email: '',
    password: '',
    isError: false,
    isLoading: false,
  });

  const handleLogin = () => {
    const { email, password } = authModel;
    setAuthModel({ ...authModel, isLoading: true });
    apiPostLogin(email, password)
    .then(response => {
      const { token } = response.data;
      AsyncStorage.setItem('token', token);
      navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Root'}] }));
      setAuthModel({ ...authModel, isLoading: false });
    }).catch(error => {
      if (error) {
        console.log(error.response);
        setAuthModel({ ...authModel, isLoading: false });
        setAuthModel({ ...authModel, isError: true });
      }
    });
  };
  return (
    <SafeAreaView style={[GlobalStyles.Wrapper, GlobalStyles.Container, GlobalStyles.BetweenContent]}>
      <View>
        <View style={GlobalStyles.CenterdContent}>
          <HeroLogin />
        </View>
        <Form
          isPassword={authModel.isError}
          changeEmail={(value) => setAuthModel({ email: value})}
          changePassword={(value) => setAuthModel({ ...authModel, password: value})}
          onPress={() => navigation.navigate('AuthRegister')}
        />
      </View>
      <Button
        loading={authModel.isLoading}
        disabled={authModel.isLoading}
        onPress={handleLogin}
        color="#F71530"
        mode="contained"
        uppercase={false}
        style={{marginTop: 16}}
      >Masuk</Button>
    </SafeAreaView>
  );
};

export default AuthLayout;
