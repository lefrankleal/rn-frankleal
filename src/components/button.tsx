import {PropsWithChildren} from 'react';
import React, {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const NavigationButton = ({
  children,
  onPress,
  style,
}: PropsWithChildren & TouchableOpacityProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.base, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    padding: 16,
  },
});
