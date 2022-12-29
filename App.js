import React from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import CategoryCard from './components/categoryCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Lists from './screens/lists';
import CategoryDetails from './screens/categoryDetails';
import icons from './staticData/icons';
import NewTask from './screens/newTask';
import Test from './components/checkBox';
import TaskContext from './realm/realmConfig';
const {RealmProvider} = TaskContext;
function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Lists"
          screenOptions={{
            headerTransparent: true,
            navigationBarHidden: true,
          }}>
          <Stack.Screen
            name="Lists"
            component={Lists}
            options={{
              title: '',
              gestureDirection: 'vertical',
            }}
          />
          <Stack.Screen
            name="CategoryDetails"
            component={CategoryDetails}
            options={{
              title: '',
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="NewTask"
            component={NewTask}
            options={{
              title: '',
              headerTintColor: 'black',
            }}
          />
          <Stack.Screen
            name="TestScreen"
            component={TestScreen}
            options={{
              title: '',
              headerTintColor: 'black',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppWrapper;

//#5886FE
