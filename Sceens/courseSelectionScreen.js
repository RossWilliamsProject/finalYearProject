import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';

export default function CourseSelectionScreen ({navigation}) {
    return(
    <ScrollView>
    <View style={styles.view}>
        <View style={styles.space} />

        <Text style={styles.text}>Select Course</Text>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate('SubjectSelectionSE')}>
                <Text style={styles.text}>
                    Software Engineering 
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Two   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Three   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Four   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Five   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Six   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Seven   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Eight   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Nine   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Ten   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOther")}>
                <Text style={styles.text}>
                    Course Eleven   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>
         
        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("SubjectSelectionOthers")}>
                <Text style={styles.text}>
                    Course Twelve   
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