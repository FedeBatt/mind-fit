import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Text from "../Text/Text";
import { TEXT_TYPE } from "../Text/Text.constants";
import { ROUTES, ROUTE_NAMES } from "../../constants/routes";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./TopBar.styles";
import theme from "../../theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TopBar = ({ navigation, route }) => {
  const { top } = useSafeAreaInsets();
  const routeName = ROUTES[route.name];

  const canGoBack = () => {
    if (
      route.name === ROUTES.HOME ||
      route.name === ROUTES.LOCATION ||
      route.name === ROUTES.PLAYGROUND
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.topWrapper(top)} />
      <View style={Styles.wrapper}>
        {canGoBack() ? (
          <TouchableOpacity style={Styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons
              name="md-arrow-back"
              size={theme.sizes[6]}
              color={theme.colors.basic.black100}
            />
          </TouchableOpacity>
        ) : null}
        <Text style={Styles.text({ canGoBack })} type={TEXT_TYPE.SUBTITLE}>
          {ROUTE_NAMES[routeName]}
        </Text>
      </View>
    </View>
  );
};

export default TopBar;
