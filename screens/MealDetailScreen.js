import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";

const MealDetailScreen = ({ route, navigation }, props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const { mealId } = route.params;
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  console.log(selectedMeal);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("it worked");
            }}
          ></Item>
        </HeaderButtons>
      ),
    });
  }, [navigation]);

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
