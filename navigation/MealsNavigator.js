import React from "react";
import { Platform } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import CatergoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import DrawerNavigator from "./DrawerNavigator";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          title: "Meal App",
          headerMode: "screen",
        }}
      >
        {/* drawer navigator */}

        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="menu"
                  iconName="ios-menu"
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                ></Item>
              </HeaderButtons>
            ),
          })}
          name="DrawerNavigator"
          component={DrawerNavigator}
        />

        <Stack.Screen
          name="CategoryMeals"
          component={CatergoryMealsScreen}
          options={({ route }) => ({ title: route.params.categoryTitle })}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.mealTitle })}
          name="MealDetails"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
