import React from 'react';
import { StyleSheet,View } from 'react-native';

import { Typography } from '@Components/Common';
import { GlobalStyles } from '@Constant/style';

export const ContentImage = ({ name }) => {
  return (
    <View style={[styles.Wrapper, GlobalStyles.CenterdContent]}>
      <Typography type="SemiBold" size={18}>{ name }</Typography>
    </View>
  );
};

export default ContentImage;

const styles = StyleSheet.create({
  Wrapper: {backgroundColor: '#ddd', height: 176, marginVertical: 16, borderRadius: 4},
});
