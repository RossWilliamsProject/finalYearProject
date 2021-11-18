import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function HomeScreen ({navigation}) {
    return(
    <View>
    
      <Text>Home Screen</Text>
        <TouchableOpacity /*onPress={onPress}*/ style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Courses
          <MaterialCommunityIcons name="book-open" color={'black'} size={30}/></Text>
        </TouchableOpacity>
      </View>
    )
}

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });