import React from 'react';
import {Text} from 'react-native';

export const Typography = (
  {
    align,
    children,
    classes,
    color,
    size,
    type = 'Regular',
    lineBreakMode,
    numberOfLines,
  }
) => {
  const titleStyle = {
    color: color,
    fontFamily: `Montserrat-${type}`,
    fontSize: size,
    textAlign: align,
  };
  return (
    <Text style={[classes, titleStyle]} lineBreakMode={lineBreakMode} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
