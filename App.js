import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SplashScreen from './Sceens/splashScreen';
import HomeScreen from './Sceens/homeScreen';
import AuthenticaionQuizScreen from './Sceens/quizScreens/CSAuthenticationQuizScreen';
import SettingsScreen from './Sceens/settingsScreen';
import ProfileScreen from './Sceens/profileScreens/profileScreen';
import ProfileNotFoundScreen from './Sceens/profileScreens/ProfileNotFoundScreen';
import LeaderboardScreen from './Sceens/leaderboardScreen';

import SubjectSelectionScreenCS from './Sceens/subjectSelectionScreens/subjectSelectionScreenCS';
import SubjectSelectionOther from './Sceens/subjectSelectionScreens/subjectSelectionOther';
import CourseSelectionScreen from './Sceens/courseSelectionScreen';

import OSubjectNotFound from './Sceens/subjectScreens/OSubjectNotFound';
import CSAuthentication from './Sceens/subjectScreens/CSAuthentication';
import CSCryptography from './Sceens/subjectScreens/CSCryptography';
import CSExploits from './Sceens/subjectScreens/CSExploits';
import CSFoundations from './Sceens/subjectScreens/CSFoundations';
import CSKernelSecurity from './Sceens/subjectScreens/CSKernelSecurity';
import CSMalware from './Sceens/subjectScreens/CSMalware';
import CSOSSecurity from './Sceens/subjectScreens/CSOSSecurity';
import CSSecurityManagement from './Sceens/subjectScreens/CSSecurityManagement';

import CSAuthenticationQuizScreen from './Sceens/quizScreens/CSAuthenticationQuizScreen';
import CSCryptographyQuizScreen from './Sceens/quizScreens/CSCryptographyQuizScreen';
import CSExploitsQuizScreen from './Sceens/quizScreens/CSExploitsQuizScreen';
import CSFoundationsQuizScreen from './Sceens/quizScreens/CSFoundationsQuizScreen';
import CSKernelSecurityQuizScreen from './Sceens/quizScreens/CSKernelSecurityQuizScreen';
import CSMalwareQuizScreen from './Sceens/quizScreens/CSMalwareQuizScreen';
import CSOSSecurityQuizScreen from './Sceens/quizScreens/CSOSSecurityQuizScreen';
import CSSecurityManagementQuizScreen from './Sceens/quizScreens/CSSecurityManagementQuizScreen';

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



        {/*LIST OF QUIZZES*/}
        <Stack.Screen options={{
          headerShown: true,
          title: "Authenticaion Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSAuthenticationQuizScreen"
        >
          {props => <CSAuthenticationQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "Cryptography Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSCryptographyQuizScreen"
        >
          {props => <CSCryptographyQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "Exploits Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSExploitsQuizScreen"
        >
          {props => <CSExploitsQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "Foundations Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSFoundationsQuizScreen"
        >
          {props => <CSFoundationsQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "Kernel Security Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSKernelSecurityQuizScreen"
        >
          {props => <CSKernelSecurityQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "Malwre Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSMalwareQuizScreen"
        >
          {props => <CSMalwareQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "OS Security Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSOSSecurityQuizScreen"
        >
          {props => <CSOSSecurityQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>

        <Stack.Screen options={{
          headerShown: true,
          title: "Security Management Quiz",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
        }}
          name="CSSecurityManagementQuizScreen"
        >
          {props => <CSSecurityManagementQuizScreen {...props} setSessionScore={setSessionScore} sessionScore={sessionScore} />}
        </Stack.Screen>


        <Stack.Screen
          name="HomeTabs"
          screenOptions={{
            headerShown: false
          }}>
          {props => <MyTabs sessionScore={sessionScore} />}
        </Stack.Screen>





        {/*LIST OF COURSES*/}
        <Stack.Screen name="SubjectSelectionCS" component={SubjectSelectionScreenCS}
          options={{
            headerShown: true,
            title: "Computer Security",
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


        {/*LIST OF COMPUTER SECURITY SUBJECTS*/}
        <Stack.Screen name="CSFoundations" component={CSFoundations}
          options={{
            headerShown: true,
            title: "Foundations",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSSecurityManagement" component={CSSecurityManagement}
          options={{
            headerShown: true,
            title: "Security Management",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSCryptography" component={CSCryptography}
          options={{
            headerShown: true,
            title: "Cryptography",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSAuthentication" component={CSAuthentication}
          options={{
            headerShown: true,
            title: "Authentication",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSKernelSecurity" component={CSKernelSecurity}
          options={{
            headerShown: true,
            title: "Kernel Security",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSOSSecurity" component={CSOSSecurity}
          options={{
            headerShown: true,
            title: "OS Security",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSMalware" component={CSMalware}
          options={{
            headerShown: true,
            title: "Malware",
            headerStyle: { backgroundColor: "#189AB4" },
            headerTitleStyle: { fontWeight: "bold", color: "black" },
          }} />
        <Stack.Screen name="CSExploits" component={CSExploits}
          options={{
            headerShown: true,
            title: "Exploits",
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