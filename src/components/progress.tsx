import React, {StyleSheet, View} from 'react-native';

export const Progress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'transparent', height: 4, width: '100%'},
  progress: {
    backgroundColor: '#FF5018',
    width: 50,
    height: '100%',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
});
