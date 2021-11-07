import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '@Components/Common';

export const EmptyNews = () => {
  return (
    <View style={style.Wrapper}>
      <Typography type="SemiBold" size={18}>Belum Ada Berita</Typography>
    </View>
  );
};

const style = StyleSheet.create({
  Wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});
