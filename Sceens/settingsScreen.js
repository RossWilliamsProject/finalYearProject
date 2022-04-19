//imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//simple placeholder screen to ensure user has a more "complete"
//user experience when using application prototype 
export default function SettingsScreen({ navigation }) {
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