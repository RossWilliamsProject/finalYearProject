import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function SettingsScreen ({navigation}) {
    return(
    <View style={Styles.view}>
      <Text>Settings Screen</Text>
    </View>
    )
  }
  
const Styles = StyleSheet.create({
  view: { flex:1,
    alignItems:'center',
    backgroundColor: "#D9E3E5"
    }
})