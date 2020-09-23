import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const TaskScreen = () => {
  const navigation = useNavigation()

  const [items, setItems] = useState([
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if(!text) {
      Alert.alert('Error', 'Please enter a task', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text, completed: false}, ...prevItems];
      });
    }
  }

  const completeItem = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if(id === item.id) {
          item.completed = !item.completed
        }
        return item;
      });
    });
  }
  const completedItems = () => {
    let completedItemsCounter = 0
    items.map((item) => {
      if (item.completed === true) {
        completedItemsCounter += 1
      }
    });
    return completedItemsCounter
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
    },
    button: {
      marginBottom: 40,
      alignItems: 'center',
      bottom: 0,
      backgroundColor: '#0e9307',
      borderRadius: 100,
      width: '25%',
      left: 155,
    }
  });

  return (
    <View style={styles.container}>
       <Header />
       <AddItem addItem={addItem} />
       <FlatList
         data={items}
         renderItem={({item}) => <ListItem completeItem={completeItem} item={item} deleteItem={deleteItem} />}
       />
       <View style={styles.button}>
           <Button
            color='white'
            title="Go Home"
            onPress={() => navigation.navigate('Home', {completedItems: completedItems})}
          />
        </View>
    </View>
  )
}

export default TaskScreen;
