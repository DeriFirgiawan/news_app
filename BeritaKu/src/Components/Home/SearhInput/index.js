import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export const SearchInput = props => {
  return (
    <View>
      <TextInput style={styles.InputStyle} {...props} />
      <View style={styles.IconStyle}>
        <Icon size={16} name="search" color="#AEB4BA" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 32,
    fontSize: 14,
    backgroundColor: '#F2F6F9',
  },
  IconStyle: {
    position: 'absolute',
    left: 0,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
