import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Switch, Platform } from "react-native";

import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={props.state}
        onValueChange={props.onChange}
      ></Switch>
    </View>
  );
};
const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegetarianFree, setIsVegetarianFree] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newvalue) => setIsGlutenFree(newvalue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={(newvalue) => setIsLactoseFree(newvalue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegan-Free"
        state={isVeganFree}
        onChange={(newvalue) => setIsVeganFree(newvalue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegatarian-Free"
        state={isVegetarianFree}
        onChange={(newvalue) => setIsVegetarianFree(newvalue)}
      ></FilterSwitch>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 15,
  },
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    margin: 20,
    fontSize: 22,
    textAlign: "center",
  },
});

export default FiltersScreen;
