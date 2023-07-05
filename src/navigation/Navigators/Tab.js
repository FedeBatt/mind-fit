import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LocationStack, MainStack, PlaygroundStack } from "./Stack";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ params }) => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      // screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Main" component={MainStack} />
      <Tab.Screen name="LocationMain" component={LocationStack} />
      <Tab.Screen name="PlaygroundMain" component={PlaygroundStack} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
