import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Container} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen ({navigation}) {
    return(
    <View style={{flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',}}>
        <TouchableOpacity 
            style={styles.button} 
            onPress={()=>navigation.navigate('CourseSelectionScreen')}>
            <Text style={styles.text}>Courses   </Text>
            <MaterialCommunityIcons
                name="book-open"
                color="black"
                size={20}
            />
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
            style={styles.button} 
            onPress={()=>navigation.navigate('CourseSelectionScreen')}>
            <Text style={styles.text}>Settings   </Text>
            <MaterialCommunityIcons
                name="cog"
                color="black"
                size={20}
            />
        </TouchableOpacity>
    </View>
    )
}

  const styles = StyleSheet.create({
    button: {
        backgroundColor: '#73d583',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    text: {
        color: '#333333',
        fontWeight: 'bold'
    },
    space: {
        width: 20,
        height: 10,
    }
  });