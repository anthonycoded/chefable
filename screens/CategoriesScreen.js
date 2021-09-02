import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      ></CategoryGridTile>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    >
      <Button
        title="Go to Meals!"
        onPress={() => props.navigation.navigate("CategoryMeals")}
      ></Button>
    </FlatList>
  );
};

CategoriesScreen["navigationOptions"] = () => {
  return {
    title: "Meal Categories",
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

export default CategoriesScreen;
