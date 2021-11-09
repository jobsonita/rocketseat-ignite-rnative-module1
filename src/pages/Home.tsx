import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
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

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, styles.titleSkills]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
