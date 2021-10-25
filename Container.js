import React from "react";
import Calculator from "./src/screens/calculator";
import Calculator2 from "./src/screens/calculator2";
//native
import { NavigationContainer } from "@react-navigation/native";
//stack
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//initial navigation

import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "native-base";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "./src/screens/home";

function MyTab() {
  const theme = useTheme();
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "Screen",
        headerTintColor: "white",
        tabBarHideOnKeyboard:"true",
        headerStyle: { backgroundColor: theme.colors.primary["500"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator";
          } else if (route.name === "Calculator2") {
            iconName = focused ? "calculator" : "calculator";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Calculator2" component={Calculator2} />
    </Tab.Navigator>
  );
}

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: "Calculator 1",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#FF5757" },
          }}
        />
        <Stack.Screen
          name="Calculator2"
          component={Calculator2}
          options={{
            title: "Calculator 2",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#FF5757" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); //   Use Screen
}
