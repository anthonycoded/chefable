import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";

import Colors from "../constants/Colors";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
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
