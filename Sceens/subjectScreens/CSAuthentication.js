
import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image, useState } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CSAuthentication() {
  const [showPreStory, setShowPreStory] = useState(true);

  return (
    <View style={styles.view}>
      {showPreStory ? (
        <View style={styles.container}>

          <View style={styles.header}>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.title}>
              Welcome to CompleteEducation!
            </Text>
            <View style={styles.view}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeTabs')}>
                <Text style={styles.buttontext}>Start Learning!</Text>
                <MaterialIcons name="navigate-next" color="black" size={20} />
              </TouchableOpacity>
            </View>
          </Animatable.View>

        </View>
      ) : (
        <View style={styles.backgroundview}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.view}>
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
                        onPress={() => setShowPreStory(false)}>
                        <Text style={styles.textBold}>
                            Finish Learning!
                        </Text>
                    </TouchableOpacity>
          </ScrollView >
        </View >

      )
      };
    </View>
  )
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