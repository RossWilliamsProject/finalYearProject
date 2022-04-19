//imports
import React from 'react';
import { View, Text } from 'react-native';

// template blank screen used if the user selects a profile that 
// is not yet implemented 
export default function ProfileNotFoundScreen() {
  return (
    <View style={{
      backgroundColor: "#D9E3E5"
    }}>
      <Text>Profile Not Found</Text>
    </View>
  )
}