import React, { Component } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export interface WingBlankProps extends ViewProps {
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'default' | 'large' | number;
}

export default function Winglink(props: WingBlankProps) {
  let { style, size, ...restProps } = props;
  let sizeStyle: WingBlankProps['style'] = {};
  if (typeof size === 'number') {
    sizeStyle.marginHorizontal = size;
  } else if (size && styles[size]) {
    sizeStyle = styles[size];
  }
  return <View testID="RNE__WingBlank__view" {...restProps} style={[sizeStyle, style]} />;
}

const styles = StyleSheet.create({
  default: {
    marginHorizontal: 12,
  },
  small: {
    marginHorizontal: 6,
  },
  large: {
    marginHorizontal: 16,
  },
});
