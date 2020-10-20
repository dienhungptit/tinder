import React from "react";
import { Text,View } from "react-native";
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => (
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

  </Tab.Navigator>
);

const App = ()=> {
  return (
    // <NavigationContainer >
      <HomeScreen />
    // </NavigationContainer>
    // <View>
    //   <Text>hung s</Text>
    // </View>
  );
}
export default App;
