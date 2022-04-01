import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CSSecurityManagement() {
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
              Chapter 1: Part 1
            </Text>
            <View style={styles.characterImage}>
              <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/scientistHappy2.png')} />
            </View>

            <View style={styles.learningOpacity} disabled={true}>
              <Text style={styles.text}>
                Hey there! My name is Molly and I just started a job on board the HMS Trent,
                a submarine! My job is to manage the ships cyber security,
                and I’m going to need your help. Join me as I brush up on my security
                knowledge along this adventure!
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
                  Chapter 1: Part 2
                </Text>
                <View style={styles.characterImage}>
                  <Image source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/scientistHappy2.png')} />
                </View>

                <View style={styles.learningOpacity} disabled={true}>
                  <Text style={styles.text}>
                    Hey there! My name is Molly and I just started a job on board the HMS Trent,
                    a submarine! My job is to manage the ships cyber security,
                    and I’m going to need your help. Join me as I brush up on my security
                    knowledge along this adventure!
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