import React from 'react';
import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '@Constant/style';
import NoContentImage from '@Assets/Images/no_content.svg';

export const FreeContent = () => {
  return (
    <View style={[GlobalStyles.CenterdContent, styles.Wrapper]}>
      <NoContentImage />
    </View>
  );
};

export default FreeContent;

const styles = StyleSheet.create({
  Wrapper: { position: 'relative', top: 150, left: 0, right: 0, paddingBottom: 150},
});
