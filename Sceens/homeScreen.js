import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        
        <ImageBackground source={{ uri: 'https://pbs.twimg.com/media/FElwa2vWUAMHeg6?format=jpg&name=medium' }} style={Styles.view}>
            <TouchableOpacity
                style={Styles.button}
                onPress={() => navigation.navigate("profileScreen")}>
                <Text style={Styles.text}>
                    Profile
                </Text>
                <Text>   </Text>
                <MaterialCommunityIcons name="account" color="black" size={20} />
            </TouchableOpacity>

            <View style={Styles.space} />

            <TouchableOpacity
                style={Styles.button}
                onPress={() => navigation.navigate("leaderboard")}>
                <Text style={Styles.text}>
                    Leaderboard
                </Text>
                <Text>   </Text>
                <MaterialCommunityIcons name="trophy" color="black" size={20} />
            </TouchableOpacity>

            <View style={Styles.space} />

            <TouchableOpacity
                style={Styles.button}
                onPress={() => navigation.navigate("courseSelection")}>
                <Text style={Styles.text}>
                    Courses
                </Text>
                <Text>   </Text>
                <MaterialCommunityIcons name="book-open" color="black" size={20} />
            </TouchableOpacity>

            <View style={Styles.space} />
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
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