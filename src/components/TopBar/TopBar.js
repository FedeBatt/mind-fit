import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Text from "../Text/Text";
import { TEXT_TYPE } from "../Text/Text.constants";
import { ROUTE_NAMES } from "../../constants/routes";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./TopBar.styles";
import theme from "../../theme";

const TopBar = ({ navigation, route }) => {
  const routeName = ROUTE_NAMES[route.name];

  const canGoBack = () => {
    if (
      route.name === ROUTE_NAMES.HOME ||
      route.name === ROUTE_NAMES.LOCATION ||
      route.name === ROUTE_NAMES.PLAYGROUND
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleRouteName = () => {
    switch (routeName) {
      case ROUTE_NAMES.HOME:
        return "Inicio";
      case ROUTE_NAMES.FAMILY_MEMO:
        return "Familia";
      case ROUTE_NAMES.LOCATION:
        return "Ubicacion";
      case ROUTE_NAMES.PLAYGROUND:
        return "Juegos";
      default:
        return null;
    }
  };

  return (
    <SafeAreaView>
      <View style={Styles.wrapper}>
        {canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={Styles.backButton}
              name="md-arrow-back"
              size={theme.sizes[6]}
              color={theme.colors.basic.black100}
            />
          </TouchableOpacity>
        ) : null}
        <Text style={Styles.text({canGoBack})} type={TEXT_TYPE.SUBTITLE}>
          {handleRouteName()}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
