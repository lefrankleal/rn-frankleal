import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import React, {ScrollView, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import mocks from './mocks.json';

type DetailsProps = Partial<
  NativeStackScreenProps<
    {Home: undefined; Details: {label: string}},
    'Details'
  > & {
    route: {
      params: {
        label: string;
      };
    };
  }
>;

export const DetailsScreen = ({navigation, route}: DetailsProps) => {
  useEffect(() => {
    navigation?.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Icon.Button
          name="x"
          backgroundColor="transparent"
          size={11}
          color="#000"
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{route?.params.label}</Text>
      <Text style={styles.content}>{mocks.lorem.long}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  leftHead: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000',
  },
  container: {
    marginHorizontal: 25,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 15,
  },
  content: {
    marginVertical: 15,
    color: '#333333',
  },
});
