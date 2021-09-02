import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../dummy-data";
import { MEALS } from "../dummy-data (1)";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryTitle, categoryId } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      ></MealItem>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
};

CategoryMealsScreen["navigationOptions"] = () => {
  return {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
