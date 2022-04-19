//imports
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Container, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

// responsible for displauing buttons for easier navigaton
export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={{ uri: 'https://pbs.twimg.com/media/FElwa2vWUAMHeg6?format=jpg&name=medium' }} style={styles.view}>
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

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("settings")}>
                <Text style={styles.text}>
                    Settings
                </Text>
                <Text>   </Text>
                <MaterialCommunityIcons name="cog" color="black" size={20} />
            </TouchableOpacity>
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