import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import React, {Fragment} from 'react';
import {HomeScreen} from './home';
import {DetailsScreen} from './details';
import {Text} from './components';
import {Image, StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackground: () => (
            <View>
              <Image
                style={styles.headerBackground}
                source={require('./assets/images/background.png')}
              />
              <Image
                style={styles.headerBackground}
                source={require('./assets/images/clouds.png')}
              />
            </View>
          ),
          headerTitleAlign: 'center',
          headerTitle: () => <Text style={styles.header}>Lorem ipsum</Text>,
          headerLeft: () => (
            <Fragment>
              <Icon name="chevron-left" size={11} color="#000" />
              <Text style={styles.leftHead}>1/4</Text>
            </Fragment>
          ),
          headerRight: () => (
            <Icon.Button
              name="x"
              backgroundColor="transparent"
              size={11}
              color="#000"
            />
          ),
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    fontFamily: 'Literata-Regular',
    color: '#000',
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: 1,
  },
  headerBackground: {
    width: '100%',
  },
  leftHead: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    lineHeight: 20,
    color: '#000',
  },
});

export default App;
