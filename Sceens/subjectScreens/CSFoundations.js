
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CSFoundations() {
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
                    Foundations
                  </Text>
                  <Text style={styles.boldtext}>
                    General Security
                  </Text>
                  <Text style={styles.text}>
                    Security is about the protection of assets.
                    Assets might be physical, but they could
                    also be data, information, even ideas{"\n"}
                    Protection Measures Include:{"\n"}
                    • Prevention{"\n"}
                    • Detection{"\n"}
                    • Recovery – manual or automatic{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Defining ‘Security’
                  </Text>
                  <Text style={styles.text}>
                    People struggle to agree on what security
                    is defined as. Should it be Unbreakable?
                    What about Secure enough? {"\n"}
                    It is often simply an arms race between
                    developers / researchers and malicious users{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Managing Security
                  </Text>

                  <Text style={styles.text}>
                    Within organisations, management are responsible
                    for defining security needs. Developers will
                    then implement these policies.{"\n"}
                    A concise document explaining the needs is called
                    a Security Policy. It dictates what should be protected
                    and how should we protect it?{"\n"}{"\n"}
                    Computer Security is usually defined as
                    three key areas (CIA):{"\n"}
                    -	Confidentiality prevention of unauthorised
                    disclosure of information{"\n"}
                    -	Integrity prevention of unauthorised
                    modification of information{"\n"}
                    -	Availability prevention of unauthorised
                    withholding of information or resources{"\n"}{"\n"}
                    Security should also encourage the following:{"\n"}
                    Accountability -
                    Users should be held responsible for their actions{"\n"}
                    Non-repudiation -
                    Provides un-forgeable evidence that someone
                    did something (Mostly a legal concept){"\n"}
                    A fundamental issue with computer security
                    is that there is a trade-off between
                    security and ease of use.{"\n"}
                  </Text>

                  <Text style={styles.boldtext}>
                    Data Vs Information
                  </Text>
                  <Text style={styles.text}>
                    • Data – A means to represent information{"\n"}
                    • Information –
                    An interpretation of that data{"\n"}
                    Focusing on ONLY data can still leave
                    information vulnerable
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