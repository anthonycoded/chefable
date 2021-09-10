import { MEALS } from "../../mealsData";
import { toggleFavorite, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  favoriteMeals: [],
  filteredMeals: MEALS,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleFavorite:
      ///does product exist
      const existingIndex = state.favoriteMeals.find(
        (meal) => meal.id === action.mealId
      );

      ///meal exist, remove from fav array
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        /// does not exist, add to fav meal list
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
