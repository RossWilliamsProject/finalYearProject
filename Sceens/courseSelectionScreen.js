//imports
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// course selection shows a series of navigational buttons 
// each button directs the user to a "course", however, 
// only one course is implemented for experiment
export default function CourseSelectionScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.view}>
                <View style={styles.space} />

                <Text style={styles.text}>Select Course</Text>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SubjectSelectionCS')}>
                    <Text style={styles.text}>
                        Computer Security
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Computer Fundementals
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Distributed Systems
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Languages and Computation
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Algorithms
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Funtional Programming
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Programming Paradigms
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Operating Systems
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Maintainable Software
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        System Architecture
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOther")}>
                    <Text style={styles.text}>
                        Mathematics for CompSci
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SubjectSelectionOthers")}>
                    <Text style={styles.text}>
                        Human Computer Interaction
                    </Text>
                    <Text>   </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#D9E3E5"
    },
    button: {
        backgroundColor: 'white',
        width: 375,
        height: 60,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    space: {
        width: 20,
        height: 10,
    },
})