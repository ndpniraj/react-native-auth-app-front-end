import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import AppForm from './app/components/AppForm';
import ImageUpload from './app/components/ImageUpload';
import UserProfile from './app/components/UserProfile';
import Home from './app/components/Home';
import Tasks from './app/components/Tasks';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
      <Stack.Screen component={ImageUpload} name='ImageUpload' />
      <Stack.Screen component={UserProfile} name='UserProfile' />
    </Stack.Navigator>
  );
};

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#f6f6f6',
          marginBottom: 20,
        }}
      >
        <View>
          <Text>John Doe</Text>
          <Text>example@email.com</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1624142128157-a3be82a3c0c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: '#f6f6f6',
          marginTop: 50,
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: 'transparent', elevation: 0 },
        headerTitle: '',
      }}
    >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Tasks' component={Tasks} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {loggedIn ? <DrawerNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}
