import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SplashScreen ({navigation}) {

    return (
    <View style={Styles.container}>
        
        <View style={Styles.header}>
            <Image source={require('../assets/waves.png')}/>
        </View>

        <Animatable.View style={Styles.footer} animation="fadeInUpBig">
            <Text style={Styles.title}>
                Welcome to CompleteEducation!
            </Text>
            <View style={Styles.view}>
                <TouchableOpacity style={Styles.button} onPress={()=>navigation.navigate('HomeTabs')}>
                    <Text style={Styles.buttontext}>Start Learning!</Text>
                    <MaterialIcons name="navigate-next" color="black" size={20}/>
                </TouchableOpacity>
            </View>
        </Animatable.View>

    </View>
    );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.3;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9E3E5"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#05445E',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    view: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    button: {
        backgroundColor: 'white',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    buttontext: {
        color: '#333333',
        fontWeight: 'bold'
    }
});