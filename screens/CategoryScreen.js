import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Category Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryScreen;
