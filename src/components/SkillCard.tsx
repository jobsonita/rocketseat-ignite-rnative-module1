import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    padding: 15,

    backgroundColor: '#1F1e25',
    borderRadius: 50,

    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
