import React from "react";
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CatergoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primary,
            title: "Meal Categories",
          }}
          name="Categories"
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CatergoryMealsScreen}
          options={
            ({
              headerStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.primary : "",
              },
              headerTintColor:
                Platform.OS === "android" ? "white" : Colors.primary,
              title: "Meal Categories",
            },
            ({ route }) => ({ title: route.params.categoryTitle }))
          }
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primary,
            title: "Meal Categories",
          }}
          name="MealDetails"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MealsNavigator;
