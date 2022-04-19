//Imports
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//Learning materials for "Security Management" computer security subject
export default function CSSecurityManagement() {
  return (
    <View style={styles.backgroundview}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.view}>
          <Text style={styles.textHeader}>
            Security management
          </Text>
          <Text style={styles.boldtext}>
            Defintions
          </Text>
          <Text style={styles.text}>
            Information security: preservation of confidentiality
            , integrity and availability of information.{"\n"}
            In addition, other properties such as authenticity,
            accountability, non-repudiation and reliability can also be involved.{"\n"}
            Cyber security's core function is to protect the devices
            we all use (smartphones, laptops, tablets and computers),
            and the services we access - both online and at work - from theft or damage.{"\n"}
            How does cybersecurity differ from other terms such as information security,
            IT security, computer security etc.? Short answer: it doesn’t … unless you’re being pedantic!{"\n"}{"\n"}
          </Text>
          <Text style={styles.boldtext}>
            Security Policy
          </Text>
          <Text style={styles.text}>
            A statement of overall intent and commitment to security.{"\n"}
            Provides a foundation for other aspects.{"\n"}
            High level policy applies to the organisation and everyone in it,
            more focused policies may apply to specific departments, systems, etc.{"\n"}
            Characteristics of good Security Policy Include:{"\n"}
            -	Is short & backed from the top of the organisation{"\n"}
            -	Recognises that information is critical & must be protected{"\n"}
            -	Emphasises the importance of security awareness & training{"\n"}
            -	Emphasises compliance with legal & regulatory requirements{"\n"}
            -	Emphasises relations with third parties{"\n"}
            -	States roles and responsibilities for information security{"\n"}
            -	Outlines standards and procedures § States the consequences of violations and non-compliance{"\n"}{"\n"}
          </Text>
          <Text style={styles.boldtext}>
            Risk recognition
          </Text>
          <Text style={styles.text}>
            Risk recognition can be organised into “4 R’s”{"\n"}
            -	Removal: System is modified so that a particular feature, and the associated risk, is removed.{"\n"}
            -	Reduction: Security measures are used to reduce risk to an acceptable level{"\n"}
            -	Retention: Nothing is done - the risk is small and insignificant{"\n"}
            -	Relocation: The system is unchanged, but the risk is transferred to another party (e.g. via an insurance policy){"\n"}{"\n"}
          </Text>
          <Text style={styles.boldtext}>
            Risk Analysis
          </Text>
          <Text style={styles.text}>
            The purpose of risk analysis is the identification,
            examination & evaluation of risks within an information system.{"\n"}
            This involves using risk component parts to determine estimates
            of future events, collecting evidence, and aggregating estimates
            to establish appropriate protection.{"\n"}{"\n"}
            Baseline security is a minimum level of protection that should
            be considered by all organisations utilising IT systems.{"\n"}
            This is dictated by standards – common standards include:{"\n"}
            -	UK Government’s 10 Steps to Cyber Security and Cyber Essentials scheme{"\n"}
            -	ISO/IEC 27002 standard - “A code of practice for information security controls”{"\n"}
          </Text>
        </View>
      </ScrollView >
    </View >

  );
}


const styles = StyleSheet.create({
  view: {
    flex: 0,
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