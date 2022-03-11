
import React from 'react';
import { View, Text, StyleSheet, ScrollView, contentContainer, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function CSOSSecurity() {
  const Navigation = useNavigation();

  return (
    <View style={styles.backgroundview}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.view}>
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
      </ScrollView >
    </View >

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
  button: {
    backgroundColor: 'white',
    width: 375,
    height: 60,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginVertical: 5,
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