import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import ListNote from './components/ListNote';
import AddNote from './components/AddNote';

 const NoteScreen = () => {
   const navigation = useNavigation()

   const [notes, setNotes] = useState([
   ]);

  const deleteNotes = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id != id);
    });
  }

  const addNote = text => {                                        // pass later with a props the id 
    if(!text) {
      Alert.alert('Error', 'please enter a note', {text: 'Ok'})
    } else {
      setNotes(prevNotes => {
        return [{id: uuidv4(), text}, ...prevNotes];               // left thr uuidv4 for functionality
      });
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });


  return (
    <View style={styles.container}>
       <Header />
       <AddNote addNote={addNote} />
       <FlatList
         data={notes}
         renderNote={({note}) => <ListNote note={note} deleteNotes={deleteNotes} />}
       />
       <Button
        title="Go back"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  )
 }

export default NoteScreen;
