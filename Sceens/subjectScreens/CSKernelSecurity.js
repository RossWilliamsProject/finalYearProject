
import React from 'react';
import { View, Text, StyleSheet, ScrollView, contentContainer} from 'react-native';

export default function CSKernelSecurity () {
  return(    
    <View style={styles.backgroundview}>
        <ScrollView 
        contentContainerStyle = {styles.contentContainer}>
        <View style={styles.view}>

        <Text style={styles.textHeader}>
        Introduction
        </Text>

        <Text style={styles.boldtext}>Summary of Content:</Text>
        <Text style={styles.text}> 
           You’ll be introduced to the concept of{"\n"} Software
                Engineering and will be taken{"\n"} through the software development{"\n"} process:{"\n"}{"\n"}
              - deciding exactly what should be built {"\n"} (Requirements),{"\n"}
              - designing how it should be built {"\n"}  (Software Specification/Architecture),{"\n"}
              - development strategies {"\n"}(Implementation & Testing){"\n"}
              - maintaining change{"\n"} (Software Evolution and Maintenance).{"\n"}{"\n"}
          </Text>


        <Text style={styles.boldtext}>What exactly is Software?</Text>
        <Text style={styles.text}> 
          There are many examples:{"\n"}{"\n"}
          A Phone Game App: {"\n"}
          • Ready for real users{"\n"}
          • Integrates many features in the game.{"\n"}
          • Might integrate with other services {"\n"}(e.g. login){"\n"}
          • Might have a server component{"\n"}
          - talking to a database{"\n"}
          • Need to push out multiple versions{"\n"}{"\n"}
          A Social Media Platform: {"\n"}
          • Basically a server driven platform{"\n"}
          • Has lots of interfaces to it{"\n"}
          {'   '}- each is a piece of software{"\n"}
          {'   '}- each one integrates functions{"\n"}
          {'   '}- each piece might have diff bugs{"\n"}
          • New features rolled out across them{"\n"}{"\n"}
          A Web Browser: {"\n"}
          • Integrates multiple functions{"\n"}
          • Has a version history on every platform{"\n"}
          • New functions roll out on all platforms{"\n"}
          • All authenticate and share data{"\n"}{"\n"}

          Overall, Software includes{"\n"}
          {'   '}- the compiled code{"\n"}
          {'   '}- documentation{"\n"}
          {'   '}- configuration components{"\n"}
          {'   '}- installation/upgrade{"\n"}
          {'   '}- All in an installer that ‘deploys’{"\n"}
          </Text>

          <Text style={styles.boldtext}>Software Engineering Definition</Text>
          <Text style={styles.text}> 
          “The application of a systematic, disciplined,
            quantifiable approach to the development,
            operation, and maintenance of software;{"\n"}
            that is, the application of engineering to software” {"\n"}
          </Text>

          <Text style={styles.boldtext}>The Software Crisis</Text>
          <Text style={styles.text}>Nato, 1968</Text>
          <Text style={styles.text}> 
          • Software was bad, or worse{"\n"}
          {'   '}- Individual-person approaches{"\n"}
          {'   '} to SE didn't scale to software{"\n"}
          • Software was unreliable, behind schedule,
          {' '}and cost more than expected{"\n"}
          • ‘Software Engineering’ was coined{"\n"}
           to understand the ‘making’ of software
          • During the 1970s/80s (and still now) people develop new processes to
          better ‘engineer’ software.
          </Text>
        </View>
        </ScrollView>
    </View>
    
    );
}


const styles = StyleSheet.create({
    view: { 
        flex:0,
        //alignItems:'center',
        width: "93%",
        borderRadius:20,
        backgroundColor: "white"
    },
    textHeader: {
        color: 'black',
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
      paddingLeft: 15,
      fontSize: 20
    },
    boldtext: {
      fontWeight:'bold',
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