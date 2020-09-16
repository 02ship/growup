import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
      {id: uuidv4(), text: 'Sweep'},
      {id: uuidv4(), text: 'Mop'},
      {id: uuidv4(), text: 'Dust'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (item) => {
    setItems(prevItems => {
      return [{id: uuidv4(), text}, ...prevItems];
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
