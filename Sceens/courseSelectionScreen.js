import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function CourseSelectionScreen ({navigation}) {
    return(
    <View style={styles.view}>
      <Text>Course Selection Screen</Text>
    </View>
    )
  }
  
const styles = StyleSheet.create({
    view: { flex:1,
        alignItems:'center',
        backgroundColor: "#D9E3E5"
    }
})