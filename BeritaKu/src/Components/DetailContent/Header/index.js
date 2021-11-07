import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Title } from 'react-native-paper';
import { Typography } from '@Components/Common';

export const Header = ({ title, name, date }) => {
  return (
    <View style={styles.Wrapper}>
      <Title>{title}</Title>
      <View style={styles.HeaderStyle}>
        <View>
          <Typography size={10} type="SemiBold" color="#222222">{name}</Typography>
          <Typography size={10} type="SemiBold" color="#AEB4BA">{date}</Typography>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Wrapper: {borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 16},
  HeaderStyle: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
  WrapperProfile: {width: 24, height: 24, backgroundColor: '#ddd', borderRadius: 24, marginEnd: 8},
});
