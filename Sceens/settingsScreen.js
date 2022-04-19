//imports 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//settings screen exists for user immersion reasons 
// (making them "feel" the app is complete)
//functionality is not actually implemented
export default function SettingsScreen() {
  return (
    <View style={styles.view}>
      <Text>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#D9E3E5"
  }
})