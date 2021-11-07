import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Navbar = ({ children, className }) => <View style={[styles.NavStyle, className]}>{children}</View>;

export default Navbar;

const styles = StyleSheet.create({
  NavStyle: {
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
