import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Container, ImageBackground } from 'react-native';

export default function QuizScreen({ navigation }) {
    return (
        <View>
            <Text>quiz screen</Text>
        </View>
    );
};

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