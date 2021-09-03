import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../dummy-data (1)";

const FavoriteScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return (
    <MealList listData={favMeals} navigation={props.navigation}></MealList>
  );
};

export default FavoriteScreen;
