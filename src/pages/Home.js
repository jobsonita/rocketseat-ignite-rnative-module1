import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 3 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreeting('Good evening');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Jobson</Text>
        <Text style={styles.greeting}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          value={newSkill}
          onChangeText={setNewSkill}
        />

        <Button activeOpacity={0.7} onPress={handleAddNewSkill} text="Add" />

        <Text style={[styles.title, styles.titleSkills]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <SkillCard skill={item} />}
          showsVerticalScrollIndicator={false}
        />
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
  greeting: {
    marginTop: 10,

    color: '#fff',
    fontSize: 18,
  },
  input: {
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 10,

    backgroundColor: '#1F1e25',
    borderRadius: 7,
    color: '#fff',
    fontSize: 18,
  },
  titleSkills: {marginTop: 30, marginBottom: 20},
});
