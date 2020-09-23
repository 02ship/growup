import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

 const ListNote = ({note, deleteNote}) => {

    const navigation = useNavigation()

    return (
    <TouchableOpacity style={styles.listNote}>
      <View style={styles.listNoteView}>
        <Text style={styles.listNoteText}>{note.text}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress ={() => deleteNote(note.id)}/>
      </View>
    </TouchableOpacity>
   );
 };

const styles = StyleSheet.create({
  listNote: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listNoteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listNoteText: {
    fontSize: 18,
  },
});

export default ListNote;
