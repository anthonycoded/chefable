import { MEALS } from "../../mealsData";

const initialState = {
  meals: MEALS,
  favoriteMeals: [],
  filteredMeals: MEALS,
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
