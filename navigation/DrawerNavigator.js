import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FiltersScreen from "../screens/FiltersScreen";
import TabNavigator from "./TabNavigator";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="CategoriesScreen">
      <Drawer.Screen
        name="Meal Categories"
        component={TabNavigator}
        options={{
          headerShown: false,
          title: "Categories",
          drawerActiveTintColor: Colors.secondary,
          fontFamily: "open-sans-bold",
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          titile: "Filters",
          headerShown: false,
          drawerActiveTintColor: Colors.secondary,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
