import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../dummy-data (1)";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";

const MealDetailScreen = ({ route }, props) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal);
  return (
    <ScrollView>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      ></Image>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Step</Text>
      {selectedMeal.instructions.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen["navigationOptions"] = (route, navigation) => {
  const mealId = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MealDetailScreen;
