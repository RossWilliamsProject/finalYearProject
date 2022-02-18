
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default function SubjectSelectionScreen ({navigation}) {
    return(    
    <View style={Styles.view}>
        <ScrollView>
        <View style={Styles.view}>
        <View style={Styles.space} />

        <Text style={Styles.text}>Press To Learn!</Text>
        
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SEIntroduction")}>
                <Text style={Styles.text}>
                    Introduction   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SERequirements")}>
                <Text style={Styles.text}>
                    Requirements   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Requirements Gathering   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Requirements Modelling   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Specifiction   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Prototyping   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Test Plans   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Implementation   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    CI Deployment   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Test Driven Development   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>


        <View style={Styles.space} />
        </View>
        </ScrollView>
    </View>
    
    );
}


const Styles = StyleSheet.create({
    view: { 
        flex:1,
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