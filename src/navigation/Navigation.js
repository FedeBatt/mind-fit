import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding/Onboarding";
import Playground from "../screens/Playground/Playground";
import TopBar from "../components/TopBar/TopBar";
import { ROUTE_NAMES } from "../constants/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationScreen from "../screens/LocationScreen/LocationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { hanldeIconName } from "./Navigation.utils";
import FamilyMemo from "../screens/FamilyMemo";
import FamilyInfo from "../screens/FamilyInfo/FamilyInfo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: () => <TopBar navigation={navigation} route={route} />,
      })}
    >
      <Stack.Screen name={ROUTE_NAMES.HOME} component={Home} />
      <Stack.Screen name={ROUTE_NAMES.FAMILY_MEMO} component={FamilyMemo} />
      <Stack.Screen options={{presentation: 'modal'}} name={ROUTE_NAMES.FAMILY_INFO} component={FamilyInfo} />
    </Stack.Navigator>
  );
};

const LocationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: () => <TopBar navigation={navigation} route={route} />,
      })}
    >
      <Stack.Screen name={ROUTE_NAMES.LOCATION} component={LocationScreen} />
    </Stack.Navigator>
  );
};

const PlaygroundStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: () => <TopBar navigation={navigation} route={route} />,
      })}
    >
      <Stack.Screen name={ROUTE_NAMES.PLAYGROUND} component={Playground} />
    </Stack.Navigator>
  );
};

const TabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) =>
          hanldeIconName({ routeName: route.name, color, focused }),
      })}
    >
      <Tab.Screen name={ROUTE_NAMES.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={ROUTE_NAMES.LOCATION_STACK} component={LocationStack} />
      <Tab.Screen
        name={ROUTE_NAMES.PLAYGROUND_STACK}
        component={PlaygroundStack}
      />
    </Tab.Navigator>
  );
};

const StackMain = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_NAMES.ONBOARDING} component={Onboarding} />
      <Stack.Screen
        name={ROUTE_NAMES.MAIN_TAB}
        options={{ gestureEnabled: false }}
        component={TabGroup}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackMain />
    </NavigationContainer>
  );
};

export default Navigation;
