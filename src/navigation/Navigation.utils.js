import { Ionicons } from "@expo/vector-icons";
import { ROUTES } from "../constants/routes";

export const hanldeIconName = ({ routeName, color, focused }) => {
  let iconName;
  switch (routeName) {
    case ROUTES.HOME_STACK:
      iconName = focused ? "home" : "home-outline";
      break;
    case ROUTES.LOCATION_STACK:
      iconName = focused ? "location" : "location-outline";
      break;
    case ROUTES.PLAYGROUND_STACK:
      iconName = focused ? "game-controller" : "game-controller-outline";
      break;
    default:
      return null;
  }
  return <Ionicons name={iconName} size={26} color={color} />;
};
