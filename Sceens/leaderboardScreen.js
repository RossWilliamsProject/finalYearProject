import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LeaderboardList } from "../AppData/AppDataLists/LeaderboardList";
import { v4 as uuidv4 } from "uuid";

export default function LeaderboardScreen() {
  return (
    <ScrollView>
      <View style={Styles.view}>
        <Text style={Styles.textBold}>LeaderBoard</Text>
        <View>
          {LeaderboardList.map((entry) => (
            <TouchableOpacity
              style={Styles.button}
              key={uuidv4()}>
              <Text style={Styles.text}>
                {entry.displayName}
              </Text>
              <Text style={Styles.scoreText}>
                Score: {entry.score}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#D9E3E5"
  },
  button: {
    backgroundColor: 'white',
    width: 375,
    height: 50,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    color: 'black',
    fontSize: 20
  },
  textBold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  scoreText: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    color: 'black',
    fontSize: 20
  }
})