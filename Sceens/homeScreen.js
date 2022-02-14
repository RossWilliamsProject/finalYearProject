import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Container, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Icon from '@mdi/react'
import { mdiAccount, mdiTrophy } from '@mdi/js'


export default function HomeScreen({ navigation }) {

    return (
        
        <ImageBackground source={{ uri: 'https://pbs.twimg.com/media/FElwa2vWUAMHeg6?format=jpg&name=medium' }} style={styles.view}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("profileScreen")}>
                <Text style={styles.text}>
                    Profile
                </Text>
                <Text>   </Text>
                <Icon path={mdiAccount} size={1} color="black" />
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("leaderboard")}>
                <Text style={styles.text}>
                    Leaderboard
                </Text>
                <Text>   </Text>
                <Icon path={mdiTrophy} size={1} color="black" />
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("courseSelection")}>
                <Text style={styles.text}>
                    Courses
                </Text>
                <Text>   </Text>
                <MaterialCommunityIcons name="book-open" color="black" size={20} />
            </TouchableOpacity>

            <View style={styles.space} />
        </ImageBackground>
    )
    
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    space: {
        width: 20,
        height: 10,
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D9E3E5"
    },
});