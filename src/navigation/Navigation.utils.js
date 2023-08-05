import { Ionicons } from "@expo/vector-icons";
import { ROUTE_NAMES } from "../constants/routes";

export const hanldeIconName = ({ routeName, color, focused }) => {
  let iconName;
  switch (routeName) {
    case ROUTE_NAMES.HOME_STACK:
      iconName = focused ? "home" : "home-outline";
      break;
    case ROUTE_NAMES.LOCATION_STACK:
      iconName = focused ? "location" : "location-outline";
      break;
    case ROUTE_NAMES.PLAYGROUND_STACK:
      iconName = focused ? "game-controller" : "game-controller-outline";
      break;
    default:
      return null;
  }
  return <Ionicons name={iconName} size={26} color={color} />;
};
