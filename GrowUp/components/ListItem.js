import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const ListItem = ({completeItem, item, deleteItem}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Icon name={(item.completed) ? "check-square" : "square-o"} size={20} color="firebrick" onPress ={() => completeItem(item.id)}/>
        <Text style={(item.completed) ? styles.listItemTextComplete : styles.listItemText} onPress={() => navigation.navigate('Note')}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress ={() => deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  listItemTextComplete: {
    fontSize: 18,
    textDecorationLine: 'line-through',
  },

});

export default ListItem;
