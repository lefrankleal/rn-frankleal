import React, {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {NavigationButton, Progress, Text} from './components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import mocks from './mocks.json';
import {Fragment, ReactElement, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

type ItemProps = {
  label: string;
};

type HomeProps = Partial<
  NativeStackScreenProps<{Home: undefined; Details: {label: string}}, 'Home'>
>;

const ListHeader = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) => {
  return (
    <Fragment>
      {mocks.home.items.length > 5 ? (
        <KeyboardAvoidingView style={styles.searchContainer}>
          <Icon
            name="search"
            color="#ED470F"
            size={14}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#333"
            value={search}
            onChangeText={value => setSearch(value)}
            style={styles.searchInput}
          />
        </KeyboardAvoidingView>
      ) : null}
    </Fragment>
  );
};

export const HomeScreen = ({navigation}: HomeProps): ReactElement => {
  const [search, setSearch] = useState<string>('');

  const Item = ({item: {label}}: {item: ItemProps}) => {
    return (
      <NavigationButton
        style={styles.button}
        onPress={() =>
          navigation?.navigate('Details', {
            label,
          })
        }>
        <Text style={styles.buttonText}>{label}</Text>
        <Icon
          name="chevron-right"
          color="#000"
          size={14}
          style={styles.searchIcon}
        />
      </NavigationButton>
    );
  };

  return (
    <Fragment>
      <Progress />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.head}>
          <Text style={styles.title} numberOfLines={4}>
            {mocks.lorem.short}
          </Text>
          <Text style={styles.subTitle}>{mocks.lorem.short}</Text>
          <Text
            style={styles.navigationLink}
            onPress={() =>
              navigation?.navigate('Details', {label: 'Navigation Link'})
            }>
            Navigation Link
          </Text>
        </ScrollView>
        <Text style={styles.navigationSubTitle}>Navigation Component</Text>
        <FlatList
          ListHeaderComponent={
            <ListHeader search={search} setSearch={setSearch} />
          }
          ListEmptyComponent={<Text>No items to show, sorry...</Text>}
          data={mocks.home.items.filter(item => item.label.includes(search))}
          renderItem={Item}
          style={styles.list}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  leftHead: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  head: {
    maxHeight: '50%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#01001D',
    marginTop: 65,
    lineHeight: 34,
    paddingHorizontal: 5,
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.4,
    fontFamily: 'Inter-Light',
    textAlign: 'center',
    color: '#000000',
    marginTop: 8,
  },
  navigationLink: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.4,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    color: '#ED470F',
    marginTop: 32,
    paddingBottom: 48,
  },
  navigationSubTitle: {
    marginTop: 48,
    color: '#333333',
  },
  list: {
    marginTop: 16,
  },
  searchContainer: {
    position: 'relative',
    height: 48,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
  },
  searchIcon: {
    marginLeft: 21,
    marginRight: 13,
  },
  searchInput: {
    flexGrow: 1,
    color: '#000',
  },
  button: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Medium',
  },
});
