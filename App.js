import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import SplashScreen from './Sceens/splashScreen';
import HomeScreen  from './Sceens/homeScreen';
import SettingsScreen  from './Sceens/settingsScreen';
import SubjectSelectionScreenSE  from './Sceens/subjectSelectionScreens/subjectSelectionScreenSE';
import SubjectSelectionOther  from './Sceens/subjectSelectionScreens/SubjectSelectionOther';
import CourseSelectionScreen from './Sceens/courseSelectionScreen';
import SEIntroduction from './Sceens/subjectScreens/SEIntroduction';
import SERequirements from './Sceens/subjectScreens/SERequiremts';
import OSubjectNotFound from './Sceens/subjectScreens/OSubjectNotFound';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs(){
  return (
    
    <Tab.Navigator 
      initialRouteName="home"
      screenOptions = {{
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
      <Stack.Navigator initialRouteName="" 
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



        {/*LIST OF COURSES*/}
        <Stack.Screen name="SubjectSelectionSE" component={SubjectSelectionScreenSE} 
          options={{
              headerShown: true,
              title: "Software Engineering",
              headerStyle:{backgroundColor:"#189AB4"},
              headerTitleStyle:{ fontWeight:"bold", color:"black"}, 
          }} />
        <Stack.Screen name="SubjectSelectionOther" component={SubjectSelectionOther} 
          options={{
              headerShown: true,
              title: "Selected Subject",
              headerStyle:{backgroundColor:"#189AB4"},
              headerTitleStyle:{ fontWeight:"bold", color:"black"}, 
          }} />


        {/*LIST OF SOFTWARE ENGINEERING SUBJECTS*/}
        <Stack.Screen name="SEIntroduction" component={SEIntroduction} 
          options={{
            headerShown: true,
            title: "Introduction",
            headerStyle:{backgroundColor:"#189AB4"},
            headerTitleStyle:{ fontWeight:"bold", color:"black"}, 
          }}/>
        <Stack.Screen name="SERequirements" component={SERequirements} 
          options={{
            headerShown: true,
            title: "Requirements",
            headerStyle:{backgroundColor:"#189AB4"},
            headerTitleStyle:{ fontWeight:"bold", color:"black"}, 
        }} />



        <Stack.Screen name="OSubjectNotFound" component={OSubjectNotFound} 
          options={{
            headerShown: true,
            title: "Subject Not Found",
            headerStyle:{backgroundColor:"#189AB4"},
            headerTitleStyle:{ fontWeight:"bold", color:"black"}, 
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}