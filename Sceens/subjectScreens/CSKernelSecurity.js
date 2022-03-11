
import React from 'react';
import { View, Text, StyleSheet, ScrollView, contentContainer } from 'react-native';

export default function CSKernelSecurity() {
  return (
    <View style={styles.backgroundview}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.view}>
          <Text style={styles.textHeader}>
            Kernel Security
          </Text>
          <Text style={styles.boldtext}>
            Reference Monitor
          </Text>
          <Text style={styles.text}>
            Reference Monitor: “An access control concept that refers
            to an abstract machine that mediates all access to objects by subjects”{"\n"}
            •	Must be tamper proof / resistant{"\n"}
            •	Must always be invoked when access to an object is required{"\n"}
            •	Must be small enough to be verifiable / subject to analysis to ensure correctness{"\n"}
            Reference monitors could be placed in a variety of locations
            relative to the program being run. However, being placed
            lower in the system has the following security advantages.{"\n"}
            1.	We can assure a higher degree of security{"\n"}
            2.	Usually simple structures to implement{"\n"}
            3.	Reduced performance overheads{"\n"}
            4.	Fewer layer below attack possibilities{"\n"}{"\n"}
          </Text>

          <Text style={styles.boldtext}>
            Modes of Operation
          </Text>
          <Text style={styles.text}>
            Modes of operating allow the system to distinguish between
            computations done on behalf of The OS and the user.{"\n"}
            Which mode is active is dictated by a status flag within the CPU.{"\n"}{"\n"}
          </Text>

          <Text style={styles.boldtext}>
            Controlled Invocation
          </Text>
          <Text style={styles.text}>
            Many functions are held at kernel level, but are quite
            reasonably called from within user level code.{"\n"}
            Controlled invocation is a mechanism that allows transferring
            between kernel and user mode.{"\n"}
            The key concept is that the user doesn’t actually perform privileged
            operations, but rather the operating system is asked to perform them for the user.{"\n"}
            Controlled invocation works through using system interrupts
            – a message to the operating system which is handled by an interrupt
            handler which resolves the issue and returns to the original code.{"\n"}{"\n"}
          </Text>

          <Text style={styles.boldtext}>
            Descriptors and Selectors
          </Text>
          <Text style={styles.text}>
            Descriptors hold information on crucial system objects like
            kernel structure locations.{"\n"}
            Descriptors are held in descriptor tables, containing a Descriptor
            Privilege Level (DPL) and indexed by selectors.{"\n"}
            Descriptors are loaded when required, e.g. on jump calls.{"\n"}
            The CPU protects the kernel by checking the Current Privilege Level (CPL) when a Selector is loaded.{"\n"}{"\n"}
          </Text>

          <Text style={styles.boldtext}>
            Processes and Threads
          </Text>
          <Text style={styles.text}>
            •	A process is a program being executed{"\n"}
            •	A Thread is a strand of execution within a process{"\n"}{"\n"}
          </Text>

          <Text style={styles.boldtext}>
            Memory Protection
          </Text>
          <Text style={styles.text}>
            Segmentation {"\n"}
            – divides data into logical units{"\n"}
            –	Good for security, challenging memory management, not used much in modern OSs{"\n"}{"\n"}
            Paging {"\n"}
            – divides memory into pages of equal size{"\n"}
            –	Efficient memory management, less good for access control, extremely common in modern Oss{"\n"}
          </Text>
          <View style={styles.space} />
          <View style={styles.space} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => Navigation.navigate("quizScreen")}>
            <Text style={styles.text}>
              Recap Quiz
            </Text>
            <Text>   </Text>
            <MaterialCommunityIcons name="history" color="black" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
}


const styles = StyleSheet.create({
  view: {
    flex: 0,
    //alignItems:'center',
    width: "93%",
    borderRadius: 20,
    backgroundColor: "white"
  },
  textHeader: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    paddingLeft: 15,
    fontSize: 20
  },
  boldtext: {
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 20
  },
  checkbox: {
    alignSelf: "center",
  },
  space: {
    width: 20,
    height: 10,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9E3E5',
    paddingBottom: 10,
    paddingTop: 20,
    width: '100%',

  }
})