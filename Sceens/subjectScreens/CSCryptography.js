
import React from 'react';
import { View, Text, StyleSheet, ScrollView, contentContainer, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function CSCryptography() {
  const Navigation = useNavigation();

  return (
    <View style={styles.backgroundview}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.view}>
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
        <View style={styles.space} />
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Navigation.navigate("CSCryptographyQuizScreen")}>
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