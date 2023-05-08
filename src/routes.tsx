import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Home, DemoPage, MapScreen, Planets, People } from "./pages";

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="first"
    >
      <Screen name="home" component={Home} />
      <Screen name="map" component={MapScreen} />
      <Screen name="demo" component={DemoPage} />
      <Screen name="planets" component={Planets} />
      <Screen name="people" component={People} />
    </Navigator>
  );
}

export function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Historic") {
            iconName = "file-text";
          } else if (route.name === "Config") {
            iconName = "settings";
          } else if (route.name === "Map") {
            iconName = "map";
          } else if (route.name === "Demo") {
            iconName = "settings";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#eb6726",
        inactiveTintColor: "#f5f5f5",
        style: {
          backgroundColor: "#1e111d",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Demo" component={DemoPage} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

export function DashboardStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="first" component={Home} />
    </Navigator>
  );
}
