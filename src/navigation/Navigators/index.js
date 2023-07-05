import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../../screens/Onboarding/Onboarding";
import TabNavigation from "./Tab";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboard" component={Onboarding} />
      <Stack.Screen name="Index" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default Navigator;
