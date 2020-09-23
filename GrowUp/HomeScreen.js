import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import TaskScreen from './TaskScreen';

const HomeScreen = ({ route, navigation}) => {
  console.log(route.params.completedItems)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });

  // const progress = () => {
  //   let completedItemsCounter = 0
  //   items.map((item) => {
  //     if (item.completed === true) {
  //       completedItemsCounter += 1
  //     }
  //   })
  //   return './gifs/grow_up_' + ((completedItemsCounter * 100)/(items.length)).toString() + '_progress.gif'
  // };

  React.useEffect(() => {
    if (route.params?.completedItems) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.completedItems]);

  

  return (
    <View style={styles.container}>
       <Header />
       <Image source={require('./gifs/grow_up_10_progress.gif')} />
       <Text>{route.params.completedItems}</Text>
       <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  )


}
export default HomeScreen;
