import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LeaderboardList } from "../AppData/AppDataLists/LeaderboardList";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from '@react-navigation/native';

export default function LeaderboardScreen({sessionScore}) {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={Styles.view}>
        <Text style={Styles.textBold}>LeaderBoard</Text>
        <Text style={Styles.text}>Your Score is Highlighted in Blue</Text>
        <View>
          {LeaderboardList.sort(OrderValues).map((entry) => (
            <TouchableOpacity
              style={entry.user ? Styles.userButton : Styles.button}
              onPress={entry.user ? () => {navigation.navigate("profileScreen"), console.log(sessionScore)} : () => navigation.navigate("ProfileNotFoundScreen")}
              key={uuidv4()}>
              <Text style={Styles.text}>
                {entry.displayName}
              </Text>
              <Text style={Styles.scoreText}>
                Score: {entry.user ? sessionScore : entry.score}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}


function OrderValues(a, b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
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
  userButton: {
    backgroundColor: '#189AB4',
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
    fontWeight: 'bold',
    fontSize: 20
  },
  scoreText: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    color: 'black',
    fontSize: 20
  }
})