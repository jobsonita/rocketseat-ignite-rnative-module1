import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Rodrigo</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, styles.skills]}>My Skills</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 70,

    backgroundColor: '#121015',

    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 10,

    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    borderRadius: 7,
  },
  button: {
    marginTop: 20,
    padding: 15,

    backgroundColor: '#a370f7',
    borderRadius: 7,

    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  skills: {marginTop: 30},
});
