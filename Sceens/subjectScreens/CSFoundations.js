
import React from 'react';
import { View, Text, StyleSheet, ScrollView, contentContainer } from 'react-native';

export default function CSFoundations() {
  return (
    <View style={styles.backgroundview}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.view}>
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
        </View>
      </ScrollView>
    </View>

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