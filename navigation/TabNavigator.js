import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import { MealsNavigator } from "./MealsNavigator";
import { FavoriteNavigator } from "./FavoriteNavigator";
import Colors from "../constants/Colors";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      shifting={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Meals") {
            iconName = "ios-restaurant";
          } else if (route.name === "Favorites") {
            iconName = "ios-star";
          }

          // You can return any component that you like here!
          return (
            <Ionicons name="ios-restaurant" size={25} color={color}></Ionicons>
          );
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarColor: Colors.primary,
        }}
        name="Meals"
        component={MealsNavigator}
      />
      <Tab.Screen
        options={{
          tabBarColor: Colors.secondary,
        }}
        name="Favorites"
        component={FavoriteNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
