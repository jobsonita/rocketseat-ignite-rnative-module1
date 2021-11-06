import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({onPress, text, activeOpacity}) {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 15,

    backgroundColor: '#a370f7',
    borderRadius: 7,

    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
