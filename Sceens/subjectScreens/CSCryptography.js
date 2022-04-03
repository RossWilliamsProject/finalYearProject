
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CSCryptography() {
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
              Chapter 3: Part 1
            </Text>
            <View style={styles.characterImage}>
              <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/scientistHappy2.png')} />
            </View>

            <View style={styles.learningOpacity} disabled={true}>
              <Text style={styles.text}>
                I remember when I was younger, I used to send messages to my
                friends using secret codes… I’m pretty sure they do the same things
                with communications now! Help me research encryption to make sure
                our captains messages are safe!
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
                    Cryptography
                  </Text>

                  <Text style={styles.boldtext}>
                    Symmetric Cryptography
                  </Text>
                  <Text style={styles.text}>
                    Symmetric encryption gives us confidentiality.{"\n"}
                    Usually implemented using block ciphers or stream ciphers.{"\n"}{"\n"}
                  </Text>
                  <Text style={styles.boldtext}>
                    Stream Ciphers
                  </Text>
                  <Text style={styles.text}>
                    Stream ciphers use an initial seed key to generate
                    an infinite keystream of random looking bits.{"\n"}
                    The message and keystream are usually combined using XOR
                    - ⊕ - which is reversible if applied twice.{"\n"}
                    Advantages of Stream Ciphers{"\n"}
                    -	Encrypting long continuous streams, possibly of unknown length{"\n"}
                    -	Extremely fast with a low memory footprint, ideal for low-power devices{"\n"}
                    -	If designed well, can seek to any location in the stream{"\n"}
                    Disadvantages of Stream Ciphers{"\n"}
                    -	The keystream must appear statistically random{"\n"}
                    -	You must never reuse a key + nonce{"\n"}
                    -	Steam ciphers do not protect the cipher text{"\n"}{"\n"}

                  </Text>
                  <Text style={styles.boldtext}>
                    Block Ciphers
                  </Text>
                  <Text style={styles.text}>
                    Block ciphers use a key to encrypt a fixed-size block
                    of plaintext into a fixed-size block of ciphertext by changing
                    and permuting the bits of the block depending on the key.{"\n"}
                    Different lengths of messages can be handled by splitting
                    the message up, and adding padding.{"\n"}{"\n"}

                  </Text>
                  <Text style={styles.boldtext}>
                    Cryptographic Attack Models
                  </Text>
                  <Text style={styles.text}>
                    (from weakest to strongest attack){"\n"}
                    1.	Brute-force{"\n"}
                    2.	Ciphertext-only{"\n"}
                    3.	Known-plaintext{"\n"}
                    4.	Chosen-plaintext{"\n"}
                    5.	Chosen-ciphertext{"\n"}
                    6.	Related-key attack{"\n"}
                  </Text>
                  <Text style={styles.boldtext}>
                    Public-key Cryptography
                  </Text>
                  <Text style={styles.text}>
                    Public-key Cryptography involves the use of two keys,
                    a public key and a private key.{"\n"}
                    Public-key (asymmetric) cryptography hinges
                    upon the premise that it is computationally infeasible
                    to calculate a private from a public key.{"\n"}{"\n"}
                  </Text>
                  <Text style={styles.boldtext}>
                    Hash Functions
                  </Text>
                  <Text style={styles.text}>
                    Another cryptographic primitive in our toolbox.{"\n"}
                    A hash function takes a message of any length,
                    and returns a pseudorandom hash of fixed length.{"\n"}
                    Strong hash functions should: appear random,
                    hard to find collisions (two messages that hash to the same thing).{"\n"}
                    Hash functions are used for:{"\n"}
                    -	Digital Signatures{"\n"}
                    -	Password storage{"\n"}

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
                  Chapter 3: Part 2
                </Text>
                <View style={styles.characterImage}>
                  <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/captain.png')} />
                </View>

                <View style={styles.learningOpacity} disabled={true}>
                  <Text style={styles.text}>
                    Ahoy, Captain here. Very glad to see you making progress. I’m happy that my
                    messages are safe from any unwelcome
                    eyes! Not to burst your bubble, but I seem to have received a communication
                    from a colleague, but I’m really not sure it’s actually him… Is there any way
                    you could make sure it is?
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