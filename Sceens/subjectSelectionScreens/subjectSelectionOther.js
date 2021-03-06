
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default function SubjectSelectionOther ({navigation}) {
    return(    
    <View style={Styles.view}>
        <ScrollView>
        <View style={Styles.view}>
        <View style={Styles.space} />

        <Text>Course Not Yet Implemented</Text>
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject One   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Two   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Three   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Four   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Five   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Six   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Seven   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Nine   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Ten   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Eleven   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Twelve   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Thirteen   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("OSubjectNotFound")}>
                <Text style={Styles.text}>
                    Subject Fourteen   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    
    );
}


const Styles = StyleSheet.create({
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