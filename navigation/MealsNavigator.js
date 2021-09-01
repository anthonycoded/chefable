import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CatergoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeals" component={CatergoryMealsScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MealsNavigator;
