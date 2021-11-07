/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '@Constant/style';
import { BusinessContent, FreeContent, Header } from '@Components/Account';
import { createNews, getProfile } from '@Repository/AccountRepository';

export const AccountLayout = () => {
  const navigation = useNavigation();

  const [accountRequest, setAccountRequest] = useState({
    title: null,
    body: null,
  });

  const [accountModel, setAccountModel] = useState({
    created_at: null,
    email: null,
    id: null,
    is_premium: false,
    name: null,
  });

  useEffect(() => {
    AsyncStorage.getItem('token').then(value => {
      if (!value) {
        navigation.navigate('Auth');
      } else {
        fetchData();
      }
    });
  }, []);

  const fetchData = async () => {
    try {
      const response = await getProfile();
      if (response) {
        const { result } = response.data;
        setAccountModel({ ...accountModel, ...result });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const validateInput = () => {
    const { title, body } = accountRequest;
    if (title === null || body === null) {
      ToastAndroid.showWithGravity(
        'Judul dan isi berita tidak boleh kosong',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else {
      console.log('masuk');
      postNews();
    }
  };

  const postNews = async () => {
    const { title, body } = accountRequest;
    createNews(accountModel.id, title, body)
    .then(response => {
      console.log(response.data);
      ToastAndroid.showWithGravity(
        'Berita Kamu Berhasil Di Posting : )',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }).catch(err => {
      console.log(err.response);
    });
  };

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
    .then(value => {
      navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Root'}] }));
    })
    .catch(err => console.log(err));
  };
  return (
    <SafeAreaView style={GlobalStyles.Wrapper}>
      <ScrollView>
        <Header
          name={accountModel.name}
          statusPlan={accountModel.is_premium}
          onLogout={handleLogout}
        />
        {
          !accountModel.is_premium
          ?
          <FreeContent />
          :
          <BusinessContent
            changeTitle={(value) => setAccountRequest({ ...accountRequest, title: value })}
            changeBody={(value) => setAccountRequest({ ...accountRequest, body: value })}
            onPress={validateInput}
          />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountLayout;
