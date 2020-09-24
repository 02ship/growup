import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import HomeScreen from './HomeScreen';
import TaskScreen from './TaskScreen';
import NoteScreen from './NoteScreen';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ completedItems: null }}/>
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
