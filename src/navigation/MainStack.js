import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding/Onboarding";
import Playground from "../screens/Playground/Playground";
import TopBar from "../components/TopBar/TopBar";
import { ROUTE_NAMES } from "../constants/Routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationScreen from "../screens/LocationScreen/LocationScreen";
import { Ionicons } from "@expo/vector-icons";
import theme from "../theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: ({ navigation, route }) => (
          <TopBar navigation={navigation} route={route} />
        ),
        tabBarStyle: { height: 80 },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 600,
        },
        tabBarActiveTintColor: theme.colors.primary[20],
        tabBarInactiveTintColor: theme.colors.basic.black100,
      }}
    >
      <Tab.Screen
        name={ROUTE_NAMES.Home}
        options={{
          tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
        }}
        component={Home}
      />
      <Tab.Screen
        name={ROUTE_NAMES.Location}
        component={LocationScreen}
        options={{
          tabBarIcon: () => <Ionicons name="location-outline" size={24} />,
        }}
      />
      <Tab.Screen
        name={ROUTE_NAMES.Playground}
        component={Playground}
        options={{
          tabBarIcon: () => (
            <Ionicons name="game-controller-outline" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_NAMES.Onboarding} component={Onboarding} />
      <Stack.Screen name={ROUTE_NAMES.MainTab} component={MainTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
