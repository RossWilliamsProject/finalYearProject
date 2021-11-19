import * as React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import SplashScreen from './Sceens/splashScreen';
import HomeScreen  from './Sceens/homeScreen';
import SettingsScreen  from './Sceens/settingsScreen';
import SubjectSelectionScreen  from './Sceens/subjectSelectionScreen';
import SubjectScreen from './Sceens/subjectScreen';
import CourseSelectionScreen from './Sceens/courseSelectionScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs(){
  return (
    
    <Tab.Navigator 
      initialRouteName="home"
      tabBarOptions = {{
        activeBackgroundColor: "#189AB4",
        inactiveBackgroundColor: "#05445E",
        activeTintColor: "black",
        inactiveTintColor: "white"
      }}
    >
      
      <Tab.Screen 
        name="settings" 
        component={SettingsScreen}
        options={{
          title: "CompleteEducation",
          headerStyle:{backgroundColor:"#189AB4"},
          headerTitleStyle:{fontWeight:"bold", color:'black'},
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="cog-outline" color={color} size={size}
              style={{textAlignVertical: 'center'}}/>
        }}/>

      <Tab.Screen 
        name="home" 
        component={HomeScreen}
        options={{
          title: "CompleteEducation",
          headerStyle:{backgroundColor:"#189AB4"},
          headerTitleStyle:{ fontWeight:"bold", color:"black"},
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="home" color={color} size={size} 
              style={{textAlignVertical: 'center'}}/>
        }}/>

      <Tab.Screen 
        name="courseSelection" 
        component={CourseSelectionScreen}
        options={{
          title: "CompleteEducation",
          headerStyle:{backgroundColor:"#189AB4"},
          headerTitleStyle:{ fontWeight:"bold", color:"black"}, 
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="book-open" color={color} size={size}
              style={{textAlignVertical: 'center'}}/>
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="" 
        screenOptions={{
          headerShown: false
      }}>

        <Stack.Screen options={{
            headerShown: false,
          }}
          name="splashScreen"
          component= {SplashScreen}
        />

        <Stack.Screen 
          name="HomeTabs" 
          component={MyTabs}  
          screenOptions={{
            headerShown: false
          }} />

        <Stack.Screen name="SubjectSelection" component={SubjectSelectionScreen} />
        <Stack.Screen name="SubjectScreen " component={SubjectScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}