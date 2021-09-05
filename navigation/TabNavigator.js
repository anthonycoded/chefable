import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import { FavoriteNavigator } from "./FavoriteNavigator";
import CategoriesScreen from "../screens/CategoriesScreen";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
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
              <Ionicons
                name="ios-restaurant"
                size={25}
                color={color}
              ></Ionicons>
            );
          },

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            tabBarColor: Colors.primary,
            title: "All Meal Categories",
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-restaurant"
                  size={25}
                  color={tabInfo.tintColor}
                ></Ionicons>
              );
            },
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="FavoriteScreen"
          component={FavoriteNavigator}
          options={{
            title: "Favorite Meals",
            tabBarColor: Colors.secondary,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-star"
                  color={tabInfo.color}
                  size={25}
                ></Ionicons>
              );
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
