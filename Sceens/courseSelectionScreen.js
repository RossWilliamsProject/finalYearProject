import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';

export default function CourseSelectionScreen ({navigation}) {
    return(
    <ScrollView>
    <View style={Styles.view}>
        <View style={Styles.space} />

        <Text style={Styles.text}>Select Course</Text>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate('SubjectSelectionSE')}>
                <Text style={Styles.text}>
                    Software Engineering 
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Computer Fundementals   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Distributed Systems   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Languages and Computation   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Algorithms    
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Funtional Programming   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Programming Paradigms   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Operating Systems   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Maintainable Software   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    System Architecture   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={Styles.text}>
                    Mathematics for CompSci   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
         
        <View style={Styles.space} />

        <TouchableOpacity 
                style={Styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOthers")}>
                <Text style={Styles.text}>
                    Human Computer Interaction   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    )
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