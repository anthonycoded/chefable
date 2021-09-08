import { MEALS } from "../../dummy-data";

const initialState = {
  meals,
  favoriteMeals: [],
  filteredMeals: MEALS,
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
