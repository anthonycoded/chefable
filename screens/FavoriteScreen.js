import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavoriteScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favMeals);

  return (
    <MealList listData={favMeals} navigation={props.navigation}></MealList>
  );
};

export default FavoriteScreen;
