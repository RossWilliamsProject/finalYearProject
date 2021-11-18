import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SplashScreen ({navigation}) {

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor='black' barStyle="light-content"/>
        <View style={styles.header}>
            <Image
            source={require('../assets/icon.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View
            style={[styles.footer, {
            backgroundColor: '#F2F2F2'}]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: '#333333'}]}>
                Welcome!
            </Text>
            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('HomeTabs')}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons
                        name="navigate-next"
                        color="black"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
    );
    };

    const {height} = Dimensions.get("screen");
    const height_logo = height * 0.3;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#CDCDCD'
        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            flex: 1,
            backgroundColor: 'white',
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
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold'
        },
        button: {
            alignItems: 'flex-end',
            marginTop: 30
        },
        signIn: {
            backgroundColor: '#73d583',
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
        },
        textSign: {
            color: '#333333',
            fontWeight: 'bold'
        }
    });