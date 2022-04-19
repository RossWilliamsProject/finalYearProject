//imports 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// settings screen not implemented, exists to make the 
//application seem more complete for a more realistic user experience
export default function SettingsScreen({ navigation }) {
  return (
    <View style={Styles.view}>
      <Text>Settings Screen</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#D9E3E5"
  }
})