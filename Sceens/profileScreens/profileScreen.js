//imports
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// used to display the profile of the user 
// accessible from either home screen or tab navigation 
// conditionally renders badge based on state passed "up" under name "showbadge01"
export default function ProfileScreen({ setShowBadge01, showBadge01 }) {
  const navigation = useNavigation();
  return (
    <View style={Styles.view}>
      <View style={Styles.space} />
      <View style={Styles.space} />

      <TouchableOpacity
        style={Styles.userButton}
        disabled={true}>
        <Text style={Styles.text}>
          Max Miller
        </Text>
        <Text style={Styles.scoreText}>
          Score: 0
        </Text>
      </TouchableOpacity>

      <View style={Styles.space} />
      <View style={Styles.space} />

      <TouchableOpacity
        style={Styles.profileContainer}
        disabled={true}>
        <View style={Styles.space} />
        <Text style={Styles.textBold}>
          Badges:
        </Text>
        {showBadge01 ?
          <View>
            <Image
              source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/award1.png')}
            />
          </View>
          : <></>
        }
      </TouchableOpacity>

      <View style={Styles.space} />

      <TouchableOpacity
        style={Styles.button}>
        <Text style={Styles.textBold}>
          Change Name
        </Text>
      </TouchableOpacity>

      <View style={Styles.space} />

      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("leaderboard")}>
        <Text style={Styles.textBold}>
          Leaderboard
        </Text>
      </TouchableOpacity>

      <View style={Styles.space} />

      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("home")}>
        <Text style={Styles.textBold}>
          Home
        </Text>
      </TouchableOpacity>
    </View >
  )
}

const Styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#D9E3E5"
  },
  profileContainer: {
    backgroundColor: 'white',
    width: 375,
    height: 300,
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  space: {
    width: 20,
    height: 10,
  },
  textBold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    backgroundColor: 'white',
    width: 375,
    height: 50,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
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
})