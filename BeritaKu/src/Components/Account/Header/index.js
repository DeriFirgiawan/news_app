/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { Typography } from '@Components/Common';
import { GlobalStyles } from '@Constant/style';

export const Header = ({ name, statusPlan, onLogout}) => {
  return (
    <View style={GlobalStyles.Container}>
      <View style={[styles.WrapperProfile, { justifyContent: 'space-between' }]}>
        <View style={styles.WrapperProfile}>
          <Avatar.Icon size={42} label={'CM'} icon="newspaper-variant-outline"  style={{marginEnd: 8}} />
          <View>
            <Typography size={18} type="SemiBold" color="#222222">{name}</Typography>
            <Typography>
              Member {statusPlan ? 'Bisnis' : 'Gratis'}
            </Typography>
          </View>
        </View>
        <TouchableOpacity onPress={onLogout}>
          <Typography type="SemiBold" color="#F71530">Keluar</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  WrapperProfile: {flexDirection: 'row', alignItems: 'center'},
});
