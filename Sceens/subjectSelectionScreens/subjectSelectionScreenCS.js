
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function subjectSelectionScreenCS({ navigation }) {
    return (
        <View style={styles.view}>
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.space} />

                    <Text style={styles.text}>Press To Learn!</Text>

                    <View style={styles.space} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CSFoundations")}>
                        <Text style={styles.text}>
                            Chapter One: Foundations
                        </Text>
                        <Text>   </Text>
                    </TouchableOpacity>

                    <View style={styles.space} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CSSecurityManagement")}>
                        <Text style={styles.text}>
                            Chapter Two: Security Management
                        </Text>
                        <Text>   </Text>
                    </TouchableOpacity>

                    <View style={styles.space} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CSCryptography")}>
                        <Text style={styles.text}>
                            Chapter Three: Cryptography
                        </Text>
                        <Text>   </Text>
                    </TouchableOpacity>

                    <View style={styles.space} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CSAuthentication")}>
                        <Text style={styles.text}>
                            Chapter Four: Authentication
                        </Text>
                        <Text>   </Text>
                    </TouchableOpacity>
                    <View style={styles.space} />

                    <View style={styles.halfButtonContainer}>
                        <TouchableOpacity
                            style={styles.halfButton}
                            onPress={() => navigation.navigate("CSKernelSecurity")}>
                            <Text style={styles.text}>
                                Chapter Five: K-Security
                            </Text>
                            <Text>   </Text>
                        </TouchableOpacity>

                        <View style={styles.horizontalSpace} />

                        <TouchableOpacity
                            style={styles.halfButton}
                            onPress={() => navigation.navigate("CSOSSecurity")}>
                            <Text style={styles.text}>
                                Chapter Six: OS-Security
                            </Text>
                            <Text>   </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.space} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CSMalware")}>
                        <Text style={styles.text}>
                            Chapter Seven: Malware
                        </Text>
                        <Text>   </Text>
                    </TouchableOpacity>
                    <View style={styles.space} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CSExploits")}>
                        <Text style={styles.text}>
                            Chapter Eight: Exploits
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
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#D9E3E5"
    },
    halfButtonContainer: {
        flex: 1,
        flexDirection: "row",
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
    halfButton: {
        backgroundColor: 'white',
        width: 180,
        height: 80,
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
    checkbox: {
        alignSelf: "center",
    },
    space: {
        width: 20,
        height: 10,
    },
    horizontalSpace: {
        width: 20,
    },
})