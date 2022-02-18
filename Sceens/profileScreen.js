import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function ProfileScreen ({navigation}) {
    return(
    <View style={Styles.view}>
      <Text>Profile Screen</Text>
    </View>
    )
  }
  
const Styles = StyleSheet.create({
  view: { flex:1,
    alignItems:'center',
    backgroundColor: "#D9E3E5"
    }
})