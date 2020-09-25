import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const TaskScreen = () => {
  const navigation = useNavigation()

  const [items, setItems] = useState([]);

  React.useEffect(() => {
    importData();
  }, []);

  const deleteItem = (id) => {
    removeEntry(id)
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  removeEntry = async (id) => {
    try{
      await AsyncStorage.removeItem(id)
    } catch (e) {
      console.log('delete error')
      console.log(e)
    }
  }

  const addItem = text => {
    if(!text) {
      Alert.alert('Error', 'Please enter a task', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        var entry = {id: uuidv4(), text, completed: false}
        storeData(entry)
        return [entry, ...prevItems];
      });
    }
  }

  const completeItem = (id) => {
    setItems(prevItems => {
      return prevItems.map((item) => {
        if(id === item.id) {
          changeData(id)
        }
        return item;
      });
    });
  };

  const changeData = async (id) => {
    try {
      items.map((entry) => {
        if (id === entry.id) {
          console.log('here')
          entry.completed = !entry.completed
          storeData(entry)
        }
      });
    } catch (e) {
      console.log(e)
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(value.id, jsonValue)
      console.log('store success')
    } catch (e) {
      console.log('save error')
    }
  }

  importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      // result.map((entry) => setItems(prevItems => {
      //   return [entry, ...prevItems]
      // }));
      let items = result.map((entry) => { return JSON.parse(entry[1])})
      setItems(items)
      // console.log(result);
      // return result.map(req => JSON.parse(req));
    } catch (error) {
      console.error(error)
    }
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
         renderItem={({item}) => <ListItem key={item.id} completeItem={completeItem} item={item} deleteItem={deleteItem} />}
       />
       <View style={styles.button}>
           <Button
            color='white'
            title="Go Home"
            onPress={() => navigation.navigate('Home', {completedItems: completedItems()})}
          />
        </View>
    </View>
  )
}

export default TaskScreen;
