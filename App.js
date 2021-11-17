import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function HomeScreen(){
  return(
  <View>
    <Text>Home Screen</Text>
  </View>
  )
}

function SettingsScreen(){
  return(
  <View>
    <Text>Settings Screen</Text>
  </View>
  )
}

function CourseSelectionScreen(){
  return(
  <View>
    <Text>course selection Screen</Text>
  </View>
  )
}

function MyTabs(){
  return (
    <Tab.Navigator>
      
      <Tab.Screen 
        name="settings" 
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
        }}/>

      <Tab.Screen 
        name="home" 
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}/>

      <Tab.Screen 
        name="courseSelection" 
        component={CourseSelectionScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="book-open" color={color} size={size} />
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


