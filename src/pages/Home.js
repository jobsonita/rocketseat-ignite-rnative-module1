import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Jobson</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          value={newSkill}
          onChangeText={setNewSkill}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewSkill}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, styles.titleSkills]}>My Skills</Text>

        {mySkills.map((skill, idx) => (
          <TouchableOpacity key={idx} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{skill}</Text>
          </TouchableOpacity>
        ))}
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
    borderRadius: 7,
    color: '#fff',
    fontSize: 18,
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
  titleSkills: {marginTop: 30, marginBottom: 20},
  buttonSkill: {
    marginVertical: 10,
    padding: 15,

    backgroundColor: '#1F1e25',
    borderRadius: 50,

    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
