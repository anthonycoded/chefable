import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import CategoriesScreen from "../screens/CategoriesScreen";
import CatergoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      >
        <Stack.Screen
          options={{ title: "Meal Categories" }}
          name="Categories"
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CatergoryMealsScreen}
          options={({ route }) => ({ title: route.params.categoryTitle })}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.mealTitle })}
          name="MealDetails"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { MealsNavigator };
