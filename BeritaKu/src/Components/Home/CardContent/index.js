import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

import { Typography } from '@Components/Common';
import { GlobalStyles } from '@Constant/style';

export const CardContent = ({ title, subtitle, onPressed }) => {
  return (
    <TouchableNativeFeedback onPress={() => onPressed()}>
      <View style={[styles.Card, GlobalStyles.Container]}>
        <View style={styles.WrapperImage}>
          <Typography type="Bold" size={16}>B</Typography>
        </View>
        <View style={styles.WrapperContent}>
          <Typography size={14} color="#484D51" lineBreakMode="tail" numberOfLines={1}  type="SemiBold">{title}</Typography>
          <Typography size={10} color="#484D51" lineBreakMode="tail" numberOfLines={1}>
            {subtitle}
          </Typography>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  Card: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginEnd: 16,
  },
  WrapperContent: {paddingLeft: 16,paddingRight: 16},
  WrapperImage: {
    backgroundColor: '#ddd',
    width: 48,
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
