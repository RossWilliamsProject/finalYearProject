
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default function SubjectSelectionScreen ({navigation}) {
    return(    
    <View style={styles.view}>
        <ScrollView>
        <View style={styles.view}>
        <Text style={styles.text}>Press To Learn!</Text>
        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SEIntroduction")}>
                <Text style={styles.text}>
                    Introduction   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SERequirements")}>
                <Text style={styles.text}>
                    Requirements   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={styles.text}>
                    Some Other Stuff   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={styles.text}>
                    Extra   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />
        </View>
        </ScrollView>
    </View>
    
    );
}


const styles = StyleSheet.create({
    view: { flex:1,
        alignItems:'center',
        backgroundColor: "#D9E3E5"
    },
    button: {
        backgroundColor: 'white',
        width:375,
        height:60,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius:20,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    checkbox: {
        alignSelf: "center",
    },
    space: {
        width: 20,
        height: 10,
    },
})