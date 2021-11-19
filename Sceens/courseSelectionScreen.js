import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';

export default function CourseSelectionScreen ({navigation}) {
    return(
    <ScrollView>
    <View style={styles.view}>
        <Text>Course Selection Screen</Text>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate('SubjectSelection', {
                paramCourseChosen: "Course One"})}>
                <Text style={styles.text}>
                    CourseOne   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseTwo   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseThree   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseFour   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseFive   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseSix   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseSeven   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectSelection")}>
                <Text style={styles.text}>
                    CourseEight   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    )
  }
  
const styles = StyleSheet.create({
    view: { flex:1,
        alignItems:'center',
        backgroundColor: "#D9E3E5"
    },
    button: {
        backgroundColor: 'white',
        width:375,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    checkbox: {
        alignSelf: "center",
    },
    space: {
        width: 20,
        height: 10,
    },
})