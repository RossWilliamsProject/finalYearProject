//imports
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SplashScreen({ navigation }) {
    //Displayed by default
    return (
        //Container for screen
        //Splash screen exists to provide an entry screen to the app 
        //uses an image header for aesthetics and an animated footer with a continue button
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../assets/waves.png')} />
            </View>

            <Animatable.View style={styles.footer} animation="fadeInUpBig">

                <Text style={styles.title}>
                    Welcome to CompleteEducation!
                </Text>

                <View style={styles.view}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeTabs')}>
                        <Text style={styles.buttontext}>
                            Start Learning!
                        </Text>
                        <MaterialIcons name="navigate-next" color="black" size={20} />
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9E3E5"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#05445E',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    title: {
        color: 'white',
        fontSize: 30,
    },
    view: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 180,
        height: 60,
    },
    buttontext: {
        color: '#333333',
        fontWeight: 'bold'
    }
});