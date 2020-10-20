import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import Icon from "./components/Icon";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = () => (
  <Tab.Navigator
    activeTintColor="#7444C0"
    inactiveTintColor="#363636"
    activeColor="#fff"
    labelStyle={
      {
        fontSize: 14,
        textTransform: "uppercase",
        paddingTop: 10
      }
    }
    style={{
      backgroundColor: "#FFF",
      borderTopWidth: 0,
      paddingVertical: 30,
      height: 60,
      marginBottom: 0,
      shadowOpacity: 0.05,
      shadowRadius: 10,
      shadowColor: "#000",
      shadowOffset: { height: 0, width: 0 }
    }}

  >
    <Tab.Screen
      name="Explore"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="explore" />
            </Text>
          );
        }
      }}
    />
    <Tab.Screen
      name="Matches"
      component={MatchesScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="heart" />
            </Text>
          );
        }
      }}
    />
    <Tab.Screen
      name="Chat"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="chat" />
            </Text>
          );
        }
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="user" />
            </Text>
          );
        }
      }}
    />
  </Tab.Navigator>
);

export default App;
