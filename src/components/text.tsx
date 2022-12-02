import {PropsWithChildren, ReactElement} from 'react';
import React, {StyleSheet, Text as TextBase, TextProps} from 'react-native';

export const Text = ({
  style,
  ...props
}: PropsWithChildren & TextProps): ReactElement => {
  return (
    <TextBase {...props} style={[styles.base, style]}>
      {props.children}
    </TextBase>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
});
