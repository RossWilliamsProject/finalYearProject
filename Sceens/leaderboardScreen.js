//imports
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LeaderboardList } from "../AppData/AppDataLists/LeaderboardList";
import { v4 as uuidv4 } from "uuid";  // uuidv4 is a value randomiser 
import { useNavigation } from '@react-navigation/native';

//reads the leaderboard appdata file and displays scores on screen in order
//session sore is used to traack the users current score in this session 
//it is key to note that in this edition of the code, score changes are NOT permanent
export default function LeaderboardScreen({ sessionScore }) {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={Styles.view}>
        <Text style={Styles.textBold}>LeaderBoard</Text>
        <Text style={Styles.text}>Your Score is Highlighted in Blue</Text>
        <View>
          {LeaderboardList.sort(SortValues).map((entry) => (
            <TouchableOpacity
              // select one style if the score belongs to the "user" or not
              style={entry.user ? Styles.userButton : Styles.button}
              //apply onpress that is linked to the profile of the score shown
              //output score to console on display for debugging
              onPress={entry.user ? () => { navigation.navigate("profileScreen"), console.log(sessionScore) } : () => navigation.navigate("ProfileNotFoundScreen")}
              //assign random ID values to items to ensure unique keys
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

// function is used to sort values passed to it
// works in conjunction with "sort" function used in "map" above
function SortValues(firstValue, secondValue) {
  if (firstValue.score > secondValue.score) {
    return -1;
  }
  if (firstValue.score < secondValue.score) {
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