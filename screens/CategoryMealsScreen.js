import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryTitle } = route.params;

  return (
    <View style={styles.screen}>
      <Text>The Category Screen</Text>
      <Text>{categoryTitle}</Text>

      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("MealDetails");
        }}
      ></Button>
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
