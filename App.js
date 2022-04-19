//imports
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SplashScreen from './Sceens/splashScreen';
import HomeScreen from './Sceens/homeScreen';
import SettingsScreen from './Sceens/settingsScreen';
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function to create tab navigation system to be added to stack navigation system
function MyTabs() {
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
        name="settings"
        component={SettingsScreen}
        options={{
          title: "CompleteEducation",
          headerStyle: { backgroundColor: "#189AB4" },
          headerTitleStyle: { fontWeight: "bold", color: 'black' },
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="cog-outline" color={color} size={size}
              style={{ textAlignVertical: 'center' }} />
        }} />

      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "CompleteEducation",
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

//creates a stack navigation system and places the tabs inside. 
export default function App() {
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

        <Stack.Screen
          name="HomeTabs"
          component={MyTabs}
          screenOptions={{
            headerShown: false
          }} />



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
            title: "Cryptraphy",
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