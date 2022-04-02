import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CSOSSecurity() {
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
              Chapter 6: Part 1
            </Text>
            <View style={styles.characterImage}>
              <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/scientistHappy2.png')} />
            </View>

            <View style={styles.learningOpacity} disabled={true}>
              <Text style={styles.text}>
                All of the computers on the submarine have an operating system,
                so we better make sure that there isn’t any flaws!
                Oh no… We have both Linux and Windows systems! This could get complicated…
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
                    Operating Sytem Security
                  </Text>
                  <Text style={styles.boldtext}>
                    Role of the OS
                  </Text>
                  <Text style={styles.text}>
                    The operating system fulfils the following security responsibilities:{"\n"}
                    •	Identification{"\n"}
                    •	Authentication{"\n"}
                    •	Access control{"\n"}
                    •	Auditing{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Definitions of key terms:
                  </Text>
                  <Text style={styles.text}>
                    -	Subject / Principal – an active entity{"\n"}
                    -	Object – resource being accessed{"\n"}
                    -	Reference monitor – grants or denies access{"\n"}
                    Difference between principal and subject:{"\n"}
                    Principal: “An entity that can be granted access to objects or can make statements
                    affecting access control decisions” (E.g user identity in an OS){"\n"}
                    Subject: “An active entity within an IT system” (E.g. process running under a user identity){"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Objects
                  </Text>
                  <Text style={styles.text}>
                    Objects can be files or resources.{"\n"}
                    This includes everything from directories to printers.{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Access Control
                  </Text>
                  <Text style={styles.text}>
                    UNIX simplifies access control by considering only the three following
                    groups with the possible security properties of being able to “read”, “write” or “execute” files.{"\n"}
                    1.	User is the current owner{"\n"}
                    2.	Group is a named group entity{"\n"}
                    3.	Everyone else{"\n"}
                    Windows predominantly uses Access Control Lists, and extends
                    the usual read, write and execute with: “Take ownership”,
                    “Change permissions” and “Delete”.{"\n"}
                    This allows for a higher degree of control –but has a higher level of complexity.{"\n"}{"\n"}

                  </Text>

                  <Text style={styles.boldtext}>
                    Identification
                  </Text>
                  <Text style={styles.text}>
                    Users with similar access rights can be collected into groups.{"\n"}
                    Groups are given permissions to access objects (which applies these permissions to all users in the group.{"\n"}
                    In UNIX systems, the user identity is stored as a UID,
                    and a group identity is stored as a GID. The ID’s are stored in “/etc/passwd”.{"\n"}
                    The Root user (UNIX super user, with special permissions such as I/O an audio control)
                    has a special id - it is always UID: 0.{"\n"}
                    In windows, users are given an SID. Groups consist of many SID’s,
                    but also have their own SID.{"\n"}
                    This means that groups can be nested (but not on a local machine).{"\n"}
                    Windows does not have a super user – but uses two tokens for a user.{"\n"}
                    One heavily restricted, and an “administrator” token which allows
                    for more powers that is activated via prompts.{"\n"}{"\n"}

                  </Text>

                  <Text style={styles.boldtext}>
                    Access Tokens
                  </Text>
                  <Text style={styles.text}>
                    An access token stores security credentials for windows login.{"\n"}
                    It allows the OS to identify the user, the user’s groups,
                    and the user’s privileges for future reference.{"\n"}
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
                  Chapter 6: Part 2
                </Text>
                <View style={styles.characterImage}>
                  <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/captain.png')} />
                </View>

                <View style={styles.learningOpacity} disabled={true}>
                  <Text style={styles.text}>
                    Nice work workers! Now that the kernel is secure, we can finally travel without fear of sinking… wait,
                    what’s a kernel? Our system could still be vulnerable?
                    That’s not good news… Thank the heavens we have some experts on board!
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
    width: 380,
    height: 200,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});