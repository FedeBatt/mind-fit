import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home/";
import LocationScreen from "../../screens/LocationScreen/";
import Playground from "../../screens/Playground/";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Group initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Group>
  );
};

export const LocationStack = () => {
  return (
    <Stack.Group initialRouteName="Location">
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Group>
  );
};

export const PlaygroundStack = () => {
  return (
    <Stack.Group initialRouteName="Playground">
      <Stack.Screen name="Playground" component={Playground} />
    </Stack.Group>
  );
};
