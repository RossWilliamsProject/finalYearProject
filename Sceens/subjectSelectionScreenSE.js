
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';

const SubjectSelectionScreen = ({route}) => {
    return(
    
    <View style={styles.view}>
        <ScrollView>
        <View style={styles.view}>
        <Text>Course Selection Screen</Text>
        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectScreen")}>
                <Text style={styles.text}>
                    Introduction   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectScreen")}>
                <Text style={styles.text}>
                    Requirements   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectScreen")}>
                <Text style={styles.text}>
                    Some Other Stuff   
                </Text>
                <Text>   </Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity 
                style={styles.button} 
                onPress={()=>navigation.navigate("subjectScreen")}>
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
export default SubjectSelectionScreen;


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