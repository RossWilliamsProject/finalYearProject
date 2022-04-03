
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CSKernelSecurity() {
  const navigation = useNavigation();

  const [showPreStory, setShowPreStory] = useState(true);
  const [showPostStory, setShowPostStory] = useState(false);

  return (
    <View style={styles.container}>
      {showPreStory ? (
        <>
          <View style={styles.header}>
            <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/waves.png')} />
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.text}>
              Chapter 5: Part 1
            </Text>
            <View style={styles.characterImage}>
              <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/scientistHappy2.png')} />
            </View>

            <View style={styles.learningOpacity} disabled={true}>
              <Text style={styles.text}>
                The kernel is very important, if the hacker got access to this we would be in so much trouble!
                Help me figure out how our current security works so that we can make it even better!
              </Text>
              <MaterialIcons name="navigate-next" color="black" size={20} />
            </View>
            <TouchableOpacity style={styles.advanceOpacity} onPress={() => setShowPreStory(false)}>
              <Text style={styles.boldtext}>
                Start Learning!
              </Text>
              <MaterialIcons name="navigate-next" color="black" size={20} />
            </TouchableOpacity>
          </Animatable.View>
        </>
      ) : (
        <View style={styles.container}>
          {!showPostStory ? (
            <View style={styles.backgroundview}>
              <ScrollView
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.Learningview}>
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
                </View>
                <TouchableOpacity
                  style={styles.scoreOpacity}
                  onPress={() => setShowPostStory(true)}>
                  <Text style={styles.boldtext}>
                    Finish Learning!
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

          ) : (
            <>
              <View style={styles.header}>
                <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/waves.png')} />
              </View>

              <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text}>
                  Chapter 5: Part 2
                </Text>
                <View style={styles.characterImage}>
                  <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/captain.png')} />
                </View>

                <View style={styles.learningOpacity} disabled={true}>
                  <Text style={styles.text}>
                    Ahoy! Captain here! Thanks for ensuring that that’s all secure. I was starting to get worried.
                    If the hacker got access to our network, who knows what could happen!
                    He could crash us right to the depths!
                  </Text>
                  <MaterialIcons name="navigate-next" color="black" size={20} />
                </View>
                <TouchableOpacity style={styles.scoreOpacity} onPress={() => navigation.navigate('SubjectSelectionCS')}>
                  <Text style={styles.boldtext}>
                    Return to Course
                  </Text>
                  <MaterialIcons name="navigate-next" color="black" size={20} />
                </TouchableOpacity>
              </Animatable.View>

            </>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9E3E5"
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  characterImage: {

  },
  textHeader: {
    color: 'black',
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 30
  },
  footer: {
    flex: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 0,
    paddingHorizontal: 100
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  view: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  Learningview: {
    flex: 0,
    //alignItems:'center',
    width: "93%",
    borderRadius: 20,
    backgroundColor: "white"
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
  },
  scoreOpacity: {
    backgroundColor: 'white',
    width: 375,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  advanceOpacity: {
    backgroundColor: '#D9E3E5',
    width: 375,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  learningOpacity: {
    backgroundColor: 'white',
    width: 355,
    height: 200,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});