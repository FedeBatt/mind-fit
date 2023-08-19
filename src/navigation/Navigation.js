import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding/Onboarding";
import Playground from "../screens/Playground/Playground";
import TopBar from "../components/TopBar/TopBar";
import { ROUTES } from "../constants/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationScreen from "../screens/LocationScreen/LocationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { hanldeIconName } from "./Navigation.utils";
import FamilyMemo from "../screens/FamilyMemo";
import FamilyInfo from "../screens/FamilyInfo/FamilyInfo";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ navigation, route }) => ({
        header: () => <TopBar navigation={navigation} route={route} />,
      })}
    >
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.FAMILY_MEMO} component={FamilyMemo} />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name={ROUTES.FAMILY_INFO}
        component={FamilyInfo}
      />
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
      <Stack.Screen name={ROUTES.LOCATION} component={LocationScreen} />
    </Stack.Navigator>
  );
};

const PlaygroundStack = () => {
  return (
    <Stack.Navigator screenOptions={({ navigation, route }) => ({
      header: () => <TopBar navigation={navigation} route={route} />,
    })}>
      <Stack.Screen name={ROUTES.PLAYGROUND} component={Playground} />
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
      <Tab.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={ROUTES.LOCATION_STACK} component={LocationStack} />
      <Tab.Screen name={ROUTES.PLAYGROUND_STACK} component={PlaygroundStack} />
    </Tab.Navigator>
  );
};

const StackMain = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
      <Stack.Screen
        name={ROUTES.MAIN_TAB}
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
