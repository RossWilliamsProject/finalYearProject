import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SplashScreen from './Sceens/splashScreen';
import HomeScreen from './Sceens/homeScreen';
import QuizScreen from './Sceens/quizScreen';
import SettingsScreen from './Sceens/settingsScreen';
import ProfileScreen from './Sceens/profileScreens/profileScreen';
import ProfileNotFoundScreen from './Sceens/profileScreens/ProfileNotFoundScreen';
import LeaderboardScreen from './Sceens/leaderboardScreen';
import SubjectSelectionScreenSE from './Sceens/subjectSelectionScreens/subjectSelectionScreenSE';
import SubjectSelectionOther from './Sceens/subjectSelectionScreens/subjectSelectionOther';
import CourseSelectionScreen from './Sceens/courseSelectionScreen';
import SEIntroduction from './Sceens/subjectScreens/SEIntroduction';
import SERequirements from './Sceens/subjectScreens/SERequiremts';
import OSubjectNotFound from './Sceens/subjectScreens/OSubjectNotFound';
import { LeaderboardList } from './AppData/AppDataLists/LeaderboardList';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs({ sessionScore }) {
  return (

    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        "tabBarActiveTintColor": "black",
        "tabBarInactiveTintColor": "white",
        "tabBarActiveBackgroundColor": "#189AB4",
        "tabBarInactiveBackgroundColor": "#05445E",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >

      <Tab.Screen
        name="leaderboard"
        options={{
          title: "CompleteEducation",
          headerRight: () => (
            <TouchableOpacity
              //</Text>onPress={() => navigation.navigate("SettingsScreen")}
              style={styles.button}>
              <MaterialCommunityIcons name="cog" color="black" size={25} />
            </TouchableOpacity>),
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: 'black' },
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="trophy" color={color} size={size}
              style={{ textAlignVertical: 'center' }} />
        }}>
        {props => <LeaderboardScreen {...props} sessionScore={sessionScore} />}
      </Tab.Screen>

      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "CompleteEducation",
          headerRight: () => (
            <TouchableOpacity
              //onPress={() => navigation.navigate("SettingsScreen")}
              style={styles.button}>
              <MaterialCommunityIcons name="cog" color="black" size={25} padding="20px  " />
            </TouchableOpacity>),
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
          tabBarLabel: '',
          borderBottomWidth: 0,
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="home" color={color} size={size}
              style={{ textAlignVertical: 'center' }} />
        }} />

      <Tab.Screen
        name="courseSelection"
        component={CourseSelectionScreen}
        options={{
          title: "CompleteEducation",
          headerRight: () => (
            <TouchableOpacity
              //onPress={() => navigation.navigate("SettingsScreen")}
              style={styles.button}>
              <MaterialCommunityIcons name="cog" color="black" size={25} />
            </TouchableOpacity>),
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="book-open" color={color} size={size}
              style={{ textAlignVertical: 'center' }} />
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [sessionScore, setSessionScore] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerShown: false
        }}>

        <Stack.Screen options={{
          headerShown: false,
        }}
          name="splashScreen"
          component={SplashScreen}
        />

        <Stack.Screen options={{
          headerShown: true,
          title: "Profile",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="profileScreen"
          component={ProfileScreen}
        />

        <Stack.Screen options={{
          headerShown: true,
          title: "Profile",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="ProfileNotFoundScreen"
          component={ProfileNotFoundScreen}
        />


        <Stack.Screen options={{
          headerShown: true,
          title: "Recap Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="quizScreen"
        >
          {props => <QuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen
          name="HomeTabs"
          screenOptions={{
            headerShown: false
          }}>
          {props => <MyTabs sessionScore={sessionScore} />}
        </Stack.Screen>



        {/*LIST OF COURSES*/}
        <Stack.Screen name="SubjectSelectionSE" component={SubjectSelectionScreenSE}
          options={{
            headerShown: true,
            title: "Software Engineering",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="SubjectSelectionOther" component={SubjectSelectionOther}
          options={{
            headerShown: true,
            title: "Selected Subject",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />


        {/*LIST OF SOFTWARE ENGINEERING SUBJECTS*/}
        <Stack.Screen name="SEIntroduction" component={SEIntroduction}
          options={{
            headerShown: true,
            title: "Introduction",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="SERequirements" component={SERequirements}
          options={{
            headerShown: true,
            title: "Requirements",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />


        <Stack.Screen name="OSubjectNotFound" component={OSubjectNotFound}
          options={{
            headerShown: true,
            title: "Subject Not Found",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#189AB4',
    width: 50,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 50,
    paddingEnd: 15,
    flexDirection: 'row',
  },
});