import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Colors from "../constants/Colors";

import { MEALS } from "../dummy-data (1)";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation}></MealList>;
};

CategoryMealsScreen["navigationOptions"] = () => {
  return {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "white",
  };
};

export default CategoryMealsScreen;
