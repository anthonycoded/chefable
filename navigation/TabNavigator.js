import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import { MealsNavigator } from "./MealsNavigator";
import FavoritesScreen from "../screens/FavoriteScreen";
import Colors from "../constants/Colors";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator({ activeColor: Colors.secondary })
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.secondary}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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

        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          activeColor: Colors.secondary,
        }}
        name="Meals"
        component={MealsNavigator}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
