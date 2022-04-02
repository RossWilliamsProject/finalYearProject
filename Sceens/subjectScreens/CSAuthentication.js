import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CSAuthentication() {
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
              Chapter 4: Part 1
            </Text>
            <View style={styles.characterImage}>
              <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/captain.png')} />
            </View>

            <View style={styles.learningOpacity} disabled={true}>
              <Text style={styles.text}>
                Ahoy, it’s the captain! I’ve been hearing rumours of an internal cyber-attack coming!
                You better secure the operating system and the kernel quick, just as soon as you fix that
                message issue! Which one will you do first!
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
                    Authentication
                  </Text>
                  <Text style={styles.boldtext}>
                    Accessing Assets
                  </Text>
                  <Text style={styles.text}>
                    To allow some access to an asset we must ensure:{"\n"}
                    1.	They are permitted to access that asset{"\n"}
                    2.	They are who they say they are{"\n"}
                    We can attempt to verify identity using credentials{"\n"}
                    •	Something the user is{"\n"}
                    •	Something the user has{"\n"}
                    •	Something the user knows{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Passwords
                  </Text>
                  <Text style={styles.text}>
                    Problems with Passwords{"\n"}
                    1.	People forget them{"\n"}
                    2.	They can be guessed{"\n"}
                    3.	Spoofing and Phishing{"\n"}
                    4.	Compromised password files{"\n"}
                    5.	Keylogging{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Storing Passwords
                  </Text>
                  <Text style={styles.text}>
                    Storing passwords in plain text is a terrible idea as you
                    might be hacked, and administrators can read them.{"\n"}
                    Storing encrypted passwords is better,
                    but not perfect as there are issues such as where the keys
                    are stored, and the fact that administrators can still read them.{"\n"}
                    Operating systems have taken steps to stop people
                    reading hashes for offline attacks:{"\n"}
                    -	Linux stores hashes in a shadow file /etc/shadow{"\n"}
                    -	Windows stores this in ..\system32\config\SAM{"\n"}
                    -	These files are now read protected{"\n"}{"\n"}

                  </Text>

                  <Text style={styles.boldtext}>
                    Password Cracking
                  </Text>
                  <Text style={styles.text}>
                    Password cracking falls into two basic types:{"\n"}
                    •	Offline: You have a copy of the password hash locally{"\n"}
                    •	Online: You do not have the hash,{"\n"}
                    and are instead attempting to gain access to an actual login terminal{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Offline Cracking Methods
                  </Text>
                  <Text style={styles.text}>
                    Brute force approach: Difficulty is calculated as 𝑐ℎ𝑎𝑟_𝑐𝑜𝑢𝑛𝑡^length,
                    GPUs are fast, but not fast enough for long passwords.{"\n"}
                    Dictionary attacks: Using a dictionary of common words and passwords,
                    applying small variations to this list, trying them all
                    (including combining words from two different lists).{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Password Salting
                  </Text>
                  <Text style={styles.text}>
                    Password Salting is adding a series of random characters to the
                    start of a password before hashing.{"\n"}
                    This will massively alter the password
                    (meaning that if one password is cracked, the same password
                    related to other accounts will stay secure).{"\n"}
                    The salt is stored unencrypted with the hash for decryption.{"\n"}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.scoreOpacity}
                  onPress={() => setShowPostStory(true)}>
                  <Text style={styles.boldtext}>
                    Finish Learning!
                  </Text>
                </TouchableOpacity>
              </ScrollView >
            </View >
          ) : (
            <>
              <View style={styles.header}>
                <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/waves.png')} />
              </View>

              <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text}>
                  Chapter 4: Part 2
                </Text>
                <View style={styles.characterImage}>
                  <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/hacker.png')} />
                </View>

                <View style={styles.learningOpacity} disabled={true}>
                  <Text style={styles.text}>
                    Hahaha… Once I have access to this submarines network, no one will be able to stop me!
                    Wait… What’s this? Authentication?! Disaster! I’ll just have to try something new
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